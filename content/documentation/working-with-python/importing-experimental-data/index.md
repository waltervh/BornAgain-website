+++
title = "Importing experimental data"
weight = 80
+++

## Importing experimental data

This tutorial covers some practical aspects of importing experimental data in BornAgain for further fitting using Python interface.
Fitting from GUI is covered in [this]({{% relref "documentation/running-gui/gui-fitting/index.md" %}}) tutorial.

BornAgain i/o module supports only very few file formats: `ascii`, `tiff` and our own internal format. This might be not enough when
it comes to the fitting the data obtained from some particular instrument.
However, we fully support fitting of the data presented in the form of `numpy` arrays.

Thus, fitting workflow is following

* User imports the data into numpy array.
* User creates simulation with beam, sample and detector defined.
  * The number of detector pixels must match the shape of numpy array.
  * User create region of interest to simulate/fit only some selected rectangle on his experimental image.
* User passes simulation and numpy array to fitting engine.

{{% alert theme="info" %}}
To load experimental data into numpy array one can use [Fabio library](https://github.com/silx-kit/fabio)
which supports many of common file formats in scattering community.
{{% /alert %}}

### Experiment

As an example we will use our own measurements performed  at the laboratory diffractometer [GALAXI](http://www.fz-juelich.de/jcns/jcns-2//DE/Leistungen/GALAXI/_node.html) in Forschungszentrum Jülich.

A complete example, containing less explanations but more code, can be found in
[Real life fit example: experiment at GALAXI]({{% ref-example "fitting-new/extended/experiment-at-galaxi" %}}).

Our sample represents a 3-layer system (substrate, teflon and air)
with Ag nanoparticles sitting on top of teflon layer.
The PILATUS 1M detector was placed at a distance of 1730 mm downstream of the sample.

{{< figscg src="./setup_galaxi_experiment.png" class="center" >}}

The results of the measurement are represented by the intensity image taken in certain conditions
(beam wavelength, inclination angle, detector position) and stored in a 32-bit tiff file. To be able to fit these data we have to

* prepare a description of the simulation
* load the experimental data in BornAgain's fitting engine

Please refer to [Introduction to fitting]({{% ref-tutorial "introduction-to-fitting/index.md" %}})
and [Basic fitting]({{% ref-tutorial "basic-fitting-tutorial/index.md" %}}) tutorials which explain fitting workflow in more detail.

### Preparing simulation description

From the experimental setup we know the following:

* detector geometry: number of pixels, pixel size
* detector orientation: perpendicular to the beam
* detector position: distance to the sample, coordinates of direct beam hitting the detector plane

In BornAgain, we will represent this setup using the RectangularDetector object.
First, we create a detector corresponding to PILATUS detector by providing the number of detector bins and the detector's size in millimeters:

{{< highlight python >}}

npx, npy = 981, 1043
pixel_size = 0.172  # in mm
width = npx*pixel_size
height = npy*pixel_size

detector = RectangularDetector(npx, width, npy, height)

{{< /highlight >}}

Then we define the position of direct beam in local detector coordinates (i.e. millimeters) and set the detector perpendicular to direct beam at certain distance:

{{< highlight python >}}

detector_distance = 1730.0  # in mm
 
# position of direct beam in pixels, (0,0) corresponds to lower left corner of the image
beam_xpos, beam_ypos = 597.1, 323.4  # in pixels
 
# position of direct beam in local detector coordinates
u0 = beam_xpos*pixel_size  # in mm
v0 = beam_ypos*pixel_size  # in mm
 
detector.setPerpendicularToDirectBeam(detector_distance, u0, v0)

{{< /highlight >}}

See also [Rectangular detector tutorial]({{% ref-tutorial "detector-types/rectangular-detector/index.md" %}})
and [Rectangular detector example]({{% ref-example "beam-and-detector/rectangular-detector" %}}).

### Setting region of interest

To speed-up the simulation
and to avoid influence of unnecessary areas on the fit flow it is often convenient to
define a certain region of interest `roi`. In our example we set the `roi` to the rectangle with
lower left corner coordinates (85.0, 70.0) and upper right corner coordinates (120.0, 92.0), where coordinates are expressed in native detector units 
(`mm` for `RectangularDetector`)

```python
simulation.setRegionOfInterest(85.0, 70.0, 120.0, 92.)
```

{{< galleryscg >}}
{{< figscg src="./galaxi_imported_data.png" width="350px" class="center">}}
{{< figscg src="./galaxi_cropped_data.png" width="350px" class="center">}}
{{< /galleryscg >}}

The final simulation setup looks like the following:

{{< highlight python >}}

simulation = GISASSimulation()
simulation.setDetector(detector)  # this is our rectangular detector
simulation.setSample(sample)  # sample creation is not covered by this tutorial
simulation.setBeamParameters(1.34*angstrom, 0.463*degree, 0.0)
simulation.setBeamIntensity(1.2e7)
simulation.setRegionOfInterest(85.0, 70.0, 120.0, 92.)

{{< /highlight >}}

### Importing real data using Fabio library

[Fabio library](https://github.com/silx-kit/fabio) provide a convenient way to import experimental data in the form of `numpy` array.

```python
import fabio

img = fabio.open("galaxi_data.tif.gz")
data = img.data.astype("float64")
```

### Setting up the fit

To perform fitting a special FitSuite object is required. Setting it up is straighforward

{{< highlight python >}}

fitSuite = FitSuite()
fitSuite.addSimulationAndRealData(simulation, data)
 
# fit parameters setup
...
 
fitSuite.runFit()

{{< /highlight >}}

During the fit, only the detector corresponding to the `roi` will be simulated and used for $\chi^2$ calculations.

Complete example can be found in [Real life fit example: experiment at GALAXI]({{% ref-example "fitting-new/extended/experiment-at-galaxi" %}}).

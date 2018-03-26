+++
title = "Importing experimental data"
weight = 80
+++

## Importing experimental data

This tutorial covers some practical aspects of importing experimental data in BornAgain for further fitting.

As an example we will use our own measurements performed  at the laboratory diffractometer [GALAXI](http://www.fz-juelich.de/jcns/jcns-2//DE/Leistungen/GALAXI/_node.html) in Forschungszentrum Jülich.

A complete example, containing less explanations but more code, can be found in
[Real life fit example: experiment at GALAXI]({{% ref-example "fitting/fit-galaxi-data" %}}).

### Experiment

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

The final simulation setup looks like the following:

{{< highlight python >}}

simulation = GISASSimulation()
simulation.setDetector(detector)  # this is our rectangular detector
simulation.setSample(sample)  # sample creation is not covered by this tutorial
simulation.setBeamParameters(1.34*angstrom, 0.463*degree, 0.0)
simulation.setBeamIntensity(1.2e7)

{{< /highlight >}}

### Importing real data

As explained in [Accessing simulation results]({{% ref-tutorial "accessing-simulation-results/index.md" %}}) tutorial,
the intensity data are stored in BornAgain in special objects of `Histogram2D` type.
They are used both for retrieving the simulation results, and for passing the intensity data inside the fitting kernel.

In the code snippet below, such an object is created with the same parameters as our rectangular detector,
and than filled with intensity values from our experimental data file.

{{< highlight python >}}

hist = Histogram2D(npx, 0.0, width, npy, 0.0, height)
hist.load("galaxi_data.tif.gz")

{{< /highlight >}}

Alternatively, one can retrieve the histogram directly from the simulation and than fill it with experimental intensity values

{{< highlight python >}}

hist = simulation.getIntensityData()
hist.load("galaxi_data.tif.gz")

{{< /highlight >}}

{{% alert theme="warning" %}}Please note, that the size of the tiff image (width x height) in file should coincide with the dimensions of the histogram.{{% /alert %}}

The resulting image can be plotted as colormap using `matplotlib.pyplot` library using

{{< highlight python >}}

im = matplotlib.pyplot.imshow(hist.getArray(),
        norm=matplotlib.colors.LogNorm(1.0, hist.getMaximum()),
        extent=[hist.getXmin(), hist.getXmax(), hist.getYmin(), hist.getYmax()],
        aspect='auto')

{{< /highlight >}}

{{< figscg src="./galaxi_imported_data.png" width="400px" class="center">}}

Here the axes are labelled $U\_{mm}, V\_{mm}$ instead of the usual $X\_{mm}, Y\_{mm}$ to emphasize the fact,
that `Histogram2D` represents the detector's local coordinates, and not the main BornAgain reference frame related to the sample.

### Cropping, masking

At this point we have created the simulation, initialised it with `RectangularDetector`,
prepared `Histogram2D` object whose axes correspond to the detector axes. Finally we have filled histogram with experimental intensity values.

The next step will be to crop the experimental image to a certain region of interest to speed-up the simulation
and to avoid influence of unnecessary areas on the fit flow. This is done simply by

{{< highlight python >}}

cropped_hist = hist.crop(85.0, 70.0, 120.0, 92.)  # xmin, ymin, xmax, ymax

{{< /highlight >}}

where the cropped area is represented by a rectangle with lower left and upper right corners defined in
the detector's local coordinates and units (i.e. millimeters in the case of `RectangularDetector`). The resulting image will be

{{< figscg src="./galaxi_cropped_data.png" width="600px" class="center">}}

As the last step before fitting, we mask the reflected beam (as it is not simulated by BornAgain) by adding rectangular mask to the simulation

{{< highlight python >}}

simulation.addMask(Rectangle(101.9, 82.1, 103.7, 85.2), True)

{{< /highlight >}}

See [Fitting with masks]({{% ref-example "fitting/fit-with-masks" %}}) example for more details.

### Setting up the fit

To perform fitting a special FitSuite object is required. Setting it up is straighforward

{{< highlight python >}}

fitSuite = FitSuite()
fitSuite.addSimulationAndRealData(simulation, cropped_hist)
 
# fit parameters setup
...
 
fitSuite.runFit()

{{< /highlight >}}

During the fit, only non-masked areas of the detector corresponding to the `cropped_hist` will be simulated and used for $\chi^2$ calculations.

Complete example can be found in [Real life fit example: experiment at GALAXI]({{% ref-example "fitting/fit-galaxi-data" %}}).

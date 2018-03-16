+++
title = "Accessing simulation results"
weight = 30
+++

## Accessing simulation results

In this tutorial we explain how to access GISAS simulation results, 
how to plot the simulated detector 2D intensity map as a color map,
how to export the result into various formats and how to import experimental data into BornAgain for further fitting.

The detector intensity in BornAgain can be retrieved via special objects of `Histogram2D` types. Two possible user scenarios are further detailed:

* A user runs a simulation and then accesses the detector intensity data either for immediate plotting or for saving it in some external format for later processing in the software of his choice.
* A user imports his experimental data into BornAgain to performe some fitting procedures.

### Accessing simulation results

The `Histogram2D` object is used to store the intensity data in detector
channels together with the detector axes definition.
The object can be retrieved from the simulation after it is completed using the method `Simulation::getIntensityData`, as shown in code snippet below.

```python

simulation = GISASSimulation()
simulation.setDetectorParameters(20, -1.0*deg, 1.0*deg, 10, 0.0*deg, 1.0*deg)
simulation.setSample(sample)
simulation.runSimulation()
 
result = simulation.getIntensityData()

```

The user can convert a `Histogram2D` object into a numpy array and proceed
with it in the manner he is more comfortable with.
In the code snippet below the method `Histogram2D::getArray` returns a numpy array of the same shape as the detector pixel array.
The method `numpy.savetxt` from the numpy library saves the data to an ASCII file.

```python

arr = simulation.getIntensityData().getArray()
numpy.savetxt("intensity.txt", arr)

```

### Plotting simulation results

The `Histogram2D` object offers a few convenience methods that can be used during the plotting to get,
for example, the dimension of the axes and the maximum intensity value. In the code example below,
the intensity data is plotted as a colormap in logarithmic scale using `matplotlib.pyplot`
library and convenience methods provided by `Histogram2D`.

```python

im = matplotlib.pyplot.imshow(result.getArray(),
        norm=matplotlib.colors.LogNorm(1.0, result.getMaximum()),
        extent=[result.getXmin(), result.getXmax(), result.getYmin(), result.getYmax()],
        aspect='auto')

```

In this case the axes units will be radians (which are the axes units of `SphericalDetector` initialized by default).
See also [Accessing simulation results]({{% ref-example "miscellaneous/AccessingSimulationResults.md" %}})
example for more convenience methods.

### Plotting with axes in different units.

By default, the `Simulation::getIntensityData` method returns a `Histogram2D` object
whose axes are defined in the default detector's units. Namely, in the case of a
simulation with a `SphericalDetector` these units are radians,
while for `RectangularDetector` axes units will be expressed in millimeters.
By providing an additional parameter it is also possible to get the histogram axes defined in other units:

```python

# in default units (radians for SphericalDetector, millimeters for RectangularDetector)
result = simulation.getIntensityData()
 
# in millimeters (only for RectangularDetector)
result = simulation.getIntensityData(IDetector2D.MM)
 
# in detector bins
result = simulation.getIntensityData(IDetector2D.NBINS)
 
# in degrees
result = simulation.getIntensityData(IDetector2D.DEGREES)
 
# in radians
result = simulation.getIntensityData(IDetector2D.RADIANS)
 
# in Qy, Qz space [1/nm] 
result = simulation.getIntensityData(IDetector2D.QYQZ)

```

See also [Plotting with axes in different units]({{% ref-example "miscellaneous/AxesInDifferentUnits.md" %}}) example.

### Saving results on disk

A `Histogram2D::save` method can be used to save histograms on disk. For the moment we support three formats:

```python
result = simulation.getIntensityData()
 
# writes simple ASCII file suitable for numpy/matlab etc (equivalent to numpy.savetxt).
result.save("result.txt")
 
# writes 32-bit tiff file
result.save("result.tif")
 
# writes ASCII file in BornAgain format (axes information added)
result.save("result.int")
```

By providing an additional suffix to file name extention, it is possible to zip files on the fly:

```python
# writes simple ASCII file
result.save("result.txt")
 
# writes g-zipped version of ASCII file
result.save("result.txt.gz")
 
# writes b-zipped version of ASCII file
result.save("result.txt.bz2")
```

{{% alert theme="info" %}}
Please note, that  the histogram axes information (min, max, variable axes binning, if any)
is serialized only while saving into *.int files.
For *.tif and *.txt files only the intensity map is stored.
{{% /alert %}}

### Reading results from disk

A new histogram object can be created from a file using:

```python
result = IHistogram.createFrom("result.txt")
result = IHistogram.createFrom("result.tif.gz")
result = IHistogram.createFrom("result.int.bz2")
```
{{% alert theme="info" %}}
Please note, that since simple *.txt and *.tif file do not contain axes definitions,
the axes of the created histogram will be given in pixels numbers (i.e. `xmin=0.0`, `xmax = npx`, `ymin=0.0`, `ymax=npy`)
{{% /alert %}}

It is also possible to create an empty histogram with the definition of the correct axes,
and then fill its content using data stored in, for example, tiff file.

```python
histogram = Histogram2D(100, -1.0*deg, 1.0*deg, 100, 0.0*deg, 2.0*deg)
histogram.load("data.tif.bz")
```

The size of the tiff image `width` x `height` should coincide with the histogram dimensions `nBinsX` x `nBinsY`.

### Other convenience methods

The `Histogram1D` and `Histogram2D` classes have a set of additional convenience methods
to perform basic data treatment tasks

* Histogram clipping to draw only the region of interest
* Slicing of 2D histograms into 1D histograms
* Creation of relative difference histograms, and many other

Additional information can be found in the following pages:

* [Accessing simulation results example]({{% ref-example "miscellaneous/AccessingSimulationResults.md" %}})
* [Plotting with axes in different units]({{% ref-example "miscellaneous/AxesInDifferentUnits.md" %}})
* [Histogram1D C++ class reference](http://apps.jcns.fz-juelich.de/doxy/BornAgain/classHistogram1D.html)
* [Histogram2D C++ class reference](http://apps.jcns.fz-juelich.de/doxy/BornAgain/classHistogram2D.html)


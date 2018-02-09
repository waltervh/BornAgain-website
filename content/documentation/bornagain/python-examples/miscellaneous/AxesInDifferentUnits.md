+++
title = "Plotting with axes in different units"
weight = 11
+++

### Plotting with axes in different units

In this example we demonstrate how to plot intensity data with detector axes expressed in different units. It serves as a supporting example to the Accessing Simulation Results tutorial.

* The standard "Cylinders in DWBA" sample (see [this example]({{%relref "documentation/bornagain/python-examples/embedded-particles/CylindersInDWBA.md" %}})) is used to setup the simulation.
* When the simulation is completed, the `Simulation::getIntensityData()` method is used to get a `Histogram2D` object.
* Depending on an additional parameter `IDetector2D.NBINS`, `IDetector2D.DEGREES`, `IDetector2D.QYQZ`, the axes of the histogram will be defined either in millimeters (default units of RectangularDetector), detector bins, degrees or Q.
* Please note, that the given parameter only affects min/max values of histogram axes (there is no rebinning involved).


{{< galleryscg >}}
{{< figscg src="../AxesInDifferentUnits.png" width="600px" caption="Intensity Image">}}
{{< /galleryscg >}}

#### Python script:
{{< highlightloc file="AxesInDifferentUnits.py" language="python" >}}

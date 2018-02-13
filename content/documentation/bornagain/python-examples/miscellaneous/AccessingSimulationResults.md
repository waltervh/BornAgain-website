+++
title = "Accessing simulation results"
weight = 11
+++

### Accessing simulation results

This is an extended example for the further treatment of simulation results: accessing the results, plotting, cropping, slicing and exporting. This serves as a supporting example to the ????Accessing Simulation Results tutorial????.

* The standard "Cylinders in DWBA" sample (see [this example]({{%relref "documentation/bornagain/python-examples/embedded-particles/CylindersInDWBA.md" %}})) is used for running the simulation.
* The simulation results are retrieved as a `Histogram2D` object and then processed in various functions to achieve a resulting image.


{{< galleryscg >}}
{{< figscg src="../AccessingSimulationResults.png" width="670px" caption="Intensity image">}}
{{< /galleryscg >}}

#### Python script:
{{% highlightfile file="/static/files/python/simulation/ex07_Miscellaneous/AccessingSimulationResults.py" language="python" %}}
+++
title = "Simultaneous fit of two datasets"
weight = 11
+++

### Simultaneous fit of two datasets

In this example we demonstrate how to fit two datasets simultaneously.

Suppose that we have a sample measured twice for two different incident angles. We are going to fit both datasets simultaneously to find the unknown sample parameters.

To do this, we define one dataset (a pair of real data and corresponding simulation model) for the first incidence angle and another pair of (real data, simulation model) for the second incidence angle. We add both pairs to the `FitSuite` and run the fitting as usual.

* In the given example (see the [Python script]({{% relref "documentation/python-examples/fitting/SimultaneousFitOfTwoDatasets.md#python-script" %}})) we simulate hemi-ellipsoids on top of a substrate without interference. At lines 160-162 we define 3 fitting parameters: `RadiusX` and `Height` are parameters to find, `RadiusY` is fixed.
* At lines 145-153 we define two fixed incident alpha angles equal to $0.1^{\circ}$ and $0.4^{\circ}$ and generate two datasets. These datasets are then used to initialize `FitSuite` via `addSimulationAndRealData` method.
* The majority of the code is located in custom `DrawObserver` class defined at line 68, which plots the fit progress for both datasets simultaneously every 10th iteration.

{{< galleryscg >}}
{{< figscg src="/files/Examples_images/PyExamples/SimultaneousFitOfTwoDatasets.png" width="600px" caption="Intensity images">}}
{{< /galleryscg >}}

#### Python script:
{{% highlightfile file="/static/files/python/fitting/ex08_SimultaneousFitOfTwoDatasets/SimultaneousFitOfTwoDatasets.py" language="python" %}}
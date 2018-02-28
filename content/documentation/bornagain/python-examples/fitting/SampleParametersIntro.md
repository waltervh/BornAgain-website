+++
title = "Working with sample parameters"
weight = 11
+++

### Working with sample parameters

This example shows how to create a sample with fixed parameters and then change these parameters on the fly during runtime. The example doesn't contain any fitting and serves as a gentle introduction to other fitting examples. See the [Python script]({{% relref "documentation/bornagain/python-examples/fitting/SampleParametersIntro.md#python-script" %}}) below:

* Lines 14-42: the sample representing cylinders and prisms on top of substrate without interference is created.
* Lines 45-53: beam and detector parameters are defined.
* Line 63: the tree structure of the sample is printed.
* Line 66: sample parameters are printed.
* Lines 74-75: initial sample is simulated (simulation #1).
* Line 80: height of the cylinder is changed using the  exact parameter name.
* Line 90: shows the use of wildcards. All parameters matching the criteria will be changed.
* Lines 97-98: both dimensions of the prism (half_side and height) will be changed.

{{< galleryscg >}}
{{< figscg src="/files/Examples_images/PyExamples/SampleParametersIntro.png" width="600px" caption="Intensity image">}}
{{< /galleryscg >}}

#### Python script:
{{% highlightfile file="/static/files/python/fitting/ex01_SampleParametersIntro/SampleParametersIntro.py" language="python" %}}
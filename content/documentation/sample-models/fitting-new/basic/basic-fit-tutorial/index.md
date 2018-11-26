+++
title = "Basic fit example"
weight = 20
+++

## Basic fit example

In this example we use a simple geometry: cylinders and prisms in air layer, deposited on a substrate layer, with no interference. There are 4 fitting parameters:

1. radius of cylinders
2. height of cylinders
3. side length of prisms
4. height of prisms

Our reference data are a “noisy” two-dimensional intensity map obtained from the simulation of the same geometry with a fixed value of 5nm for all sizes of cylinder and prisms.
Then we run our fitting using default minimizer settings starting with a cylinder’s height of $4$ nm, a cylinder’s radius of $6$ nm, a prism’s half side of $12$ nm and a height equal to $4$ nm. 
As a result, the fitting procedure is able to find the correct value of $5$ nm for all four parameters.

{{< galleryscg >}}
{{< figscg src="basic_fitting_tutorial.png" width="600px" caption="Fit window">}}
{{< /galleryscg >}}

{{% highlightfile file="/static/files/python/fitting-new/ex01_BasicExamples/basic_fitting_tutorial.py" language="python" %}}

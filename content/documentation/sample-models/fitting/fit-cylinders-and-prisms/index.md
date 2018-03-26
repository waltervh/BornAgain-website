+++
title = "Fit cylinders and prisms"
weight = 11
+++

### Fit cylinders and prisms

In this example we use a simple geometry: cylinders and prisms in air layer, deposited on a substrate layer, with no interference. There are 4 fitting parameters:  

1. radius of cylinders
2. height of cylinders
3. side length of prisms
4. height of prisms

Our reference data are a “noisy” two-dimensional intensity map obtained from the simulation of the same geometry with a fixed value of $5$ nm for the height and radius of cylinders and for the height of prisms which have a $10$-nanometer-long side length. Then we run our fitting using default minimizer settings starting with a cylinder’s height of $4$ nm, a cylinder’s radius of $6$ nm, a prism’s half side of $6$ nm and a height equal to $4$ nm. As a result, the fitting procedure is able to find the correct value of $5$ nm for all four parameters.

{{< galleryscg >}}
{{< figscg src="FitCylindersPrisms.png" width="600px" caption="Intensity image">}}
{{< /galleryscg >}}

#### Python script:
{{% highlightfile file="/static/files/python/fitting/ex02_FitBasics/FitCylindersPrisms.py" language="python" %}}
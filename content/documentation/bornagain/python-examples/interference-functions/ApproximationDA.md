+++
title = "Size-distribution model: Decoupling Approximation"
weight = 11
+++

### Size-distribution model: Decoupling Approximation

Scattering from a distribution of cylinders of two different sizes using the Decoupling Approximation.

* The sample is made of cylinders deposited on a substrate.
* The distribution of particles is made of:
    * 80% of cylinders with radii and heights equal to $5$ nm
    * 20% of cylinders with radii and heights equal to $8$ nm.
* The interference function is Radial Paracrystal with a peak distance of $18$ nm and a damping length of $1$ $\mu$m.
* The wavelength is equal to $1$ $\unicode{x212B}$.
* The incident angles are $\alpha\_i = 0.2 ^{\circ}$ and $\phi\_i = 0^{\circ}$.

{{< galleryscg >}}
{{< figscg src="../ApproximationDA.png" width="450px" caption="Intensity image">}}
{{< /galleryscg >}}

#### Python script:
{{% highlightfile 
file="/static/files/python/simulation/ex03_InterferenceFunctions/ApproximationDA.py" language="python" %}}
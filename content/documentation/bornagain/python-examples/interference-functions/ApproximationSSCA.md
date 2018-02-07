+++
title = "Size-distribution model: Size-Spacing Coupling Approximation"
weight = 11
+++

### Size-distribution model: Size-Spacing Coupling Approximation

Scattering from cylinders of two different sizes using the Size-Spacing Coupling Approximation.

* The sample is made of cylinders deposited on a substrate.
* The distribution of particles is made of:
    * 80% of cylinders with radii and heights equal to 5 nm
    * 20% of cylinders with radii and heights equal to 8 nm.
* The interference function is Radial Paracrystal with a peak distance of 18 nm and a damping length of 1 μm.
* The wavelength is equal to 1 Å.
* The incident angles are αi = 0.2° and Φi = 0°.
* The Size-Spacing Coupling Approximation is implemented using the function setApproximation. By default the Decoupling Approximation is used (see Size-distribution model: Decoupling Approximation).
* For this size-distribution model, an additional dimensionless parameter, the coupling parameter Kappa, has to be specified. It defines how the distance between particles is linked with their sizes.

{{< galleryscg >}}
{{< figscg src="../ApproximationSSCA.png" width="320px" caption="Intensity Image">}}
{{< /galleryscg >}}

#### Python script:
{{< highlightloc file="ApproximationSSCA.py" language="python" >}}

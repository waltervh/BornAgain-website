+++
title = "Size-distribution model: Local Monodisperse Approximation"
weight = 11
+++

### Size-distribution model: Local Monodisperse Approximation

Scattering from cylinders of two different sizes using the Local Monodisperse Approximation (LMA).

* The sample is made of cylinders deposited on a substrate.
* The cylinders are of two different sizes:
    * 80% of Type 1: radius R1 = 5nm, height H1 = 5 nm. The interference function is a radial paracrystal with a peak distance equal to 16.8 nm and a damping length of 1 μm.
    * 20% of Type 2: radius R2 = 8 nm, height H2 = 8 nm. The interference function is also a radial paracrystal but with a peak distance of 22.8 nm and a damping length equal to 1 μm. 
* Each type of cylinders is associated with a "particle layout".
* The LMA is used since the sample is made of two domains containing particles of the same size and shape.
* The wavelength is equal to 1 Å.
* The incident angles are αi = 0.2° and Φi = 0°.

{{< galleryscg >}}
{{< figscg src="../ApproximationLMA.png" width="320px" caption="Intensity Image">}}
{{< /galleryscg >}}

#### Python script:
{{< highlightloc file="ApproximationLMA.py" language="python" >}}

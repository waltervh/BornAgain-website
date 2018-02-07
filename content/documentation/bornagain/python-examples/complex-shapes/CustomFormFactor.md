+++
title = "Custom Form Factor"
weight = 11
+++

### Custom Form Factor

Scattering from a monodisperse distribution of particles, whose form factor is defined by the user.

* This example shows how users can simulate their own particle shape by implementing the analytical expression of its form factor.
* The particular shape used here is a polyhedron, whose planar cross section is a "plus" shape with a side length of 20 nm and a height of 15 nm.
* These particles are distributed on a substrate.
* There is no interference between the scattered waves.
* The wavelength is equal to 1 Å.
* The incident angles are αi = 0.2° and Φi = 0°.


{{< galleryscg >}}
{{< figscg src="../CustomFormFactor_setup.jpg" width="320px" caption="Real-space model">}}
{{< figscg src="../CustomFormFactor.png" width="320px" caption="Intensity Image">}}
{{< /galleryscg >}}

#### Python script:
{{< highlightloc file="CustomFormFactor.py" language="python" >}}


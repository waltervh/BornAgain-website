+++
title = "Rotated Pyramids"
weight = 11
+++

### Rotated Pyramids

Scattering from a monodisperse distribution of rotated pyramids.

This example illustrates how the in-plane rotation of non-radially symmetric particles influences the scattering pattern.

* The sample is made of pyramids deposited on a substrate.
* Each pyramid is characterized by a squared-base side length of 10 nm, a height of 5 nm, and a base angle α equal to 54.73°.
* These particles are rotated in the (x, y) plane by 45°.
* There is no interference between the scattered waves.
* The wavelength is equal to 1 Å.
* The incident angles are αi = 0.2° and Φi = 0°.

{{< galleryscg >}}
{{< figscg src="../RotatedPyramids_setup.jpg" width="320px" caption="Real-space model">}}
{{< figscg src="../RotatedPyramids.png" width="320px" caption="Intensity Image">}}
{{< /galleryscg >}}

#### Python script:
{{< highlightloc file="RotatedPyramids.py" language="python" >}}

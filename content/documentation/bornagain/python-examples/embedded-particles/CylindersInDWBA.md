+++
title = "Cylinders in Distorted Wave Born Approximation"
weight = 20
+++

### Cylinders in Distorted Wave Born Approximation

Scattering from a monodisperse distribution of cylindrical particles using the Distorted Wave Born Approxiamtion (DWBA).

This example is similar to the simulation in Born Approximation, CylindersInBA, but now the particles sit on top of a substrate. Therefore incoming and scattered waves are distorted by reflections from the substrate surface, as described by the DWBA.

* The distribution of cylinders is monodisperse with heights and radii of 5 nm.
* The wavelength is equal to 1 Å.
* The incident angles are equal to αi = 0.2°, Φi = 0°.
* No interference effects from inter-particle correlations (dilute-particles approximation).

{{< galleryscg >}}
{{< figscg src="../CylindersInDWBA_setup.jpg" width="320px" caption="Real-space model">}}
{{< figscg src="../CylindersInDWBA.png" width="320px" caption="Intensity Image">}}
{{< /galleryscg >}}

#### Python script:
{{< highlightloc file="CylindersInDWBA.py" language="python" >}}

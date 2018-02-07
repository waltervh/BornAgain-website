+++
title = "Core shell nanoparticles"
weight = 11
+++

### Core shell nanoparticles

Scattering from cuboidal core-shell particles.

* The sample is made of core-shell particles whose outer and inner shells are boxes with dimensions L1 = W1 = 16 nm, H1 = 8 nm and L2 = W2 = 12 nm, H2 = 7 nm, respectively, where Li, Wi, and Hi are the length, width and height of box i.
* The smaller box is positioned so that the centres of the bottom faces of both particles coincide.
* The simulation is run using the Born approximation. There is no substrate and no interference between the different scattered beams.
* The planar distribution of the particles is diluted and random.
* The incident wavelength is equal to 1 Å.
* The incident angles are αi = 0.2° and Φi = 0°.  


{{< galleryscg >}}
{{< figscg src="../CoreShellNanoparticles_setup.jpg" width="320px" caption="Real-space model">}}
{{< figscg src="../CoreShellNanoparticles.png" width="320px" caption="Intensity Image">}}
{{< /galleryscg >}}

#### Python script:
{{< highlightloc file="CoreShellNanoparticles.py" language="python" >}}


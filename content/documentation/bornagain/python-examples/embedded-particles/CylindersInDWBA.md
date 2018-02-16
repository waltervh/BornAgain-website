+++
title = "Cylinders in Distorted Wave Born Approximation"
weight = 20
+++

### Cylinders in Distorted Wave Born Approximation

Scattering from a monodisperse distribution of cylindrical particles using the Distorted Wave Born Approxiamtion (DWBA).

This example is similar to the simulation [Cylinders in Born Approximation]({{% relref "documentation/bornagain/python-examples/embedded-particles/CylindersInBA.md" %}}), but now the particles sit on top of a substrate. Therefore incoming and scattered waves are distorted by reflections from the substrate surface, as described by the DWBA.

* The distribution of cylinders is monodisperse with heights and radii of $5$ nm.
* The wavelength is equal to $1$ $\unicode{x212B}$.
* The incident angles are equal to $\alpha\_i = 0.2 ^{\circ}$ and $\phi\_i = 0^{\circ}$.
* No interference effects from inter-particle correlations (dilute-particles approximation).

{{< galleryscg >}}
{{< figscg src="/files/Examples_images/real_space_images/CylindersInDWBA_setup.jpg" width="350px" caption="Real-space model">}}
{{< figscg src="/files/Examples_images/PyExamples/CylindersInDWBA.png" width="350px" caption="Intensity image">}}
{{< /galleryscg >}}

#### Python script:
{{% highlightfile file="/static/files/python/simulation/ex01_BasicParticles/CylindersInDWBA.py" language="python" %}}

+++
title = "Specular scattering"
weight = 11
+++

### Specular scattering

Specular scattering from a multilayered sample with surface roughness.

* The sample is composed of a substrate on which is sitting a stack of layers (similar to [Correlated Roughness]({{% relref "documentation/bornagain/python-examples/layered-structures/CorrelatedRoughness.md" %}})). These layers consist in a repetition of $10$ times two different superimposed layers (from bottom to top):

    * layer A: $5$ nm thick with a real refractive index $n = 5\cdot10^{-6}$
    * layer B: $10$ nm thick with a real refractive index $n = 10\cdot10^{-6}$
* There is no added particle.
* All layers present the same type of roughness on the top surface, which is characterized by (see [Correlated Roughness]({{% relref "documentation/bornagain/python-examples/layered-structures/CorrelatedRoughness.md" %}}) for a definition of the "roughness" parameters) :
    * a rms roughness of the interfaces $\sigma=1$ nm,
    * a Hurst parameter $H$ equal to $0.3$,
    * a lateral correlation length $\xi$ of $500$ nm,
    * a cross correlation length $\xi_{\perp}$ equal to $0$ nm.
* The incident beam is characterized by a wavelength of $1.54$ $\unicode{x212B}$.
* The incident angle $\alpha\_i$ varies between $0^{\circ}$ and $2^{\circ}$.
* The numerical result is a plot of the detected signal data for the selected layer as a function of the incident angle $\alpha\_i$.

{{< galleryscg >}}
{{< figscg src="../BasicSpecularSimulation_setup.jpg" width="450px" caption="Real-space model">}}
{{< figscg src="../BasicSpecularSimulation.png" width="670px" caption="Intensity image">}}
{{< /galleryscg >}}

#### Python script:
{{% highlightfile file="/static/files/python/simulation/ex06_Reflectometry/BasicSpecularSimulation.py" language="python" %}}



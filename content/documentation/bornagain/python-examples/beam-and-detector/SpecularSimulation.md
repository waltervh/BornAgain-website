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
* The numerical results are plots of the Fresnel coefficients $|R|$ and $|T|$ for different layers as functions of the incident angle $\alpha\_i$. The layers are numbered starting from the top layer (air). Therefore
    * Layer 0 is the air layer, for which $|T|=1$,
    * Layer 1 is the first material layer (layer A),
    * Layer 20 is the last material layer (layer B),
    * Layer 21 is the substrate, for which $|R|=0$.

{{< galleryscg >}}
{{< figscg src="../SpecularSimulation_setup.jpg" width="450px" caption="Real-space model">}}
{{< figscg src="../SpecularSimulation.png" width="650px" caption="Intensity image">}}
{{< /galleryscg >}}

#### Python script:
{{% highlightfile file="/static/files/python/simulation/ex05_BeamAndDetector/SpecularSimulation.py" language="python" %}}



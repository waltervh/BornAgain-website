+++
title = "Correlated roughness"
weight = 20
+++

### Correlated roughness

Scattering from a multilayered sample with correlated roughness.

* The sample is composed of a substrate on which is sitting a stack of layers. These layers consist in a repetition of 5 times two different superimposed layers (from bottom to top):
  * layer A: 2.5 nm thick with a real refractive index n = 1-5e-6.
  * layer B: 5 nm thick with a real refractive index n = 1-1e-5.
* There is no added particle. 
* All layers present the same type of roughness on the top surface, which is characterized by:
  * a rms roughness of the interfaces σ =1 nm,
  * a Hurst parameter H equal to 0.3,
  * a lateral correlation length ξ of 5 nm,
  * a cross correlation length ξ⊥ equal to 1e-4 nm.
* The incident beam is characterized by a wavelength of 1 Å.
* The incident angles are αi = 0.2° and Φi = 0°.

{{< figure src="../CorrelatedRoughness.png">}}

{{< figure src="../CorrelatedRoughness_setup.jpg">}}

{{< highlight python "linenos=table">}}
{{< readfile file="/content/documentation/bornagain/python-examples/layered-structures/CorrelatedRoughness.py">}}
{{< /highlight >}}

{{< link "documentation/bornagain/python-examples/layered-structures/CorrelatedRoughness.py" >}}
CorrelatedRoughness.py
{{< /link >}}


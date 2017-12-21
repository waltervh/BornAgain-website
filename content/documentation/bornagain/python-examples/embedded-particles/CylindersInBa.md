+++
title = "Cylinders in Born Approximation"
weight = 11
+++

### Cylinders in Born Approximation

Scattering from a monodisperse distribution of cylinders using the Born approximation.

* The cylinders are all identical with radii and heights equal to 5 nanometers.
* The wavelength is equal to 1 Å.
* The incident angles are equal to αi = 0.2° and Φi=0°.
* There is no substrate (particles are embedded in the air layer), hence no refraction, hence no distorted waves, hence DWBA boils down to regular Born approximation.
* Scattering is not affected by inter-particle correlations (dilute-particles approximation).

{{< galleryscg >}}
{{< figscg src="../CylindersInBA.png" width="320px" caption="A short caption">}}
{{< figscg src="../CylindersInBA_setup.jpg" width="320px" caption="A short caption">}}
{{< /galleryscg >}}


{{< highlight python "linenos=table">}}
{{< readfile file="/content/documentation/bornagain/python-examples/embedded-particles/CylindersInBA.py">}}
{{< /highlight >}}

{{< link "documentation/bornagain/python-examples/embedded-particles/CylindersInBA.py" >}}
CylindersInBA.py
{{< /link >}}

{{< highlightloc file="CylindersInBA.py" language="python" >}}

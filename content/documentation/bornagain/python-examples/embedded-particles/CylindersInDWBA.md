+++
title = "Cylinders in Distorted Wave Born Approximation"
weight = 20
+++

Scattering from a monodisperse distribution of cylindrical particles using the Distorted Wave Born Approxiamtion (DWBA).

This example is similar to the simulation in Born Approximation, CylindersInBA, but now the particles sit on top of a substrate. Therefore incoming and scattered waves are distorted by reflections from the substrate surface, as described by the DWBA.

* The distribution of cylinders is monodisperse with heights and radii of 5 nm.
* The wavelength is equal to 1 Å.
* The incident angles are equal to αi = 0.2°, Φi = 0°.
* No interference effects from inter-particle correlations (dilute-particles approximation).

{{< figure src="../CylindersInDWBA.png">}}

{{< figure src="../CylindersInDWBA_setup.jpg">}}

{{< highlight python "linenos=table">}}
{{< readfile file="/content/documentation/bornagain/python-examples/embedded-particles/CylindersInDWBA.py">}}
{{< /highlight >}}

{{< link "documentation/bornagain/python-examples/embedded-particles/CylindersInDWBA.py" >}}
CylindersInDWBA.py
{{< /link >}}


+++
title = "Cylinders with size distribution"
weight = 30
+++

### Cylinders with size distribution

Scattering from a polydisperse distribution of cylinders in Born Approximation.

* The average radii and heights of the cylinders are equal to 5 nm.
* The radii of the cylinders vary according to a normal distribution with a standard deviation σ equal to 0.2 times the average radius.
* The wavelength is equal to 1 Å.
* The incident angles are equal to αi = 0.2°and Φi = 0°.
* There is no substrate (particles embedded in air layer, DWBA boils down to BA).
* No interference effects from inter-particle correlations (dilute-particles approximation).

{{< figure src="../CylindersWithSizeDistribution.png">}}

{{< figure src="../CylindersWithSizeDistribution_setup.jpg">}}

{{% highlightfile file="/content/documentation/bornagain/python-examples/embedded-particles/CylindersWithSizeDistribution.py" language="python" %}}

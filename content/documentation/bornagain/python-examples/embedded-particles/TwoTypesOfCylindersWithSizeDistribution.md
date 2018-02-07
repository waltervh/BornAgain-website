+++
title = "Two types of cylinders with size distribution"
weight = 11
+++

### Two types of cylinders with size distribution

Scattering of a polydisperse distribution of two types of cylinders.

* The simulation is performed using the Born approximation, i.e. there is no "substrate" layer.
* The sample is made of polydisperse cylinders of two different sizes: R1 = H1 and R2 = H2, where Ri and Hi are the radius and width of cylinder of type i.
* There are 95% of cylinders of type 1 and 5% of cylinders of type 2.
* The polydispersity affects the radii of the cylinders, following a normal distribution. For the small cylinders, their characteristic sizes vary around R1 = 5 nm with a standard deviation σ1 = 0.2 R1. For type 2, the average value R2 is 10 nm and σ2 = 0.02 R2.
* There is also no interference between the scattered beams.
* The incident beam is characterized by a wavelength of 1 Å.
* The incident angles αi = 0.2° and Φi = 0°.


{{< galleryscg >}}
{{< figscg src="../TwoTypesOfCylindersWithSizeDistribution_setup.jpg" width="320px" caption="Real-space model">}}
{{< figscg src="../TwoTypesOfCylindersWithSizeDistribution.png" width="320px" caption="Intensity Image">}}
{{< /galleryscg >}}

#### Python script:
{{< highlightloc file="TwoTypesOfCylindersWithSizeDistribution.py" language="python" >}}

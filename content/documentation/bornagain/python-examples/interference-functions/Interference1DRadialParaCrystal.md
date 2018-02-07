+++
title = "Interference 1D Radial Paracrystal"
weight = 11
+++

### Interference 1D Radial Paracrystal

Scattering from a monodisperse distribution of cylinders positioned following a one-dimensional radial paracrystal.

* The sample is made of cylinders with radii and heights equal to 5nm, deposited on a substrate.
* The distribution of particles follows a radial paracrystal, characterized by a peak distance of 20 nm and a damping length of 1 μm.
* The wavelength is equal to 1 Å.
* The incident angles are αi = 0.2° and Φi = 0°.  

#### Note:
* A damping length is used to introduce finite size effects by applying a multiplicative coefficient equal to exp(-peak_distance/damping_length) to the Fourier transform of the probability densities.

{{< galleryscg >}}
{{< figscg src="../Interference1DRadialParaCrystal.png" width="320px" caption="Intensity Image">}}
{{< /galleryscg >}}

#### Python script:
{{< highlightloc file="Interference1DRadialParaCrystal.py" language="python" >}}

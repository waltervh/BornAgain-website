+++
title = "Interference 2D Paracrystal"
weight = 11
+++

### Interference 2D Paracrystal

Scattering from monodisperse cylinders distributed along a two-dimensional square paracrystal.

* The particles are cylinders with constant radii and heights equal to 5 nm.
* They are deposited on a substrate, following a two-dimensional square paracrystalline pattern.
* This 2D paracrystal is characterized by:
    * a lattice length of 20 nm along both axes of the reference cartesian frame,
    * a damping length equal to 0,
    * "coherent' domains with a size of 20 μm along the axes of the reference cartesian frame.
* The incident beam is characterized by a wavelength of 1 Å and angles αi = 0.2° and Φi = 0°.  


#### Note:
* A damping length is used to introduce finite size effects by applying a multiplicative coefficient equal to exp(-peak_distance/damping_length) to the Fourier transform of the probability densities. damping_length is equal to 0 by default and, in this case, no correction is applied.

{{< galleryscg >}}
{{< figscg src="../Interference2DParaCrystal.png" width="320px" caption="Intensity Image">}}
{{< /galleryscg >}}

#### Python script:
{{< highlightloc file="Interference2DParaCrystal.py" language="python" >}}

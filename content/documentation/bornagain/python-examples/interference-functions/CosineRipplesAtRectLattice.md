+++
title = "Cosine ripples on Rectangular Lattice"
weight = 11
+++

### Cosine ripples on Rectangular Lattice

Scattering from elongated particles distributed along a two-dimensional rectangular lattice.

* Each particle has a sinusoidal profile ("Ripple1" form factor) with a length of 100 nm, a width of 20 nm and a height of 4 nm.
* They are placed along a rectangular lattice on top of a substrate.
* This lattice is characterized by a lattice length of 200 nm in the direction of the long axis of the particles and of 50 nm in the perpendicular direction.
* The lattice's base vectors coincide with the reference cartesian frame.
* The wavelength is equal to 1.6 Å.
* The incident angles are αi = 0.3° and Φi = 0°.


{{< galleryscg >}}
{{< figscg src="../CosineRipplesAtRectLattice_setup.jpg" width="320px" caption="Real-space model">}}
{{< figscg src="../CosineRipplesAtRectLattice.png" width="320px" caption="Intensity Image">}}
{{< /galleryscg >}}

#### Python script:
{{< highlightloc file="CosineRipplesAtRectLattice.py" language="python" >}}

+++
title = "Interference 2D Centered Square Lattice"
weight = 11
+++

### Interference 2D Centered Square Lattice

Scattering from cylinders distributed along a squared centered lattice.

* The particles are cylinders with radii and heights of 3 nm.
* Their spatial distribution is composed of two square lattices, shifted by half a lattice length in both directions:
* The first square lattice is centered at the origin, with a lattice length of 25 nm.
* The second one, with the same lattice spacing and the same type of particles at its nodes is initialized at x = y = lattice length/2 = 12.5 nm.
* The lattices' base vectors are parallel to the axes of the reference cartesian frame.
* The wavelength is equal to 1 Å.
* The incident angles are αi = 0.2° and Φi = 0°.

{{< galleryscg >}}
{{< figscg src="../Interference2DCenteredSquareLattice_setup.jpg" width="320px" caption="Real-space model">}}
{{< figscg src="../Interference2DCenteredSquareLattice.png" width="320px" caption="Intensity Image">}}
{{< /galleryscg >}}

#### Python script:
{{< highlightloc file="Interference2DCenteredSquareLattice.py" language="python" >}}

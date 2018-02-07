+++
title = "Interference 2D Square Lattice"
weight = 11
+++

### Interference 2D Square Lattice

Scattering from cylindrical particles distributed along a square lattice.

* Cylinders with radii and heights of 3 nanometers are deposited on a substrate.
* Because of the presence of the substrate layer the simulation is run using the DWBA.
* The particles are distributed along a square lattice with a lattice length of 25 nm.
* The main axes are parallel to the x-axis and y-axis of the reference cartesian frame, respectively.
* The lattice is initialized by placing a cylinder at the origin.
* The incident beam is characterized by a wavelength of 1 Å.
* The incident angles are αi = 0.2° and Φi = 0°.

{{< galleryscg >}}
{{< figscg src="../Interference2DSquareLattice_setup.jpg" width="320px" caption="Real-space model">}}
{{< figscg src="../Interference2DSquareLattice.png" width="320px" caption="Intensity Image">}}
{{< /galleryscg >}}

#### Python script: 
{{< highlightloc file="Interference2DSquareLattice.py" language="python" >}}

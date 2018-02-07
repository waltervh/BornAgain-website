+++
title = "Interference 1D Lattice"
weight = 11
+++

### Interference 1D Lattice

Scattering from long boxes distributed along a one-dimensional lattice.

* The particles are long boxes.
* Each box has a length of 1000nm, a width of 10nm and a height of 15 nm.
* The particles are placed along a one-dimensional lattice on top of a substrate.
* They are rotated in the (x,y) plane by 10° with respect the the x-axis of the reference cartesian frame.
* The 1D lattice is characterized by a lattice length of 30 nm.
* The lattice's base vector coincides with x-axis of the reference cartesian frame.
* The wavelength is equal to 24 Å.
* The incident angles are αi = 0.2° and Φi = 0°.

##### Note:
* By default, the axis of the one-dimensional lattice is the x-axis. A rotation can be applied to the particles (like in this example) or to the 1D lattice.
* In the real-space model picture, the length of the boxes cannot be seen as it is too large, compared to its width and heigth.    


{{< galleryscg >}}
{{< figscg src="../Interference1DLattice_setup.jpg" width="320px" caption="Real-space model">}}
{{< figscg src="../Interference1DLattice.png" width="320px" caption="Intensity Image">}}
{{< /galleryscg >}}

#### Python script:
{{< highlightloc file="Interference1DLattice.py" language="python" >}}

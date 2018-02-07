+++
title = "Hexagonal Lattices with Basis"
weight = 11
+++

### Hexagonal Lattices with Basis

Scattering from two layers of spheres distributed along a hexagonal close packed structure.

* The sample is made of spherical particles deposited on a substrate.
* These 10-nanometer-radius particles are distributed along a hexagonal close packed structure:
    * each layer is generated using a two-dimensional hexagonal lattice with a lattice length of 20 nm and its a-axis parallel to the x-axis of the reference cartesian frame.
    * the vertical stacking is done by specifying the position of a "seeding" particle for each layer:
    (0,0,0) for the first layer and (R,R,√3 R) for the second layer, R being the radius of the spherical particle.
* The wavelength is equal to 1 Å.
* The incident angles are αi = 0.2° and Φi = 0°.


{{< galleryscg >}}
{{< figscg src="../HexagonalLatticesWithBasis_setup.jpg" width="320px" caption="Real-space model">}}
{{< figscg src="../HexagonalLatticesWithBasis.png" width="320px" caption="Intensity Image">}}
{{< /galleryscg >}}

#### Python script:
{{< highlightloc file="HexagonalLatticesWithBasis.py" language="python" >}}


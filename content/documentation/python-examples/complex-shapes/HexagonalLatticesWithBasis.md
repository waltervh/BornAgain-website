+++
title = "Hexagonal Lattices with Basis"
weight = 11
+++

### Hexagonal Lattices with Basis

Scattering from two layers of spheres distributed along a hexagonal close packed structure.

* The sample is made of spherical particles deposited on a substrate.
* These $10$-nanometer-radius particles are distributed along a hexagonal close packed structure:
    * each layer is generated using a two-dimensional hexagonal lattice with a lattice length of $20$ nm and its $a$-axis parallel to the $x$-axis of the reference Cartesian frame.
    * the vertical stacking is done by specifying the position of a "seeding" particle for each layer:
    $(0,0,0)$ for the first layer and $(R,R,\sqrt{3}R)$ for the second layer, $R$ being the radius of the spherical particle.
* The wavelength is equal to $1$ $\unicode{x212B}$.
* The incident angles are $\alpha\_i = 0.2 ^{\circ}$ and $\phi\_i = 0^{\circ}$.


{{< galleryscg >}}
{{< figscg src="/files/Examples_images/real_space_images/HexagonalLatticesWithBasis_setup.jpg" width="350px" caption="Real-space model">}}
{{< figscg src="/files/Examples_images/PyExamples/HexagonalLatticesWithBasis.png" width="350px" caption="Intensity image">}}
{{< /galleryscg >}}

#### Python script:
{{% highlightfile file="/static/files/python/simulation/ex04_ComplexShapes/HexagonalLatticesWithBasis.py" language="python" %}}


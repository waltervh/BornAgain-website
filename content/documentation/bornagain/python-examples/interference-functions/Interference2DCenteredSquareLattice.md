+++
title = "Interference 2D Centered Square Lattice"
weight = 11
+++

### Interference 2D Centered Square Lattice

Scattering from cylinders distributed along a squared centered lattice.

* The particles are cylinders with radii and heights of $3$ nm.
* Their spatial distribution is composed of two square lattices (lattice length $l$), shifted by half a lattice length in both directions:
* The first square lattice is centered at the origin, with a lattice length of $25$ nm.
* The second one, with the same lattice spacing and the same type of particles at its nodes is initialized at $x = y = l/2 = 12.5$ nm.
* The lattices' base vectors are parallel to the axes of the reference cartesian frame.
* The wavelength is equal to $1$ $\unicode{x212B}$.
* The incident angles are $\alpha\_i = 0.2 ^{\circ}$ and $\phi\_i = 0^{\circ}$.

{{< galleryscg >}}
{{< figscg src="/files/Examples_images/real_space_images/Interference2DCenteredSquareLattice_setup.jpg" width="350px" caption="Real-space model">}}
{{< figscg src="/files/Examples_images/PyExamples/Interference2DCenteredSquareLattice.png" width="350px" caption="Intensity image">}}
{{< /galleryscg >}}

#### Python script:
{{% highlightfile file="/static/files/python/simulation/ex03_InterferenceFunctions/Interference2DCenteredSquareLattice.py" language="python" %}}

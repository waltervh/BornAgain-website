+++
title = "Large Particle Form Factor"
weight = 30
+++

### Large Particle Form Factor

This example demonstrates, that for large particles (~$1000$ nm) the contribution to the scattered intensity from the form factor oscillates rapidly within one detector bin and analytical calculations (performed for the bin center) give completely a wrong intensity pattern. In this case Monte-Carlo integrations over detector bin should be used.

The simulation generates four plots using different sizes of the particles, (radius $=10$ nm, height $=20$ nm) or (radius $=1$ $\mu$m, height $=2$ $\mu$m), and different calculation methods: analytical calculations or Monte-Carlo integration. The other parameters are identical:

* The sample is made of a monodisperse distribution of cylinders, deposited randomly on a substrate.
* There is no interference between the scattered waves.
* The wavelength is equal to $1$ $\unicode{x212B}$.
* The incident angles are $\alpha\_i = 0.2 ^{\circ}$ and $\phi\_i = 0^{\circ}$.

  
  
{{< galleryscg >}}
{{< figscg src="LargeParticlesFormFactor_setup.jpg" width="650px" caption="Real-space model">}}
{{< figscg src="LargeParticlesFormFactor.png" width="650px" caption="Intensity image">}}
{{< /galleryscg >}}

#### Python script:
{{% highlightfile file="/static/files/python/simulation/ex04_ComplexShapes/LargeParticlesFormFactor.py" language="python" %}}

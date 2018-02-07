+++
title = "Large Particle Form Factor"
weight = 11
+++

### Large Particle Form Factor

This example demonstrates, that for large particles (~1000 nm) the contribution to the scattered intensity from the form factor oscillates rapidly within one detector bin and analytical calculations (performed for the bin center) give completely a wrong intensity pattern. In this case Monte-Carlo integrations over detector bin should be used.

The simulation generates four plots using different sizes of the particles, (radius=10 nm, height=20 nm) or (radius=1 μm, height=2 μm), and different calculation methods: analytical calculations or Monte-Carlo integration. The other parameters are identical:

* The sample is made of a monodisperse distribution of cylinders, deposited randomly on a substrate.
* There is no interference between the scattered waves.
* The wavelength is equal to 1 Å.
* The incident angles are αi = 0.2° and Φi = 0°.  

  
  
{{< galleryscg >}}
{{< figscg src="../LargeParticlesFormFactor_setup.jpg" width="600px" caption="Real-space model">}}
{{< figscg src="../LargeParticlesFormFactor.png" width="600px" caption="Intensity Image">}}
{{< /galleryscg >}}

#### Python script:
{{< highlightloc file="LargeParticlesFormFactor.py" language="python" >}}


+++
title = "Particle distribution"
weight = 40
+++

## Particle distribution

This tutorial gives an overview on how to draw a set of particles whose parameters 
follow a desired distribution.
To fix ideas, let's build the argument around cylindrical particles; 
In this case, the parameters will be *radius*, $r$; and *height*, $h$; the same reasoning 
should apply to other kinds of particles whose parameters differ 
(e.g. an Icosahedron does not have a parameter "radius").


{{< figscg src="cylinder_geometry.png" class="center">}}

### Default - no distribution

In the case in which a particle distribution is not applied, all particles 
are identical; for cylindrical particles, this means having the same radius 
and the same height (in this case, the default is set to $5 \, \rm{nm}$ each)
<sup>[1](#deltaDiracFootnote)</sup>.


{{% alert theme="info" %}}
<a name="deltaDiracFootnote">1</a>: One may say that applying no distribution for
the parameters of a set of particles is equivalent to applying a Dirac delta 
distribution to each of them.
{{% /alert %}}

### Adding irregularities to a set of identical particles

{{< figscg src="adding_irregularities.png" class="center">}}

#### Abundance

The abundance is a parameter between zero and one representing the relative 
abundance of the present particle with respect to the total in the 
current particle layout.

#### Distribution 
One can choose among six different distributions in order to break the default
regularity of the parameters of the particles. At the same time, each
distribution offers several parameters to tweak:

{{% alert theme="info" %}}

1. <a href="https://en.wikipedia.org/wiki/Raised_cosine_distribution" target="_blank">**Cosine**:</a> 
 - Mean<sup>[1](#evidentMeaning)</sup>.
 - Sigma<sup>[1](#evidentMeaning)</sup>.
 - Number of samples<sup>[2](#numberOfSamples)</sup>.
 - Sigma Factor<sup>[4](#sigmaFactor)</sup>.
 - Limits<sup>[3](#limits)</sup>
2. <a href="https://en.wikipedia.org/wiki/Discrete_uniform_distribution" target="_blank">**Gate**:</a> 
 - Min<sup>[1](#evidentMeaning)</sup>.
 - Max[<sup>1](#evidentMeaning)</sup>.
 - Number of samples<sup>[2](#numberOfSamples)</sup>.
3. <a href="https://en.wikipedia.org/wiki/Normal_distribution" target="_blank">**Gaussian** (default):</a> 
 - Mean[<sup>1](#evidentMeaning)</sup>.
 - StdDev<sup>[1](#evidentMeaning)</sup>.
 - Number of samples<sup>[2](#numberOfSamples)</sup>.
 - Sigma Factor<sup>[4](#sigmaFactor)</sup>.
 - Limits<sup>[3](#limits)</sup>
4. <a href="https://en.wikipedia.org/wiki/Log-normal_distribution" target="_blank">**Log Normal**:</a> 
 - Median<sup>[1](#evidentMeaning)</sup>.
 - ScaleParameter<sup>[1](#evidentMeaning)</sup>.
 - Number of samples<sup>[2](#numberOfSamples)</sup>.
 - Sigma factor<sup>[4](#sigmaFactor)</sup>.
5. <a href="https://en.wikipedia.org/wiki/Cauchy_distribution" target="_blank">**Lorentz**:</a> 
 - Mean<sup>[1](#evidentMeaning)</sup>.
 - HWHM<sup>[1](#evidentMeaning)</sup>.
 - Number of samples<sup>[2](#numberOfSamples)</sup>.
 - Sigma factor<sup>[4](#sigmaFactor)</sup>.
 - Limits<sup>[3](#limits)</sup>
6. <a href="https://en.wikipedia.org/wiki/Trapezoidal_distribution" target="_blank">**Trapezoid**:</a> 
 - Center<sup>[1](#evidentMeaning)</sup>.
 - LeftWidth<sup>[1](#evidentMeaning)</sup>.
 - MiddleWidth<sup>[1](#evidentMeaning)</sup>.
 - RightWidth<sup>[1](#evidentMeaning)</sup>.
 - Number of samples<sup>[2](#numberOfSamples)</sup>.
 - Limits<sup>[3](#limits)</sup>

<a name="evidentMeaning">1</a>: The meaning should be evident from the name of the distribution.  
<a name="numberOfSamples">2</a>: The number of different equally spaced values to extract from the distribution.  
<a name="limits">3</a>: Limits can be set in order to avoid taking values outside a given range.  
<a name="sigmaFactor">4</a>: Sigma factor acts as a cutoff scale after which values are not taken into account.  

{{% /alert %}}
#### Distributed parameter

A string representing the parameter which is to be distributed.
Different particles have different parameters, for example:

```python
parameter1 = "/Particle/Cylinder/Radius"
parameter2 = "/Particle/AnisoPyramid/Height"
parameter3 = "/Particle/Cuboctahedron/Alpha"
.
.
.
```

It is also possible to distribute the position of the particles by
refering to the *offset* parameters, common to all kinds of particles:

```python
offsetX = "/Particle/Position Offset/X"
offsetY = "/Particle/Position Offset/Y"
offsetZ = "/Particle/Position Offset/Z"
```

#### Example

Let's now give a concrete example. To create a **Gaussian** distribution for
the *radius* of cylindrical particles with the following properties,

   - Mean: $5.0 \, \rm{nm}$,
   - StdDev: $2.0 \, \rm{nm}$,
   - Number of samples: $5$,
   - Sigma Factor: $1.5$,
   - Limits: $(1.0 \, \rm{nm},9.0 \, \rm{nm})$,

one can roughly use the following recipe:

{{< highlight python "linenos=table">}}
def get_sample():
    #Define a BornAgain particle (these steps are explained elsewhere):
    my_material = ba.HomogeneousMaterial("example08_Air", 0.0, 0.0)
    my_formFactor = ba.FormFactorCylinder(5.0*nm, 5.0*nm)
    my_particle = ba.Particle(my_material, my_formFactor)
    
### Here we start creating the desired distribution ###

    #Define Abundance:
    abundance=1.0/3.0
    
    #Define Gaussian Distribution:
    mean_length = 5.0*nm
    stdDev_length = 2.0*nm
    distribution = ba.DistributionGaussian(mean_length, stdDev_length)
    
    #Carry out the actual value sampling:
    parameter_to_modify = "/Particle/Cylinder/Radius"
    number_of_samples = 5
    sigma_factor = 2.0
    limits = ba.RealLimits.limited(1.0*nm, 9.0*nm))
    my_parameter_distribution = ba.ParameterDistribution(parameter_to_modify, 
                                                         distribution, 
                                                         number_of_samples, 
                                                         sigma_factor, 
                                                         limits)
    
    #Create the particle distribution with the sampled values:
    my_particle_distribution = ba.ParticleDistribution(my_particle,
                                                       my_parameter_distribution)
    
### The distribution has been created and we can add it to the layout.
### The following steps are explained elsewhere.
    
    # Adding particles to layouts
    my_layout = ba.ParticleLayout()
    my_layout.addParticle(my_particle_distribution, abundance)
    my_layout.setTotalParticleSurfaceDensity(1)
    
    # Adding layouts to layers
    my_layer = ba.Layer(my_material)
    my_layer.addLayout(my_layout)
    
    # Adding layers to multilayers
    my_multiLayer = ba.MultiLayer()
    my_multiLayer.addLayer(my_layer)

    return my_multiLayer
{{< /highlight >}}

Note that in the preceding snippet the actual particle is not needed
until the last step, i.e. the actual creation of the particle distribution.
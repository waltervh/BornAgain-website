+++
title = "Basic simulation tutorial"
weight = 30
+++

### Basic simulation tutorial

![experiment-view](cylinders-prisms.jpg#floatleft)
In this example, we simulate the scattering from a mixture of cylinder and prism nanoparticles without any interference between them. These particles are placed in air, on top of a substrate. We will go through each step of the simulation. Each section starts with a short Python code snippet, followed by a discussion. The full code can be found at the end of this page.

#### Importing the Python modules

We start by importing the basic packages for scientific computing and plotting. Line 4 imports the BornAgain Python API.

{{< highlight python "linenos=table">}}

import numpy
import matplotlib
from matplotlib import pyplot as plt
from bornagain import *

{{< /highlight >}}


#### Defining materials

The different materials that will be used in the sample description will now be defined.

{{< highlight python "linenos=table">}}

def get_sample():
    """
    Build and return the sample representing cylinders and prisms on top of
    substrate without interference.
    """
    # defining materials
    m_air = HomogeneousMaterial("Air", 0.0, 0.0)
    m_substrate = HomogeneousMaterial("Substrate", 6e-6, 2e-8)
    m_particle = HomogeneousMaterial("Particle", 6e-4, 2e-8)

{{< /highlight >}}

Line 1 marks the beginning of the function to define our sample. Lines 7-9 define different materials using the class HomogeneousMaterial. The general syntax is as follows

```python
<material> = HomogeneousMaterial("name", delta, beta)
```

where `name` is the arbitrary name of the material associated with its complex refractive index $n = 1 - delta + i*beta$. Variable `<material>` is later used when referring to this particular material. The three materials defined in this example are `Air` with a refractive index of 1 (delta = beta = 0), a `Substrate` associated with a complex refractive index equal to $1 - 6x10-6 + i2x10-8$, and the material of the particles, whose refractive index is $n = 1 - 6x10-4 + i2x10-8$.

#### Defining particles

We define two different shapes of particles: cylinders and prisms (elongated particles with a constant equilateral triangular cross section):

{{< highlight python "linenos=table">}}

# collection of particles
cylinder_ff = FormFactorCylinder(5*nanometer, 5*nanometer)
cylinder = Particle(m_particle, cylinder_ff)
prism_ff = FormFactorPrism3(10*nanometer, 5*nanometer)
prism = Particle(m_particle, prism_ff)

{{< /highlight >}}

All particles implemented in BornAgain are defined by their form factors (see formfactors), their sizes and the material they are made of. Here, for the cylindrical particle, we input its radius and height.  For the prism, the possible inputs are the length of one side of its equilateral triangular base and its height.

In order to define a particle, we proceed in two steps. For example, for the cylindrical particle, we first specify the form factor of a cylinder with its radius and height, both equal to 5 nanometers in this particular case (see line 2). Then we associate this shape with the correct material as in line 3. The same procedure has been applied for the prism in lines 4 and 5, respectively.

#### Characterizing a particle assembly


{{< highlight python "linenos=table">}}

particle_layout = ParticleLayout()
particle_layout.addParticle(cylinder, 0.5)
particle_layout.addParticle(prism, 0.5)
interference = InterferenceFunctionNone()
particle_layout.setInterferenceFunction(interference)

{{< /highlight >}}

The object which holds the information about the positions and densities of particles in our sample is called a `ParticleLayout` (line 28). We use the associated function `addParticle` for each particle shape. Its general syntax is

```python
addParticle(<particle>, abundance=1.0, position=kvector_t(0,0,0), rotation=None)
```

Here `<particle>` is the name of the variable used to define the particles. `abundance` is the proportion of the given type of particles, normalized to the total number of particles. Here we have 50% of cylinders and 50% of prisms. The parameter position represents coordinates of particle's reference point (expressed in nanometers) in the coordinate system of a given layer (the association with a particular layer will be done during the next step). In this example the position is set to the default value (0,0,0) which means particles sitting on top of the interface.

{{% notice note %}}
See tutorials [Particles positioning]({{% relref "FIXME" %}}) and [Particles rotation]({{% relref "FIXME" %}}) for more detailed explanations.
{{% /notice %}}

Finally, the last two lines specify that there is no coherent interference between the waves scattered by particles at different locations. In this case, the intensity is calculated by the incoherent sum of the scattered waves. By default, the `ParticleLayout` object has no interference function, so these lines could be omitted. Other examples will present more complex cases of interference by the particles' position.

#### Define a multilayer

{{< highlight python "linenos=table">}}

# air layer with particles and substrate form multi layer
air_layer = Layer(m_air)
air_layer.addLayout(particle_layout)
substrate_layer = Layer(m_substrate)
multi_layer = MultiLayer()
multi_layer.addLayer(air_layer)
multi_layer.addLayer(substrate_layer)
return multi_layer

{{< /highlight >}}

We now have to configure our sample. The particles, cylinders and prisms, are on top of the substrate in an air layer. Both layers are considered to be semi-infinite. The air layer is constructed on line 2 using the previously defined air material as a constructor parameter. With the next line, the air layer is populated with particles using the previously defined particle layout object. The substrate layer is constructed on line 4 using the substrate material as a constructor parameter.

In the general case, if the user constructs a multilayer with more than 2 layers (taking the air and substrate layers into account), the thickness of intermediate layers has to be specified using the constructor below. The `thickness` parameter is expressed in nanometers.

```python
<layer> = Layer(<material>, thickness)
```

Our two layers are now fully characterized. The whole sample is represented by a `MultiLayer` object which is constructed on line 5. We assemble the sample by adding the top air layer, containing the particles, and the bottom substrate layer. The order in which layers are added to the multilayer is important: we start from the top layer down to the bottom one.

The last line of the function returns the fully constructed sample.

#### Define the beam and detector

{{< highlight python "linenos=table">}}

def get_simulation():
    """
    Create and return GISAXS simulation with beam and detector defined
    """
    simulation = GISASSimulation()
    simulation.setDetectorParameters(100, phi_min*degree, phi_max*degree, 100, alpha_min*degree, alpha_max*degree)
    simulation.setBeamParameters(1.0*angstrom, 0.2*degree, 0.0*degree)
    return simulation

{{< /highlight >}}

The function `get_simulation` creates and returns a simulation object. The first step is to create a simulation object (line 5) of the GISASSimulation class type. Then we define the detector (line 6) and the beam parameters (line 7) using the corresponding class methods.

![beam-detector](beam-detector.png#floatleft)
The GISAS setup and the coordinate system used in `BornAgain`. The incoming beam propagates with the incidence angles alpha_i and phi_i with respect to the sample axes as shown. A scattered (outgoing) beam, characterized by alpha_f and phi_f propagates toward the area detector. The angles alpha_i and alpha_f are defined in such a way that those shown in the Figure are positive.

The detector parameters are set using ranges of angles via the method:

```python
setDetectorParameters(n_phi, phi_f_min, phi_f_max, n_alpha, alpha_f_min, alpha_f_max)
```

where the number of bins `n_phi`, the low edge of first bin `phi_f_min` and the upper edge of last bin `phi_f_max` define the `phi_f` detector axis, while `n_alpha`, `alpha_f_min` and `alpha_f_max` are related to the `alpha_f` detector axis.

{{% notice note %}}
See [Detector types tutorial]({{% relref "FIXME" %}}) for more details.
{{% /notice %}}

To characterize the beam we use the following method
```python
setBeamParameters(wavelength, alpha_i, phi_i)
```

where `wavelength` is the incident beam wavelength, `alpha_i` is the incident grazing angle on the surface of the sample and `phi_i` is the in-plane direction of the incident beam (measured with respect to the x-axis).

{{% notice note %}}
In BornAgain, the scattering vector $q$ is defined as $ki - kf$, where $ki$ is the incident wave vector and $kf$ the scattered one.
{{% /notice %}}

#### Running the simulation and plotting the results

{{< highlight python "linenos=table">}}

def run_simulation():
    """
    Run simulation and plot results
    """
    sample = get_sample()
    simulation = get_simulation()
    simulation.setSample(sample)
    simulation.runSimulation()
    result = simulation.result()

{{< /highlight >}}

The function `run_simulation` gathers together all previously defined items. We create the sample and simulation objects at the lines 5 and 6, using calls to the previously defined functions. We assign the sample to the simulation at line 7 and finally launch the simulation at line 8. In the last line, we obtain the result of the simulation as a SimulationResult object, which contains the axes definition and the simulated intensity as a function of outgoing angles `phi_f` and `alpha_f`.

{{< highlight python "linenos=table">}}

im = plt.imshow(result.getArray(),
                norm=matplotlib.colors.LogNorm(1.0, result.getMaximum()),
                extent=[result.getXmin()/deg, result.getXmax()/deg, result.getYmin()/deg, result.getYmax()/deg],
                aspect='auto')
cb = plt.colorbar(im)
cb.set_label(r'Intensity (arb. u.)', size=16)
plt.xlabel(r'$\phi_f (^{\circ})$', fontsize=16)
plt.ylabel(r'$\alpha_f (^{\circ})$', fontsize=16)
plt.show()

{{< /highlight >}}

To be able to plot the data using matplotlib routines, we convert our SimulationResult object into a standard numpy array (using the `array()` method). The rest of the code snippet contains typical function calls for plotting a numpy array as a heat map.

As a result of executing the whole script in the python interpreter
```bash
$ python CylindersAndPrisms.py
```

The following image should be displayed on the screen

{{< figscg src="result.png" alignment="center">}}

#### Complete script

{{< highlightloc file="CylindersAndPrisms.py">}}
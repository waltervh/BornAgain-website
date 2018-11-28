+++
title = "Basic fitting tutorial"
weight = 20
+++

# Basic fitting tutorial

In this section we are going to go through a complete example of fitting using BornAgain.
Each step will be associated with a detailed piece of code written in Python.
The script can also be found in the [Fit Cylinders and Prisms]({{% ref-example "fitting/fit-cylinders-and-prisms" %}}) example.

This example uses the same sample geometry as in [Basic GISAS simulation tutorial]({{% ref-tutorial "basic-simulation-tutorial/gisas/index.md" %}}).
Cylindrical and prismatic particles are deposited on a substrate layer in equal proportion,
with no interference between the particles. We consider the following parameters to be unknown:

+ the radius of cylinders,
+ the height of cylinders,
+ the length of the prisms' triangular basis,
+ the height of prisms.

Our reference data are a "noisy" two-dimensional intensity map obtained from the simulation of the same geometry
with a fixed value of 5nm for all sizes of cylinder and prisms.

### Importing python libraries

{{< highlight python "linenos=table,linenostart=6" >}}

import bornagain as ba
from bornagain import deg, angstrom, nm

{{< /highlight >}}

We start from import of the BornAgain Python API and particularly dimension units defined in BornAgain.

### Building the sample

{{< highlight python "linenos=table,linenostart=12" >}}

def get_sample(params):
    """
    Returns a sample with uncorrelated cylinders and prisms on a substrate.
    """
    cylinder_height = params["cylinder_height"]
    cylinder_radius = params["cylinder_radius"]
    prism_height = params["prism_height"]
    prism_base_edge = params["prism_base_edge"]

    # defining materials
    m_air = ba.HomogeneousMaterial("Air", 0.0, 0.0)
    m_substrate = ba.HomogeneousMaterial("Substrate", 6e-6, 2e-8)
    m_particle = ba.HomogeneousMaterial("Particle", 6e-4, 2e-8)

    # collection of particles
    cylinder_ff = ba.FormFactorCylinder(cylinder_radius, cylinder_height)
    cylinder = ba.Particle(m_particle, cylinder_ff)
    prism_ff = ba.FormFactorPrism3(prism_base_edge, prism_height)
    prism = ba.Particle(m_particle, prism_ff)
    layout = ba.ParticleLayout()
    layout.addParticle(cylinder, 0.5)
    layout.addParticle(prism, 0.5)

    # air layer with particles and substrate form multi layer
    air_layer = ba.Layer(m_air)
    air_layer.addLayout(layout)
    substrate_layer = ba.Layer(m_substrate, 0)
    multi_layer = ba.MultiLayer()
    multi_layer.addLayer(air_layer)
    multi_layer.addLayer(substrate_layer)
    return multi_layer

{{< /highlight >}}

The function starting at line 12 creates a multilayered sample
with cylinders and prisms randomly distributed on a surface.
The function accepts a dictionary as input parameters and use its key/value pairs to define particle sizes.

### Creating the simulation

{{< highlight python "linenos=table,linenostart=45" >}}

def get_simulation(params):
    """
    Returns a GISAXS simulation with beam and detector defined
    """
    simulation = ba.GISASSimulation()
    simulation.setDetectorParameters(100, -1.0*deg, 1.0*deg,
                                     100, 0.0*deg, 2.0*deg)
    simulation.setBeamParameters(1.0*angstrom, 0.2*deg, 0.0*deg)
    simulation.setBeamIntensity(1e+08)
    simulation.setSample(get_sample(params))
    return simulation

{{< /highlight >}}

The function starting at line 45 creates the simulation object with beam, detector and user sample defined.
This function is intended to be called on every minimization iteration to provide
new simulation object for every new set of fit parameters. In given example set of parameters is used 
to construct a new sample by calling `get_sample` method described earlier.

### Creating "experimental" data

{{< highlight python "linenos=table,linenostart=58" >}}

def create_real_data():
    """
    Generating "experimental" data by running simulation with certain parameters.
    The data is saved on disk in the form of numpy array.
    """

    # default sample parameters
    params = {'cylinder_height': 5.0*nm, 'cylinder_radius': 5.0*nm,
              'prism_height': 5.0*nm, 'prism_base_edge': 5.0*nm}

    # retrieving simulated data in the form of numpy array
    simulation = get_simulation(params)
    simulation.runSimulation()
    real_data = simulation.result().array()

    # spoiling simulated data with noise to produce "real" data
    np.random.seed(0)
    noise_factor = 0.1
    noisy = np.random.normal(real_data, noise_factor*np.sqrt(real_data))
    noisy[noisy < 0.1] = 0.1

    np.savetxt("basic_fitting_tutorial_data.txt.gz", real_data)

{{< /highlight >}}

Experimental data here is represented by 2D numpy array with detector intensities obtained from the same simulation.
The "experimental" data file is prepared by running once a simulation with default parameters, 
spoiling it with noise and saving on disk.

### Setting fit objective up

{{< highlight python "linenos=table,linenostart=89" >}}

def run_fitting():

    """
    Setup simulation and fit
    """

    real_data = load_real_data()

    fit_objective = ba.FitObjective()
    fit_objective.addSimulationAndData(get_simulation, real_data, 1.0)

    # Print fit progress on every n-th iteration.
    fit_objective.initPrint(10)

    # Plot fit progress on every n-th iteration. Will slow down fit.
    fit_objective.initPlot(10)

{{< /highlight >}}

The `FitObjective` created here is used to put into correspondence a real data, represented by numpy array, and
the simulation, represented by `get_simulation` callable. On every fit iteration `FitObjective`

+ will generate new simulation object for every set of fit parameters using `get_simulation` callable,
+ run it to obtain simulated detector intensities,
+ calculate chi2 between simulated and real data.

### Setting fit parameters

{{< highlight python "linenos=table,linenostart=105" >}}

    params = ba.Parameters()
    params.add("cylinder_height", 4.*nm, min=0.01)
    params.add("cylinder_radius", 6.*nm, min=0.01)
    params.add("prism_height", 4.*nm, min=0.01)
    params.add("prism_base_edge", 12.*nm, min=0.01)

{{< /highlight >}}

Creation of fit parameters is straightforward. We give names, starting values and lower bound to 4 fit parameters, 
representing the dimensions of the cylinders and prisms.
The fit parameter names must coincide with names that `get_simulation` callable expects.

### Creating minimizer and running the fit

{{< highlight python "linenos=table,linenostart=111" >}}

    minimizer = ba.Minimizer()
    result = minimizer.minimize(fit_objective.evaluate, params)
    fit_objective.finalize(result)

    print("Fitting completed.")
    print("chi2:", result.minValue())
{{< /highlight >}}

The method `fit_objective.evaluate` provided by `FitObjective` class interface is used here as an objective function.
The method accepts fit parameters and return chi2 value, calculated between experimental and simulated images for given
values of fit parameters.

The method is passed to the minimizer together with initial fit parameters. The `minimizer.minimize` starts the fit that will
continue further without user intervention unit the minimum is found or minimizer failed to converge.
The rest of the code demonstrates how to access fit results.

See full script in the [Fit Cylinders and Prisms]({{% ref-example "fitting/fit-cylinders-and-prisms" %}}) example.

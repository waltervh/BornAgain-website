+++
title = "Minimal fitting example"
weight = 30
+++

## Minimal fitting example

On this page you will find an example of minimal script that need to be created to run fitting. 
Scattering from spherical nano particles in Born approximation is used here as an example.
Short explanations follow below.

{{< highlight python "linenos=table" >}}
"""
Minimal working fit examples: finds radius of sphere in Born approximation.
"""
import bornagain as ba
from bornagain import deg, angstrom, nm


def get_simulation(params):
    """
    Returns GISAS simulation for given set of parameters.
    """
    radius = params["radius"]

    sphere = ba.Particle(ba.HomogeneousMaterial("Particle", 6e-4, 2e-8),
                         ba.FormFactorFullSphere(radius))

    layer = ba.Layer(ba.HomogeneousMaterial("Air", 0.0, 0.0))
    layer.addLayout(ba.ParticleLayout(sphere))
    multi_layer = ba.MultiLayer()
    multi_layer.addLayer(layer)

    simulation = ba.GISASSimulation()
    simulation.setDetectorParameters(100, -1.0*deg, 1.0*deg,
                                     100, 0.0*deg, 2.0*deg)
    simulation.setBeamParameters(1.0*angstrom, 0.2*deg, 0.0*deg)
    simulation.setSample(multi_layer)

    return simulation


def real_data():
    """
    Generating "experimental" data by running simulation with default parameters.
    """
    simulation = get_simulation({'radius': 5.0*nm})
    simulation.runSimulation()
    return simulation.result().array()


def run_fitting():
    """
    Setups and runs fit.
    """
    fit_objective = ba.FitObjective()
    fit_objective.addSimulationAndData(get_simulation, real_data())
    fit_objective.initPrint(10)

    params = ba.Parameters()
    params.add("radius", 4.*nm, min=0.01)

    minimizer = ba.Minimizer()
    result = minimizer.minimize(fit_objective.evaluate, params)
    fit_objective.finalize(result)


if __name__ == '__main__':
    run_fitting()
{{< /highlight >}}

##### The model

The *model* is represented by `get_simulation` function. It returns GISAS simulation object with beam, detector and user sample defined.
Here we are simulating scattering from spherical nano particles in Born approximation. The function has one free parameter - radius of spheres in nanometers.
This is the value we will try to find in the course of minimization.

##### The data

*Experimental data* is represented by `real_data` function. It return 2D `numpy` array with intensity values obtained
from the same simulation with radius of spheres equals to $5~nm$.

##### Fit objective

The method `FitObjective.addSimulationAndData` is used to put the *model* and the *data* to correspondence.
Please pay attention how `get_simulation` (no brackets) and `real_data()` (with brackets) are used.
Absence of brackets in `get_simulation` means that we pass callable object (aka function pointer) to `FitObjective`.
During the fit it will be used on every iteration to generate new simulation for every new set of fit parameters.

##### Fit parameters and minimizers

Fit parameters collection contains a single fit parameter with name *radius* and starting value $4~nm$.
The method `FitObjective.evaluate` serve as objective function. It is passed to the minimizer together with fit parameters.
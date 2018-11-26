+++
title = "Fitting in GISAS"
weight = 20
+++

## Fitting in GISAS

GISAS data fit deals with following 5 components:

+ [Experimental data](#experimental-data)
+ [Simulation builder](#simulation-builder)
+ [Fit parameters](#fit-parameters)
+ [Fit objective](#fit-objective)
+ [Minimizer](#minimizer)

{{< figscg src="fit_modules.png" width="600" class="center">}}

##### Experimental data

Experimental data is the data, obtained in the course of GISAS experiment and containing 2D map of intensities measured in detector channels,
packed into 2D numpy array.

##### Simulation builder

Python callable, a function or a class method, returning `GISASSImulation` object with beam, detector and user sample defined.
Function accepts a Python dictionary as input parameters, which it uses to build new simulation object.
Parameter values will be varied during the fit and `get_simulation` will be called on every fit iteration.

{{< highlight python >}}

def get_simulation(params):
    simulation = GISASSimulation()
    ...
    simulation.setBinIntensity(params["intensity"])
    ...
    return simulation

{{< /highlight >}}

The main requirement here is that the geometry of the detector defined in the `GISASSimulation` object
should match the shape of numpy array with experimental intensities.

#### Fit parameters

Collection of fit parameters which will be varied during the fit.
Contains names, starting values and parameter bounds. The name of fit parameter should coincide with the name which simulation builder function expects.

{{< highlight python >}}
params = ba.Parameters()
params.add("intensity", 1e+08, min=1e+07, max, 1e+08)
params.add("sphere_radius", 10*nm, min=0.1)
{{< /highlight >}}

#### Fit objective

Special module providing an objective function for minimizer. Contains at least one pair of *experimental data/simulation builder*, the logic 
to retrieve new simulation results on every fit iteration and compare simulation intensity map against experimental one.

{{< highlight python >}}
fit_objective = FitObjective()
fit_objective.addSimulationAndData(get_simulation, real_data)
{{< /highlight >}}

The `FitObjective` public interface provides access to two objective functions

+ `FitObjective.evaluate(params)` returns $\chi\_{2}$ calculated for experimental/simulated images
+ `FitObjective.evaluate_residuals(params)` returns 1d vector of residuals for all bins of experimental/simulated images

#### Minimizer

BornAgain minimizer interface was developed with the idea to simplify switch between
our own minimization engines and other, possibly more advanced minimization libraries.
Particularly, we have been inspired by [lmfit Python package](https://lmfit.github.io/lmfit-py/), 
so BornAgain minimizer setup looks very similar.

In code snippet below we create default BornAgain minimizer and run minimization by calling `minimize` function.
It takes an objective function and fit parameters as an input.

{{< highlight python >}}
minimizer = ba.Minimizer()
minimizer.minimize(fit_objective.evaluate, params)
{{< /highlight >}}

## Minimization workflow

After all fit components are in place, users starts minimization by running `minimize` method.
Figure below shows general workflow of minimization procedure.

{{< figscg src="minimization_workflow.png" width="650" class="center">}}

Minimization workflow involves iterations, during which

+ The minimizer makes an assumption about the optimal sample parameters,
+ these parameters are propagated to the simulation builder,
+ simulation is performed for the given state of simulation object,
+ the simulated data (intensities) is propagated to the module calculating the difference between simulated and experimental data,
+ result of calculations, represented by $\chi\_{2}$ value of vector of residuals, is propagated to minimizer,
+ minimizer makes new assumption about optimal fit parameters.

The iteration process is going on under the control of the selected minimization algorithm, without any intervention from the user. It stops if one of the following is true:

+ the maximum number of iteration steps has been reached
+ the function’s minimum has been reached within the tolerance window
+ the minimizer cannot improve $\chi\_{2}$ estimate

After the control is returned, fitting results can be retrieved. They include the best $\chi\_{2}$ value found, 
the corresponding optimal sample parameters and the intensity map simulated with this set of parameters.
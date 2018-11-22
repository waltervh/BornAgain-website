+++
title = "Fitting in GISAS"
weight = 20
+++

## Fitting in GISAS

GISAS data fit deals with following 5 components:

+ [Experimental data](#experimental-data)
+ [The model](#the-model)
+ [Fit parameters](#fit-parameters)
+ [Fit objective](#fit-objective)
+ [Minimizer](#minimizer)

{{< figscg src="fit_modules.png" width="600" class="center">}}

##### Experimental data

Experimental data is the data, obtained in the course of GISAS experiment and containing 2D map of intensities measured in detector channels,
packed into 2D numpy array.

##### The model

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

#### Fit parameters

Collection of fit parameters which will be varied during the fit.
Contains names, starting values and limits. The name of fit parameter should coincide with the name which model function expects.

{{< highlight python >}}
params = ba.Parameters()
params.add("intensity", 1e+08, min=1e+07, max, 1e+08)
params.add("sphere_radius", 10*nm, min=0.1)
{{< /highlight >}}

#### Fit objective

Special module providing an objective function for minimizer. Contains at least one pair of *experimental data/model function*, the logic 
to start new simulation on every fit iteration and compare simulation intensity map against experimental one.

{{< highlight python >}}
fit_objective = FitObjective()
fit_objective.addSimulationAndData(get_simulation, real_data)
{{< /highlight >}}

The public interface provides access to two objective functions

+ `FitObjective.evaluate(params)` return chi2 calculated for experimental/simulated images
+ `FitObjective.evaluate_residuals(params)` 1d vector of residuals for all bins of experimental/simulated images

#### Minimizer

BornAgain minimizer interface was developed with the idea to simplify switch between
our own minimization engines and other, possibly more advanced minimization libraries.
Particularly, we have been inspired by [lmfit Python package](https://lmfit.github.io/lmfit-py/).

In code snippet below we create default BornAgain minimizer and run minimization by calling `minimize` function.
It takes an objective function and fit parameters as an input.

{{< highlight python >}}
minimizer = ba.Minimizer()
minimizer.minimize(fit_objective.evaluate, params)
{{< /highlight >}}

## Fitting workflow


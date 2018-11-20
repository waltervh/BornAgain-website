+++
title = "Basic concept"
weight = 10
+++

## Basic concept

Fitting in BornAgain is no different from any other optimization problem, like fitting the curve to the data points.
User has to define an objective function, which takes the values of the fitting variables and calculates
the metric to minimize.
Objective function has to be passed to the minimization engine, together with starting values of fit parameters.

Following code snippet was borrowed from 
[Getting started with Non-Linear Least-Squares Fitting](https://lmfit.github.io/lmfit-py/intro.html) 
tutorial of [lmfit](https://lmfit.github.io/lmfit-py) package.

{{< highlight python >}}
from numpy import exp, sin
from scipy.optimize import leastsq


def residual(vars, x, data, eps_data):
    amp = vars[0]
    phaseshift = vars[1]
    freq = vars[2]
    decay = vars[3]

    model = amp * sin(x*freq + phaseshift) * exp(-x*x*decay)

    return (data-model) / eps_data

vars = [10.0, 0.2, 3.0, 0.007]
out = leastsq(residual, vars, args=(x, data, eps_data))
{{< /highlight >}}

Objective function `residual` accepts values of fit parameters, data points and errors, and then calculates vector 
of residuals using the `model` of data - decaying `sin` wave.

The minimum of objective function is found then using `leastsq` method of `scipy.optimize` package.

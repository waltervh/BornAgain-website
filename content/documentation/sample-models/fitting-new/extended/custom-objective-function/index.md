+++
title = "Custom objective function"
weight = 20
+++

## Custom objective function

BornAgain fitting API allows to define custom objective function to pass to minimization engine.

In this example we are going to construct vector of residuals calculated between 
experimental and simulated intensity values after applying additional function to amplitudes.

$$
residuals = [r\_{0}, r_{1}, ... , r\_{n-1}], ~~~ r\_{i} = \sqrt{e\_{i}} - \sqrt{s\_{i}}
$$

The length of vector `n` corresponds to the total number of *non-masked* detector channels. The residual
in calculated as simple difference between experimental $e\_{i}$ and simulated $s\_{i}$ intensities
after applying $sqrt$ to both values.

This is done by defining our own `MyObjective` class at line 14. It is derived from parent `FitObjective` class
and contains our own definition of `evaluate_residual` function. At line 26 we call parent's 
evaluate method to run simulation and prepare intensity arrays. At lines 30-34 we calculate vector of residuals as described above.

Later in the code, the `MyObjective.evaluate_residual` function is used to setup custom objective for minimizer (line 116).





{{% highlightfile file="/static/files/python/fitting-new/ex03_ExtendedExamples/custom_objective_function/custom_objective_function.py" language="python" %}}

+++
title = "Fitting in GISAS"
weight = 20
+++

## Fitting in GISAS


GISAS data fit, similarly to the ordinary curve fitting, deal with following components.

+ Real data: two dimensional array of intensities in channels of 2D detector.
+ The model: the BornAgain simulation object, `GISASSimulation`, constructed from set of parameters and capable of producing simulated 2D images.
+ Fit objective: special module calculating similarity metric between experimental and simulated images.
+ Minimizer: minimization package to find optimum similarity metric.

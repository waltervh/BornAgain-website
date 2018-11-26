+++
title = "Consecutive fitting"
weight = 40
+++

## Consecutive fitting

Example demonstrates how to run two fits one after another using different minimizer settings and starting values of fit parameters.

In this example we are looking for `radius` and `height` of cylindrical nano particles randomly distributed on a surface.

During the first fit we are setting initial values of fit parameter to be quite far from expected values and use genetic minimizer
to explore large parameter space.
Second fit starts from best parameters found on previous step and use one of gradient descent algorithms to find precise minimum location.

{{% highlightfile file="/static/files/python/fitting-new/ex01_BasicExamples/consecutive_fitting.py" language="python" %}}

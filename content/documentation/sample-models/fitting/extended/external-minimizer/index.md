+++
title = "External minimizer"
weight = 40
+++

## External minimizer

In this example we are demonstrating how to run typical fitting task in BornAgain using third party minimizer.

BornAgain fit parameters and minimizer interface was developed with the idea to simplify switch between
our own minimization engines and other, possibly more advanced minimization libraries.
Particularly, we have been inspired by [lmfit Python package](https://lmfit.github.io/lmfit-py/).

All these make switch between BornAgain and `lmfit` minimizers very easy.

**Using BornAgain default minimizer**

{{< highlight python >}}
import bornagain as ba

params = ba.Parameters()
params.add('radius', value=7*nm, min=5*nm, max=8*nm)
params.add('length', value=10*nm, min=8*nm, max=14*nm)

result = ba.Minimizer().minimize(fit_objective.evaluate_residuals, params)
fit_objective.finalize(result)
{{< /highlight >}}

**Using lmfit minimizer**

{{< highlight python >}}
import lmfit

params = lmfit.Parameters()
params.add('radius', value=7*nm, min=5*nm, max=8*nm)
params.add('length', value=10*nm, min=8*nm, max=14*nm)

result = lmfit.minimize(fit_objective.evaluate_residuals, params)
fit_objective.finalize(result)

print(result.params.pretty_print())
{{< /highlight >}}

Whole script for `lmfit` based fitting is shown below.

{{% highlightfile file="/static/files/python/fitting-new/ex03_ExtendedExamples/external_minimizer/lmfit_basics.py" language="python" %}}

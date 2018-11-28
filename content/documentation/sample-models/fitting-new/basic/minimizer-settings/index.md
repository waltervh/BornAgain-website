+++
title = "Minimizer settings"
weight = 30
+++

## Minimizer settings

Example demonstrates how to change minimizer algorithm and some of its settings. For example, following lines

{{< highlight python >}}
minimizer = ba.Minimizer()
minimizer.setMinimizer("Minuit2", "Migrad", "MaxFunctionCalls=500;Strategy=2")
{{< /highlight >}}

will set internal minimizer to "Minuit2", set its internal algorithm to "Migrad" and then pass additional options,
limiting maximum number of calls and and internal minimization strategy.

List of available minimizers and their options can be seen with

{{< highlight python >}}
print(ba.MinimizerFactory().catalogueDetailsToString())
{{< /highlight >}}


For more information, see
[minimizer settings tutorial]({{% relref "ocumentation/working-with-python/fitting/fitting-highlights/minimizers/index.md" %}}).

{{% highlightfile file="/static/files/python/fitting-new/ex01_BasicExamples/minimizer_settings.py" language="python" %}}

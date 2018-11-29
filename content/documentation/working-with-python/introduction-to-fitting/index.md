+++
title = "Introduction to fitting"
weight = 70
+++

## Introduction to fitting

In addition to the simulation of grazing incidence X-ray and neutron scattering by multilayered samples,
BornAgain also offers the option to fit the numerical model to reference data by modifying a
selection of sample parameters from the numerical model.

* [Implementation in BornAgain]({{% relref "documentation/working-with-python/introduction-to-fitting/index.md#implementation-in-bornagain" %}})
* [Stages to run fitting procedure]({{% relref "documentation/working-with-python/introduction-to-fitting/index.md#stages-to-run-fitting-procedure" %}})
* [How to get the right answer from fitting]({{% relref "documentation/working-with-python/introduction-to-fitting/index.md#how-to-get-the-right-answer-from-fitting" %}})

### Implementation in BornAgain

Fitting in BornAgain deals with estimating the optimum parameters in the numerical model by minimizing the difference between numerical and reference data. The features include

* a variety of multidimensional minimization algorithms and strategies,
* the choice over possible fitting parameters, their properties and correlations,
* the full control on objective function calculations, including applications of different normalizations and assignments of different masks and weights to different areas of reference data,
* the possibility to fit simultaneously an arbitrary number of data sets.

{{< figscg src="./bornagain-fitting-workflow.png" class="center" >}}

Figure shows the general work flow of a typical fitting procedure.
Before running the fitting the user is required to prepare some data and
to configure the fitting kernel of BornAgain. The required stages are

* preparing the sample and the simulation description (multilayer, beam, detector parameters),
* choosing the fitting parameters,
* loading the reference data,
* defining the minimization settings.

The class `FitSuite` contains the main functionalities to be used for the fit and serves as the main interface between the user
and the fitting work flow. The latter involves iterations during which

* the minimizer makes an assumption about the optimal sample parameters,
* these parameters are propagated to the sample,
* assigned simulation is performed for the given state of the sample,
* the simulated data (intensities) is propagated to the $\chi^2$ module,
* the $\chi^2$ module calculates $\chi^2$ using the simulated and reference data,
* value of $\chi^2$ is propagated to the minimizer, which makes new assumptions about optimal sample parameters.

The iteration process is going on under the control of the selected minimization algorithm, without any intervention from the user. It stops
if one of the following is true:

* the maximum number of iteration steps has been reached;
* the function's minimum has been reached within the tolerance window;
* the minimizer cannot improve $\chi^2$ estimate.

After the control is returned, fitting results can be retrieved.
They include the best $\chi^2$ value found, the corresponding optimal sample parameters and the intensity map simulated with this set of parameters.

### Stages to run fitting procedure

#### Preparing the sample and the simulation description

This step is similar for any simulation using BornAgain (see basic simulation tutorials on
  [GISAS]({{% relref "documentation/working-with-python/basic-simulation-tutorial/gisas/index.md" %}}) or
  [reflectometry]({{% relref "documentation/working-with-python/basic-simulation-tutorial/reflectometry/index.md" %}})).
It consists in first characterizing the geometry of the system: the particles (shapes, sizes, refractive indices),
the different layers (thickness, order, refractive index, a possible roughness of the interface),
the interference between the particles and theway they are distributed in the layers
(buried particles or particles sitting on top of a layer).
Then we specify the parameters of the input beam and of the output detector.

#### Choice of parameters to be fitted

Every parameter used in the construction of the sample can be used as a fitting parameter.
For example, the particles' heights, radii or the layer's roughness or thickness could be selected using the parameter pool mechanism.
This mechanism is explained in detail in 
tutorial and it is therefore recommended to read it before proceeding any further.

The user specifies selected sample parameters as fit parameters using `FitSuite` and its `addFitParameter` method:

{{< highlight python >}}

fit_suite = FitSuite()
fit_suite.addFitParameter(<name>, <initial_value>, <limits>, <step>)

{{< /highlight >}}

where `<name>` corresponds to the parameter name in the sample's parameter pool.
By using wildcards in the parameter name, a group of sample parameters, corresponding to the given pattern,
can be associated with a single fitting parameter and fitted simultaneously to get a common optimal value.

The second parameter `<initial_value>` corresponds to the initial value of the fitting parameter.
The third parameter `<AttLimits>` corresponds to the boundaries imposed on parameter value. It can be

* `limitless()` by default,
* `fixed()`,
* `lowerLimited(<min_value>)`,
* `upperLimited(<max_value>)`,
* `limited(<min_value>, <max_value>)`.

where `<min_value>` and `<max_value>` are double values corresponding to the lower and higher boundary, respectively.

The last parameter `<step>`, responsible for the initial iteration steps size, is optional.
The majority of minimizers make they own assumption about step size and only genetic and simulated annealing minimizers respect this value.

#### Associating reference and simulated data

The minimization procedure deals with a pair of reference data (normally associated with experimental data) and the theoretical model (presented by the sample and the simulation descriptions).

We assume that the experimental data are a two-dimensional intensity matrix as function
of the output scattering angles $\alpha_f$ and $\varphi_f$. The user is required to provide the data in the form of an ASCII file containing
an axes binning description and the intensity data itself. Examples how to convert the experimental data to the intensity matrix
from MARIA (MLZ) ascii and tiff format (used at GALAXI or in DESY) can be found in the `Examples` folder of the BornAgain distribution.

To associate the simulation and the reference data to the fitting engine, method `addSimulationAndRealData` has to be used as shown

{{< highlight python >}}

fit_suite = FitSuite()
fit_suite.addSimulationAndRealData (<simulation>, <reference>)

{{< /highlight >}}

Here `<simulation>` corresponds to a BornAgain simulation object with the sample, beam and detector fully defined,
`<reference>` corresponds to the experimental data object obtained from the ASCII file.

It is possible to call this given method more than once to submit more than one pair of `<simulation>`, `<reference>` to the fitting procedure. In this way, simultaneous fits of
some combined data sets are performed.

#### Minimizer settings

BornAgain contains a variety of minimization engines from `ROOT` and `GSL` libraries.
They are listed in the table below. By default, `Minuit2` minimizer with default settings will be used and no additional configuration needs to be done.
The remainder of this section explains some of the expert settings, which can be applied to get better fit results.

The default minimization algorithm can be changed using `setMinimizer` method as shown below

{{< highlight python >}}

fit_suite = FitSuite()
fit_suite.setMinimizer(<minimizer_name>, <algorithm_name>)

{{< /highlight >}}

where `<minimizer_name>` and `<algorithm_name>` can be chosen from the first and second column of the table, respectively.

| Minimizer name| Algorithm | Description |
|:--|:--|:--|
| [Minuit2](http://seal.web.cern.ch/seal/documents/minuit/mnusersguide.pdf)                                                     | Migrad          | According to the [tutorial](http://seal.web.cern.ch/seal/documents/minuit/mntutorial.pdf), best minimizer for nearly all functions, variable-metric method with inexact line search, a stable metric updating scheme, and checks for positive-definiteness. |
|                                                                                                                               | Simplex         | Simplex method of Nelder and Mead usually slower than `Migrad`, rather robust with respect to gross fluctuations in the function value, gives no reliable information about parameter errors. |
|                                                                                                                               | Combined        | Minimizes with `Migrad`, but switches to `Simplex` if `Migrad` fails to converge. |
|                                                                                                                               | Scan            | Not intended to minimize, just scans the function, one parameter at a time, retains the best value after each scan. |
|                                                                                                                               | Fumili          | Optimized method for least square and log likelihood minimizations. |
| [GSLMultiMin](https://www.gnu.org/software/gsl/doc/html/multimin.html)                                                        | ConjugateFR     | Fletcher-Reeves conjugate gradient algorithm. |
|                                                                                                                               | ConjugatePR     | Polak-Ribiere conjugate gradient algorithm. |
|                                                                                                                               | BFGS            | Broyden-Fletcher-Goldfarb-Shanno algorithm |
|                                                                                                                               | BFGS2           | Improved version of `BFGS`. |
|                                                                                                                               | SteepestDescent | Follows the downhill gradient of the function at each step. |
| [GSLLMA](https://www.gnu.org/software/gsl/doc/html/nls.html?highlight=levenberg%20marquardt%20algorithm#levenberg-marquardt)  |                 | Levenberg-Marquardt Algorithm |
| [GSLSimAn](https://www.gnu.org/software/gsl/doc/html/siman.html?highlight=simulated%20annealing%20algorithm)                  |                 | Simulated Annealing Algorithm |
| [Genetic](http://tmva.sourceforge.net/docu/TMVAUsersGuide.pdf#page=55)                                                        |                 | Genetic Algorithm |

There are several options common to every minimization algorithm, which can be changed before starting the minimization.
They are handled by MinimizerOptions class:

{{< highlight python >}}

fit_suite.getMinimizer().getOptions().setMaxFunctionCalls(10)

{{< /highlight >}}

In the above code snippet, `setMaxFunctionCalls` sets the maximum number of times the minimizer is allowed to call the simulation to 10.

There are also expert-level options common for all minimizers as well as a number of options to tune individual minimization algorithms. They will be explained in due course.

#### Running the fitting and retrieving the results

After the initial configuration of FitSuite has been performed, the fitting can be started using the command

{{< highlight python >}}

fit_suite.runFit()

{{< /highlight >}}

Depending on the complexity of the sample and the number of free sample parameters the fitting process can take from tens to thousands of iterations. The results of the fit can
be printed on the screen using the command

{{< highlight python >}}

fit_suite.printResults()

{{< /highlight >}}

[This example]({{% ref-example "fitting-new/basic/basic-fit-tutorial" %}}) gives more details on accessing the fitting results.

### How to get the right answer from fitting

One of the main difficulties in fitting the data with the model is the presence of multiple local minima in the objective function. Many problems can cause the fit to fail, for example:

* an unreliable physical model
* an unappropriate choice of objective function
* multiple local minima
* an unphysical behavior of the objective function, unphysical regions in the parameters space
* an unreliable parameter error calculation in the presence of limits on the parameter value
* an exponential behavior of the objective function and the corresponding numerical inaccuracies, excessive numerical roundoff in the calculation of its value and derivatives
* large correlations between parameters
* very different scales of parameters involved in the calculation
* not positive definite error matrix even at minimum

The given list, of course, is not only related to BornAgain fitting. It remains applicable to any fitting program and any kind of theoretical model.
Below we give some recommendations which might help the user to achieve reliable fit results.

* Initially choose a small number of free fitting parameters
* Eliminate redundant parameters
* Provide a good initial guess for the fit parameters
* Start from the default minimizer settings and perform some fine tuning after some experience has been acquired
* Repeat the fit using different starting values for the parameters or their limits
* Repeat the fit, fixing and varying different groups of parameter

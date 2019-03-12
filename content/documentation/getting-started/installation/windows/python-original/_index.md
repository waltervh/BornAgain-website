+++
title = "Manual Python installation (advanced)"
weight = 20
+++

## Manual Python installation  (advanced)

In this instruction we explain how to install Python and all necessary site packages
to be able to run BornAgain simulations via Python scripting.

We advertise this as "Manual Python installation for advanced users", however, we find this way actually much
easier and less messy, than Python installation using Anaconda explained [here]({{% relref "documentation/getting-started/installation/windows/python-anaconda" %}}).


## Download Python from official web site

Download and install Python {{% recommended-python %}} 64-bit version from [official site](https://www.python.org/download). 

This is actually the most complicated step since
default download button leads to download of 32-bit version which will not work with BornAgain.
To download correct version, click on `Windows` link marked on screenshot above.

{{< figscg src="python-download1.PNG" class="center" width="450px">}}

On new page you will find list of `Windows` installers, select `Windows x86-64 executable installer". Make sure that you are in
the section corresponding to Python {{% recommended-python %}}.

{{< figscg src="python-download2.PNG" class="center" width="450px">}}


## Run installer

Run installer. Please select `Add Python 3.7 to PATH` at the bottom of the screen and then push `Install Now`.

{{< figscg src="python-install-step2.PNG" class="center" width="450px">}}

Adding Python to a PATH is important step to be able to use Python from the command shell and various code editors.

## Install site packages

BornAgain required `matplotlib` and `numpy` installed in site-packages of your Python distribution.
Start Windows command shell by typing `cmd` in Windows `Start menu`.

{{< figscg src="python-install-step3.PNG" class="center" width="450px">}}

In new opened window type

```
pip install matplotlib numpy
```

`Pip` is a package manager which is used in Python world to add necessary packages to default Python installation.
The command `pip install matplotlib numpy` starts installation of `matplotlib` library for plotting and `numpy` library for matrix manipulation.

{{< figscg src="python-install-step4.PNG" class="center" width="450px">}}

{{% alert theme="info" %}}
`Little hint:` if Windows complains that `pip` command is not found on the system, this means that you have forgotten to add Python to the PATH as explained above.
{{% /alert %}}

When installation is complete the window looks line on screenshot below.

{{< figscg src="python-install-step5.PNG" class="center" width="450px">}}

At this point Python and all dependencies are successfully installed.

{{% alert theme="info" %}}
In this scenario you have installed Python to your local home directory and _you have added_
Python to system PATH. This approach has the advantage that your Python is integrated with Windows installation,
you can use it from any Windows command shell or use it together with any integrated development environment, like
`VSCode` or `PyCharm`. 

The disadvantage, is that this approach can be safely used only if you have single Python installation
on a system. Setup for multiple Python's versions on a system goes far beyond the scope of this tutorial.
{{% /alert %}}


### Validate Python + BornAgain installation

To validate that BornAgain is working together with installed Python 
start Windows command shell by typing `cmd` in Windows `Start menu`.
To validate BornAgain installation type in

+ `python` to start Python interpreter
+ `import bornagain` as a first command
+ `print(bornagain.GetVersionNumber())` to print BornAgain version number on the screen.

{{< figscg src="python-install-step6.PNG" class="center" width="450px">}}

If no errors will come up, and you even see BornAgain version number printed on the screen, your installation is correct.


### Running BornAgain examples

To run BornAgain example from command line launch command shell again and
type (or copy-and-paste) command as below to see scattering image appearing on the screen.

```
python C:/BornAgain-{{< release-string >}}/Examples/python/simulation/ex01_BasicParticles/CylindersAndPrisms.py
```

{{< figscg src="python-install-step7.PNG" class="center" width="450px">}}

This implies, that BornAgain was installed to default place. If not, you will have to adjust path to BornAgain Python example accordingly.

{{% alert theme="info" %}}
`Little hint:` while typing long commands in command shell you can push `TAB` keyboard key - the Windows will help with long directory names.
{{% /alert %}}

This kind of manual launching is not very convenient for regular usage and should be considered rather as yet another validation step.

### Running BornAgain examples using Python IDE

We have provide two more step-by-step tutorials to explain how to run BornAgain examples in convenient manner using one of integrated development environments.

+ [Using VSCode editor]({{% relref "documentation/getting-started/installation/windows/python-original/python-vscode" %}})
+ [Using PyCharm integrated development environment]({{% relref "documentation/getting-started/installation/windows/python-original/python-pycharm" %}})

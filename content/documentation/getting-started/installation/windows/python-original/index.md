+++
title = "Manual Python installation"
weight = 20
+++

## Manual Python installation

In this instruction we explain how to install Python and all necessary site packages
to be able to run BornAgain simulations via Python scripting.

We advertise this as "Manual Python installation for advanced users", however, we find this way actually much
easier and less messy, than Python installation using Anaconda explained [here]({{% relref "documentation/getting-started/installation/windows/python-anaconda" %}}).


## Download Python from official web site

Download and install Python 3.7 64-bit version from [official site](https://www.python.org/download). 

This is actually the most complicated step since
default button leads to download of 32-bit version which will not work with BornAgain.
To download correct version, click on `Windows` link marked on screenshot above.

{{< figscg src="python-download1.PNG" class="center" width="450px">}}

On new page you will find list of `Windows` installers, select `Windows x86-64 executable installer".

{{< figscg src="python-download2.PNG" class="center" width="450px">}}


## Run installer

Run installer. Please select `Add Python 3.7 to PATH` at the bottom of the screen and then push `Install now`.

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

This will start installation of all dependencies.

{{< figscg src="python-install-step4.PNG" class="center" width="450px">}}

{{% alert theme="info" %}}
`Little hint:` if Windows complains that `pip` command is not found on the system, this means that you have forgotten to add Python to the PATH as explained above.
{{% /alert %}}

When installation is complete the window looks line on screen shot below.

{{< figscg src="python-install-step5.PNG" class="center" width="450px">}}

At this point Python and all dependencies are succesfully installed.

### Running BornAgain examples

To run BornAgain example from command line launch command shell again and
type (or copy-and-paste) command as below to see scattering image appearing on the screen.

```
python C:/BornAgain-{{< release-string >}}/Examples/python/simulation/ex01_BasicParticles/CylindersAndPrisms.py
```

{{< figscg src="python-install-step6.PNG" class="center" width="450px">}}

Of course, this kind of manual launching is not very convenient for regular usage and should be considered rather as yet another validation step.

{{% alert theme="info" %}}
`Little hint:` while typing long commands in command shell you can push `TAB` keyboard key - the Windows will help with long directory names.
{{% /alert %}}

### Running BornAgain examples using Python IDE



Text
https://code.visualstudio.com/


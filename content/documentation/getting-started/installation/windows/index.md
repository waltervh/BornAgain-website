+++
title = "Installation on Windows"
weight = 10
+++

## Installation on Windows

We provide 64-bit installer package which can be installed into 64-bit Windows 7, 8 and 10 systems.

The BornAgain graphical user interface doesn't require any additional libraries to be installed on the system. You can start using the BornAgain application right after the installation. However, to use the framework via scripting you have to have a Python framework installed. To install and run BornAgain for the first time proceed with the following steps:

* [Install Python](#install-python")
* [Use the BornAgain installer](#use-the-bornagain-installer)
* [Test the installation](#test-the-installation)

### Install Python

The current version of BornAgain requires `python, matplotlib, numpy` to be installed on the system. This set of packages is known as the [SciPy](http://www.scipy.org/) stack and for most users the easiest way to install it is to download one of the free Python distributions, which includes all the key packages. The list of possible options is given on the [SciPy installation website](http://www.scipy.org/install.html). You can also directly install Python from their main website [Python](https://www.python.org/downloads/) and then use `pip` to install `matplotlib` and `numpy` as detailed on the [SciPy installation website](http://www.scipy.org/install.html).

{{% alert theme="info" %}}
We recommend users to install Python3, as support for BornAgain with Python2 might be dropped in the future.
{{% /alert %}}

### Use the BornAgain installer

The BornAgain installation package for Windows 7, 8 and 10 can be downloaded from [here](http://apps.jcns.fz-juelich.de/src/BornAgain). There are two installers provided: one for usage with Python3 (recommended) and one for Python2. After downloading the installer, double click the `.exe` file and follow the instructions on the screen.

### Test the installation

{{< figscg src="/img/bornagainapp_32.png" class="float-left">}} Use BornAgain icon located on the desktop to start GUI.

<p style="clear: both;">

{{< figscg src="/img/python_icon_32.png" class="float-left">}}
Run an example from BornAgain installation directory by double-clicking on the Python file.
<p style="clear: both;">

This step will work only if Python file extensions `*.py` are associated by the system with the Python interpreter. If it is not the case, Windows will ask to choose what program to use to open the file. Depending on your Python installation it might be, for example, `C:\Python36\python.exe`.

Or, run a Python example directly from the command line:

```
$ python C:/BornAgain-{{< release-string-short >}}/Examples/python/simulation/ex01_BasicParticles/CylindersAndPrisms.py
```

You should immediately see a scattering image appearing on the screen.
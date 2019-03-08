+++
title = "Installation on Windows"
weight = 10
+++

## Installation on Windows

We provide 64-bit installer package which can be installed into 64-bit Windows 7, 8 and 10 systems.

The BornAgain graphical user interface doesn't require any additional libraries to be installed on the system. You can start using the BornAgain application right after the installation. However, to use the framework via scripting you have to have a Python framework installed. To install and run BornAgain for the first time proceed with the following steps:

* [Use the BornAgain installer](#use-the-bornagain-installer)
* [Install Python](#install-python")
* [Test the installation](#test-the-installation)

### Use the BornAgain installer

The BornAgain installation package for Windows 7, 8 and 10 can be downloaded from [here]({{% relref "download#Windows" %}}). 

There are several installers provided for various Python distributions. We recommend users to install BornAgain intended for latest Python 3.7 version.
After downloading the installer, double click the `.exe` file and follow the instructions on the screen.

{{< figscg src="/img/bornagainapp_32.png" class="float-left">}} Use BornAgain icon located on the desktop to start GUI.
Please refer to [Using graphical user interface]({{% relref "documentation/running-gui" %}}) section for basic overview of GUI functionality.
<p style="clear: both;">

### Install Python

To run BornAgain Python examples one have to have Python interpreter installed on the system together with two additional packages: `matplotlib` and `numpy`.

This set of packages is known as the [SciPy](http://www.scipy.org/) stack
and for most users the easiest way to install it is to download one of the free Python distributions, which includes all the key packages.
The list of possible options is given on the [SciPy installation website](http://www.scipy.org/install.html).

We recommend [Anaconda Python Distribution](http://www.anaconda.com) as all-in-one installer.
Please follow our [Detailed installation instruction]({{% relref "documentation/getting-started/installation/windows/python-anaconda" %}}).

{{% collapse title="For advanced users" id="advanced-users" %}}
Advanced users might find easier to install Python directly from their <a href="https://www.python.org/downloads">main website</a>
and then install necessary dependencies `matplotlib` and `numpy` from command line.
{{% /collapse %}}

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
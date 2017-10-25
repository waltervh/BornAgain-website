+++
title = "Installation on MacOS"
weight = 21
+++

## Installation on MacOS

For Mac OS X, we provide a 64-bit binary .dmg installer for Maverick (10.9) or above and also support build and installation from source.
Alternatively, you can build BornAgain from source by yourself following the 
[Installation on Unix]({{% relref "documentation/bornagain/installation/unix-detailed/index.md" %}}) section.

The rest of this section explains how to install BornAgain using `.dmg` installer.

BornAgain graphical user interface doesn't require any additional libraries to be installed on the system. You can start using BornAgain application right after the installation. However, to use the framework via scripting you have to have Python framework installed and configured as explained in the following sections.

To install and run BornAgain for the first time proceed with the following steps:

* [Use BornAgain installer](#use-bornagain-installer)
* [Install Python](#install-python)
* [Configure Python for BornAgain](#configure-python-for-bornagain)
* [Test the installation](#test-the-installation)

 
#### Use BornAgain installer

BornAgain installer can be downloaded from [here](http://apps.jcns.fz-juelich.de/src/BornAgain). 
After downloading the installer, double click `.dmg` file to mount it, accept the license agreement and then drag the BornAgain icon onto the Applications shortcut icon.

{{< figscg src="installation_macdmg2.png" class="center">}}

Depending on your system's security settings you might not be able to open BornAgain directly from the launchpad. In this case you will have to proceed first with the instruction [Open an app from an unidentified developer](http://support.apple.com/kb/PH14369).

At this point you can can already start working with BornAgain GUI. The rest of tutorial explains how to setup BornAgain for Python.

#### Install Python

To be able to use BornAgain framework via Python scripting `python-2.7, matplotlib, numpy` must be installed on the system. 
This set of packages is known as [SciPy stack](https://www.scipy.org) and for most users the easiest way to install it, is to download one of free Python distributions, which includes all the key packages. The list of possible options is given on [SciPy installation site](http://www.scipy.org/install.html). We have tested [Anaconda Python Distribution](https://www.anaconda.com/download) and suggest to use it if you do not have any other preferences.

{{% alert theme="success" %}}
Download and install Anaconda Mac OS X 64-bit — Python 2.7 — Graphical Installer from [here](https://www.anaconda.com/download/) before proceeding to the installation of BornAgain.
{{% /alert %}}

{{% alert theme="warning" %}}
While Python comes pre-installed on OS X, it is always quite outdated and we do not recommend to use it together with BornAgain libraries.
{{% /alert %}}

 
##### Alternatives

If your system is already equipped with [Homebrew](http://brew.sh/) 
(recommended) or [MacPorts](http://www.macports.org/)  package managers, you can certainly make use of it and  install Python with all required modules  by typing in the terminal

For Homebrew users:
```
$ brew install python homebrew/science/matplotlib numpy
```

For MacPorts users:

```
$ sudo port install py27-matplotlib py27-numpy
$ sudo port select --set python python27
```

#### Configure Python for BornAgain

To make your Python installation aware of BornAgain API you have to install the BornAgain core libraries into `site-packages` of your Python. 
This should be done by running the `bornagain_install_python.py` script from application bundle. Assuming that BornAgain is installed in the 
`/Applications/BornAgain.app` folder, launch the Terminal application and run the following command

```
$ python /Applications/BornAgain.app/Contents/libexec/BornAgain-1.10/bornagain_python_install.py
```

The install script will install the BornAgain core libraries into site-packages of given Python interpreter. Check that the installation went successfully by typing

```
$ python -c "import bornagain"
```
 
##### Alternatives

If your prefer to install the BornAgain core libraries not to the site-packages folder of your Python interpreter, but to a custom folder, check the following instruction.

#### Test the installation

{{< figscg src="/img/bornagainapp_32.png" class="floatleft">}} Use BornAgain icon from launchpad to start GUI.

<p style="clear: both;">

{{< figscg src="/img/python_icon_32.png" class="floatleft">}}
Run an example from BornAgain installation directory by typing in the terminal.
<p style="clear: both;">

```
$ python /Applications/BornAgain.app/Contents/share/BornAgain-1.10/Examples/python/simulation/ex01_BasicParticles/CylindersAndPrisms.py
```

You should immediately see a scattering image appearing on the screen.
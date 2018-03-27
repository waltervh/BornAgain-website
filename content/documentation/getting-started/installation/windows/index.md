+++
title = "Installation on Windows"
weight = 10
+++

## Installation on Windows

We provide 64-bit installer package which can be installed into 64-bit Windows 7, 8, 10 systems.

BornAgain graphical user interface doesn't require any additional libraries to be installed on the system. You can start using BornAgain application right after the installation. However, to use the framework via scripting you have to have Python framework installed. To install and run BornAgain for the first time proceed with the following steps:

* [Use BornAgain installer](#use-bornagain-installer)
* [Install Python]({{% relref "#install-python" %}})
* [Test the installation]({{% relref "#test-the-installation" %}})

#### Use BornAgain installer

BornAgain installation package for Windows 7, 8 can be downloaded from [here](http://apps.jcns.fz-juelich.de/src/BornAgain). After downloading the installer, double click the `.exe` file and follow the instructions on the screen.

####  Install Python

The current version of BornAgain requires `python-2.7, matplotlib, numpy` to be installed on the system. This set of packages is known as 
[SciPy](http://www.scipy.org/) stack and for most users the easiest way to install it is to download one of free Python distributions, which includes all the key packages. The list of possible options is given on [SciPy installation site](http://www.scipy.org/install.html). We have tested 
[Anaconda Python Distribution](https://store.continuum.io/cshop/anaconda) and suggest to use it if you do not have any other preferences.

{{% alert theme="success" %}}
Download and install Anaconda Windows 64-bit — Python 2.7 — Graphical Installer from [here](http://continuum.io/downloads) before proceeding to the installation of BornAgain.
{{% /alert %}}

#### Test the installation

{{< figscg src="/img/bornagainapp_32.png" class="floatleft">}} Use BornAgain icon located on the desktop to start GUI.

<p style="clear: both;">

{{< figscg src="/img/python_icon_32.png" class="floatleft">}}
Run an example from BornAgain installation directory by double-clicking on the Python file.
<p style="clear: both;">

This step will work only if Python file extensions *.py are associated by the system with the Python interpreter. If it is not the case, Windows will ask to choose what program to use to open the file. Depending on your Python installation it might be, for example, `C:\Anaconda\python.exe` or `C:\Users\yourname\Anaconda\python.exe`.

```
$ python C:/BornAgain-1.10/Examples/python/simulation/ex01_BasicParticles/CylindersAndPrisms.py
```

You should immediately see a scattering image appearing on the screen.
+++
title = "Installation on Windows"
weight = 10
+++

## Installation on Windows

We provide 64-bit installer package which can be installed into 64-bit Windows 7, 8 and 10 systems.

The BornAgain graphical user interface doesn't require any additional libraries to be installed on the system. You can start using the BornAgain application right after the installation. However, to use the framework via scripting you have to have a Python framework installed. To install and run BornAgain for the first time proceed with the following steps:

* [Use the BornAgain installer](#use-the-bornagain-installer)
* [Install Python](#install-python")

### Use the BornAgain installer

The BornAgain installation package for Windows 7, 8 and 10 can be downloaded from [here]({{% relref "download#Windows" %}}). 

There are several installers provided for various Python distributions. We recommend users to install BornAgain intended for latest Python {{% recommended-python %}} version.
After downloading the installer, double click the `.exe` file and follow the instructions on the screen.

{{< figscg src="/img/bornagainapp_32.png" class="float-left">}} Use BornAgain icon located on the desktop to start GUI.
Please refer to [Using graphical user interface]({{% relref "documentation/running-gui" %}}) section for basic overview of GUI functionality.
<p style="clear: both;">

### Install Python

To run BornAgain Python examples one have to have Python interpreter installed on the system together with two additional packages: `matplotlib` and `numpy`.

This set of packages is known as the [SciPy](http://www.scipy.org/) stack
and for most users the easiest way to install it is to download one of the free Python distributions, which includes all the key packages.
The list of possible options is given on the [SciPy installation website](http://www.scipy.org/install.html).

For unexperienced users we recommend [Anaconda Python Distribution](http://www.anaconda.com) as all-in-one installer.
Please follow our [Install Python with Anaconda installer]({{% relref "documentation/getting-started/installation/windows/python-anaconda" %}})
step-by-step instruction.

{{% collapse title="For advanced users" id="advanced-users" %}}
Advanced users might find easier (and much faster) to install Python directly from their <a href="https://www.python.org/downloads">main website</a>
and then install necessary dependencies `matplotlib` and `numpy` from command line.
Please follow our [Manual Python installation]({{% relref "documentation/getting-started/installation/windows/python-original" %}}) instruction.
{{% /collapse %}}


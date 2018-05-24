+++
title = "Working with Python scripts"
weight = 40
+++

## Working with Python scripts

BornAgain can be used from Python to run GISAS, off-specular or specular simulations or to do a fit of the data. This is more flexible than using BornAgain from the Graphical User Interface, and it will be a natural solution for those who have reached the limitations of our GUI.

The user creates a Python script with a sample description and simulation settings. The user then runs the simulation by executing the script in the Python interpreter and assesses the simulation results using the graphics or analysis library of his choice, e.g. `Python+numpy+matplotlib`.

{{< figscg src="nodes_pycharm_ide.png" width="500" class="center">}}

At this point we assume that the framework is installed as explained in the 
[Installation instructions]({{% relref "documentation/getting-started/installation" %}}) and that the user is able to run Python examples from the installation directory.  In the next sections we go through a complete example of simulation and fitting using BornAgain.

{{% alert theme="info" %}}
For whose users who are making their first steps in Scientific Computing with Python and who are looking for a good Python editor we recommend 
[PyCharm](https://www.jetbrains.com/pycharm/) - free, lightweight, multi-platform IDE for Python development.
{{% /alert %}}


{{% children %}}

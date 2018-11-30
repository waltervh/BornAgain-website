+++
title = "Find background"
weight = 30
+++

## Find background

Examples demonstrates how to introduce background in the simulation and fit its value.
Here we are simulating cylinders on top of a substrate without interference. Simulation builder function
defined at line 42 requires 4 parameters:

+ height of cylinders
+ radius of cylinders
+ tha value of constant background
+ scale factor for beam intensity

The radius and height of the cylinder are passed to the function constructing the multi layer
while scale and background are used to setup instrument.

{{% highlightfile file="/static/files/python/fitting-new/ex02_AdvancedExamples/find_background.py" language="python" %}}

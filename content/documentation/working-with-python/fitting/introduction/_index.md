+++
title = "Introduction"
weight = 10
+++

# Introduction

Fitting in BornAgain deals with estimating the optimum parameters in the numerical model (i.e. scattering simulation) 
by minimizing the difference between simulated and reference data. The features include

+ A variety of built in minimization algorithms.
+ Possibility to use external minimizers (bumps, lmfit, etc).
+ The choice over possible fitting parameters, their properties and correlations.
+ The full control on objective function calculations, including applications of different normalizations and assignments of different masks and weights to different areas of reference data.
+ The possibility to fit simultaneously an arbitrary number of data sets.

{{% alert theme="info" %}}
BornAgain fitting interface was redesigned in October, 2018 for better compatibility
with third party minimizers (scipy.optimize, lmfit, bump).
{{% /alert %}}


In further explanations we will be mostly focused on GISAS data, however, all of the following is applicable for specular and off-specular fits.

{{% children depth="2" %}}


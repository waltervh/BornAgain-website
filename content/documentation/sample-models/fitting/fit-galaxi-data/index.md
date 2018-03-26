+++
title = "Real life fit example: Experiment at GALAXI"
weight = 60
+++

### Real life fit example: Experiment at GALAXI

This is an example of real data fit. We use our own measurements performed at the laboratory diffractometer [GALAXI](http://www.fz-juelich.de/jcns/jcns-2//DE/Leistungen/GALAXI/_node.html) in Forschungszentrum Jülich. The example supports [Importing experimental data]({{% relref "documentation/working-with-python/importing-experimental-data/index.md" %}}) tutorial.

{{< galleryscg >}}
{{< figscg src="FitGALAXIData_setup.jpg" width="450px" caption="Real-space model">}}
{{< figscg src="FitGALAXIData.png" width="600px" caption="Intensity image">}}
{{< /galleryscg >}}

#### Python script:
The file `SampleBuilder.py` (see below) contains a sample description.

* Sample represents a 4 layer system (substrate, teflon, hmdso and air) with Ag nanoparticles placed inside the hmdso layer on top of the teflon layer.
* Sample is generated with the help of `SampleBuilder`, which is able to create samples depending from registered parameters.
* Nanoparticles have a broad Log-normal size distribution.
{{% highlightfile file="/static/files/python/fitting/ex10_FitGALAXIData/SampleBuilder.py" language="python" %}}
\
\
The file `FitGALAXIData.py` (see below) contains parts related to detector initialization, simulation setup, importing the data and finally fit engine setup.

* The rectangular detector is created to represent PILATUS detector from experiment (line 20).
* In simulation settings beam is initialized and the detector is assigned to the simulation. Region of interest is assigned at line 40 to simulate only small rectangular window. Additionally, a rectangular mask is added to exclude reflected beam from the analysis (line 42).
* Real data is loaded from tiff file into histogram representing the detector.
* `run_fitting()` function contains the initialization of fitting kernel: creattion of simulation, assignment of fit pair, fit parameters selection (line 62).
* Two minimizer strategy is selected - 'Genetic' minimizer starts to investigate broad parameter space, 'Minuit2' minimizer continues to find the local minima.
{{% highlightfile file="/static/files/python/fitting/ex10_FitGALAXIData/FitGALAXIData.py" language="python" %}}
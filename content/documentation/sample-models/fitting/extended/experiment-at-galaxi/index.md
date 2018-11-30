+++
title = "Experiment at GALAXI"
weight = 30
+++

## Experiment at GALAXI

This is an example of real data fit. We use our own measurements performed at the laboratory diffractometer [GALAXI](http://www.fz-juelich.de/jcns/jcns-2//DE/Leistungen/GALAXI/_node.html) in Forschungszentrum Jülich. 

{{< galleryscg >}}
{{< figscg src="FitGALAXIData_setup.jpg" width="350px" caption="Real-space model">}}
{{< figscg src="FitGALAXIData.png" width="350px" caption="Fit window">}}
{{< /galleryscg >}}

* The file `sample_builder.py` contains a sample description.
* Sample represents a 4 layer system (substrate, teflon, hmdso and air) with Ag nanoparticles placed inside the hmdso layer on top of the teflon layer.
* Sample is generated with the help of `SampleBuilder`, which is able to create samples depending on parameters defined in the constructor and passed through `create_sample` merthod.
* Nanoparticles have a broad Log-normal size distribution.

{{% highlightfile file="/static/files/python/fitting-new/ex03_ExtendedExamples/experiment_at_galaxi/sample_builder.py" language="python" %}}

<hr>

* The file `аше_пфдфчш_вфеф.py` contains parts related to detector initialization, simulation setup, importing the data and finally fit engine setup.
* The rectangular detector is created to represent PILATUS detector from experiment (line 19).
* In simulation settings beam is initialized and the detector is assigned to the simulation. Region of interest is assigned at line 39 to simulate only small rectangular window. Additionally, a rectangular mask is added to exclude reflected beam from the analysis (line 40).
* Real data is loaded from tiff file into histogram representing the detector.
* `run_fitting()` function contains the initialization of fitting kernel: loading experimental data, assignment of fit pair, fit parameters selection (line 62).

{{% highlightfile file="/static/files/python/fitting-new/ex03_ExtendedExamples/experiment_at_galaxi/fit_galaxi_data.py" language="python" %}}

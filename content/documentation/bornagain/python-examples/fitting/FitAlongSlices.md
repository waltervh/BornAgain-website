+++
title = "Fitting along slices"
weight = 11
+++

### Fitting along slices

Here we demonstrate how to fit along slices. The idea is that the user defines positions of vertical and horizontal lines crossing the detector plane in regions of most interest (Yoneda wings, Bragg peaks, etc.) and then finds sample parameters which fits those regions best.

Such approach uses much less CPU while still giving a chance to find optimal sample parameters. In general, however, it is arguable, whether fitting along slices makes more sence than fitting using the whole detector image. Without going into this discussion we just provide such possibility.

Technically, the idea is to mask the whole detector except thin lines, one vertical and one horizontal, representing slices. This will make the simulation and fitting to calculate only along the indicated slices.

* In the given example (see the [Python script]({{% relref "documentation/bornagain/python-examples/fitting/FitAlongSlices.md#python-script" %}})) we simulate cylinders on top of substrate without interference. The fitting procedure looks for the cylinder's height and radius.
* Lines 187, 188, 189 demonstrate the whole code you need to mask the whole detector and then unmask two slices: vertical line at phi=0.0, and horizontal line at alpha=0.2deg.
* The majority of the code is located in custom DrawObserver class (defined at Line 77, and invoked at Lines 195,196), which plots the fit progress along slices every 5th iteration.

{{< galleryscg >}}
{{< figscg src="../FitAlongSlices.png" width="600px" caption="Intensity Image">}}
{{< /galleryscg >}}

#### Python script:
{{< highlightloc file="FitAlongSlices.py" language="python" >}}
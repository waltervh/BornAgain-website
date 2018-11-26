+++
title = "Fitting along slices"
weight = 20
+++

## Fitting along slices

Here we demonstrate how to fit along slices. The idea is that the user defines positions of vertical and horizontal lines crossing the detector plane in regions of most interest (Yoneda wings, Bragg peaks, etc.) and then finds sample parameters which fits those regions best.

Such approach uses much less CPU while still giving a chance to find optimal sample parameters. In general, however, it is arguable, whether fitting along slices makes more sense than fitting using the whole detector image. Without going into this discussion we just provide such a possibility.

Technically, the idea is to mask the whole detector except thin lines, one vertical and one horizontal, representing slices. This will make the simulation and the fitting procedure to calculate only along these indicated slices.

* In the given script we simulate cylinders on top of a substrate without interference. The fitting procedure looks for the cylinder's height and radius.
* Lines 55, 56, 57 demonstrate the code you need for masking the whole detector and then unmasking the two desired slices: vertical line at $\phi=0.0^{\circ}$, and horizontal line at $\alpha=0.2^{\circ}$.
* The majority of the code is located in custom `PlotObserver` class (defined in line 76, and invoked at lines 190, 191), which plots the fit progress along slices every 10th iteration.

{{< galleryscg >}}
{{< figscg src="fit_along_slices.png" width="600px" caption="Fit window">}}
{{< /galleryscg >}}

{{% highlightfile file="/static/files/python/fitting-new/ex02_AdvancedExamples/fit_along_slices.py" language="python" %}}

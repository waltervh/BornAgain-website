+++
title = "Fitting with masks"
weight = 11
+++

### Fitting with masks

In this example we demonstrate how to mask certain areas on the detector image to exclude their influence on the fitting procedure.  This can be done by invoking the method `addMask` on a simulation object.

```
simulation = GISASSimulation()
simulation.addMask(Rectangle(x1, y1, x2, y2), mask_value)
```

where Rectangle is related to the shape of the mask in detector coordinates, `mask_value` can be either True (area is excluded from the simulation and fit) or False (area will stay in the simulation and will be taken into account in Chi2 calculations during the fit). There can be an arbitrary number of masks of various shapes added to the simulation one after another. Each subsequent mask overrides the previously defined `mask_value` in the given area.

* In the given example we simulate cylinders on top of substrate without interference. The fitting procedure looks for the cylinder's height and radius.
* Line 130 contains a call to `add_mask_to_simulation` function which applies masks to the detector in such a way, that simulated image looks like a Pac-Man from the ancient arcade game.
* In this function we start from masking the whole detector (Line 88) and then we unmask the area of an elliptic shape (Line 91) to simulate Pacman's head. Then we keep adding masks of different shapes to get the final picture.


{{< galleryscg >}}
{{< figscg src="../FitWithMasks.png" width="600px" caption="Intensity Image">}}
{{< /galleryscg >}}

#### Python script:
{{< highlightloc file="FitWithMasks.py" language="python">}}
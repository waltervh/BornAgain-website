+++
title = "Polarized SANS"
weight = 40
+++

### Polarized SANS

This example shows how to simulate polarized SANS with BornAgain, using the Born
Approximation.

While BornAgain is designed for GISAS experiments (using the Distorted Wave Born
Approximation), it naturally also contains the Born Approximation, which is the
default way of simulating SAS experiments. Many software packages support the
simulation of SAS experiments and in particular, we support the use of
[SASView](https://www.sasview.org/).

However, when the sample geometry or the experimental conditions are outside the
scope of a third party simulation software, users can try to simulate it with
BornAgain. For example, polarized SANS is often not supported (or in a limited way)
by other tools. Here, we show how those experiments could be simulated with
BornAgain.

The main difference between simulation GISAS and SAS in BornAgain is the presence
of only a single layer in the multilayer object. This triggers the software to
calculate the differential scattering cross section in the Born Approximation:

{{< highlight python>}}
multiLayer = ba.MultiLayer()
multiLayer.addLayer(solvent_layer)
{{< /highlight >}}

The rest of the example script hereafter contains nothing new compared to the
previous examples. A sample with a magnetic core-shell particle is constructed.
Beam and detector are setup to detect the spin-flip scattering channel and the
result of this simulation is plotted as usual.

{{< galleryscg >}}
{{< figscg src="PolarizedSANS.png" width="600px" caption="Intensity images">}}
{{< /galleryscg >}}

{{% highlightfile file="/static/files/python/simulation/ex07_Miscellaneous/PolarizedSANS.py" language="python" %}}

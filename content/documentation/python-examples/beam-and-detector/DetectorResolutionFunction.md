+++
title = "Detector Resolution Function"
weight = 11
+++

### Detector Resolution Function

Scattering from a monodisperse distribution of cylindrical particles with a Gaussian resolution function of the detectors.

* The sample is made of cylindrical particles randomly deposited on a substrate. It is similar to [Cylinders in DWBA]({{% relref "documentation/python-examples/embedded-particles/CylindersInDWBA.md" %}}) with the additional resolution function of the detectors.
* The radii and heights of the cylinders are equal to $5$ nm.
* There is no interference between the scattered waves.
* The detector resolution function is a two-dimensional Gaussian with the same width for the $x$ and $y$ axes: $\sigma\_x = \sigma\_y = 0.0025^{\circ}$.
* The wavelength is equal to $1$ $\unicode{x212B}$.
* The incident angles are $\sigma_{\alpha\_i} = \sigma\_{\phi\_i} = 0.1^{\circ}$.
  
{{< galleryscg >}}
{{< figscg src="/files/Examples_images/PyExamples/DetectorResolutionFunction.png" width="350px" caption="Intensity image">}}
{{< /galleryscg >}}

#### Python script:
{{% highlightfile file="/static/files/python/simulation/ex05_BeamAndDetector/DetectorResolutionFunction.py" language="python" %}}
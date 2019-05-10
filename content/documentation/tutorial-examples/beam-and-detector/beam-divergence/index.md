+++
title = "Beam divergence"
weight = 10
+++

### Beam divergence

Model an input beam with a finite distribution of wavelengths and of incident angles.

* The wavelength follows a log-normal distribution around the mean value of $1$ $\unicode{x212B}$ with a scale parameter equal to $0.1$.
* Both incident angles follow a Gaussian distribution around the average values $\alpha\_i = 0.2 ^{\circ}$ and $\phi\_i = 0^{\circ}$, respectively and $\sigma_{\alpha\_i} = \sigma\_{\phi\_i} = 0.1^{\circ}$.

The DWBA simulation is shown for a standard sample model:

* The sample is composed of monodisperse cylinders deposited on a substrate.
* The cylinders are dilute and distributed at random,
  hence there is no interference between scattered waves.

{{< galleryscg >}}
{{< figscg src="BeamDivergence_setup.jpg" width="350px" caption="Real-space model">}}
{{< figscg src="BeamDivergence.png" width="350px" caption="Intensity image">}}
{{< /galleryscg >}}

{{% highlightfile file="/static/files/python/simulation/ex05_BeamAndDetector/BeamDivergence.py" language="python" %}}
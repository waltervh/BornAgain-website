+++
title = "Beam divergence"
weight = 10
+++

### Beam divergence

Scattering from a random distribution of monodisperse cylinders impinged by an input beam presenting divergences in wavelength and incident angles $\alpha\_i$ and $\phi\_i$.

* The sample is composed of cylinders deposited on a substrate.
* There is no interference between the scattered waves.
* The simulation is run using the Distorted Wave Born Approximation (DWBA).
* The wavelength follows a log-normal distribution around the mean value of $1$ $\unicode{x212B}$ with a scale parameter equal to $0.1$.
* Both incident angles follow a Gaussian distribution around the average values $\alpha\_i = 0.2 ^{\circ}$ and $\phi\_i = 0^{\circ}$, respectively and $\sigma_{\alpha\_i} = \sigma\_{\phi\_i} = 0.1^{\circ}$.  

> #### Note:  
> Please note the different definitions for the incident angle $\alpha\_i$  (convention of sign) in the functions `DistributionGaussian` and `setBeamParameters`.
  
{{< galleryscg >}}
{{< figscg src="BeamDivergence_setup.jpg" width="350px" caption="Real-space model">}}
{{< figscg src="BeamDivergence.png" width="350px" caption="Intensity image">}}
{{< /galleryscg >}}

#### Python script:
{{% highlightfile file="/static/files/python/simulation/ex05_BeamAndDetector/BeamDivergence.py" language="python" %}}
+++
title = "Material types"
weight = 20
+++

### Material types

Currently two material types are available in BornAgain: `HomogeneousMaterial` and `MaterialBySLD`.

First of them is created with the following syntax:

{{< highlight python >}}

magnetization = ba.kvector_t(1.0, 0.0, 0.0)
<material> = ba.HomogeneousMaterial("name", delta, beta, magnetization)

{{< /highlight >}}

where `name` is the arbitrary name of the material associated with its complex refractive index $n = 1 - delta + i \cdot beta$.
`magnetization` defines a 3D magnetization vector (in A/m). Variable `<material>` is later used when referring to this particular material.

`magnetization` can be omitted in material construction. It is assumed to be zero then:

{{< highlight python >}}

<material> = ba.HomogeneousMaterial("name", delta, beta)

{{< /highlight >}}

`MaterialBySLD` can be created with the expression

{{< highlight python >}}

<material> = ba.MaterialBySLD("name", sld, abs_term, magnetization)

{{< /highlight >}}

or, omitting `magnetization` again,

{{< highlight python >}}

<material> = ba.MaterialBySLD("name", sld, abs_term)

{{< /highlight >}}

Here `sld` is material scattering length density (in $nm^{-2}$), and `abs_term` is the product of the form

$$abs\\_term = N \sigma\_{abs}(\lambda)/\lambda,$$

where N is material number density, $\sigma\_{abs}(\lambda)$ is the absorption cross-section at $\lambda$
wavelength. `abs_term` dimension is as one of `sld`, $nm^{-2}$.

For user convenience an additional function to construct `MaterialBySLD` is provided:
{{< highlight python >}}

material1 = ba.MaterialByAbsCX("name", sld, Sigma, magnetization)
material2 = ba.MaterialByAbsCX("name", sld, Sigma)

{{< /highlight >}}

In this case `Sigma` is the macroscopic absorptive cross-section of the material:

$$Sigma = N \sigma\_{abs} (\lambda\_0)$$

where $\lambda\_0 = 1.798197$ angstroms, which corresponds to 2200 m/s neutrons. Its value is in $nm^{-1}$.

`MaterialBySLD` is especially well-suited for time-of-flight neutron scattering experiments, since its data does not depend
on wavelength. On the other hand, `HomogeneousMaterial` is better suited to usual experiments on one wavelength with X-ray or neutron probe.

{{% alert theme="warning" %}}

Although `MaterialBySLD` and `HomogeneousMaterial` are interchangeable in the case of neutron experiments on one wavelength,
they must not be used together in one sample because of different behavior inside BornAgain. If they are, an exception will be thrown
by `Simulation` class:
```bash
terminate called after throwing an instance of 'std::runtime_error'
  what():  Error in Simulation::prepareSimulation(): non-default materials of several types in the sample provided
```

{{% /alert %}}

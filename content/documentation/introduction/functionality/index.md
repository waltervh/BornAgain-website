+++
title = "Functionality overview"
weight = 10
+++

### Functionality overview

Some Intro???

#### Layers

* Support multilayers without any restrictions on the number of layers
* Interface roughness correlation
* Magnetic materials

{{< figscg src="fct_layer.png" width="400px" caption="Multilayered structure with roughness" class="center">}}

#### Particles

* Choice between different shapes of particles (form factors)
* Particles with inner structures
* Assemblies of particles
* Size distribution of the particles (polydispersity)

{{< figscg src="fct_diff_ff.png" caption="Selection of available shapes: elementary shapes, combinations of particles, core-shell particles and polydisperse particles" class="center">}}

#### Positions of particles

Decoupled implementations between vertical and planar positions.

* Vertical distributions: particles at specific depth in layers or on top.

{{< figscg src="fct_buried_emb_part.png" width="400px" caption="Deposited or embedded layers of particles" class="center">}}

* In-plane distributions
  * Fully disordered systems
  * Short-range order (paracrystals)
  * Two- and one-dimensional lattices

{{< figscg src="fct_disorder_lattice.png" caption="Examples of in-plane distributions of particles: disordered and 2D lattice" class="center">}}

#### Input beam

* Polarized or unpolarized neutrons
* X-rays
* Divergence of the beam (wavelength, incident angles) according to different distributions
* Optional normalization of the beam intensity

{{< figscg src="fct_beamdiv.png" width="400px" caption="Beam with angular divergence" class="center">}}

#### Detector

Spherical or rectangular detectors for GISAS and off-specular scattering.

#### Use of BornAgain

* Simulation of GISAXS and GISANS from the sample model
* Fitting to reference data (experimental or numerical)
* Interactions via Python scripts or Graphical User Interface (GUI)


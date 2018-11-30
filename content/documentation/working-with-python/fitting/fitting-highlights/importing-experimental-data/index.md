+++
title = "Importing experimental data"
weight = 10
+++

## Importing experimental data

BornAgain i/o module supports only very few file formats: `ascii`, `tiff` and our own internal format. This might be not enough when
it comes to the fitting the data obtained from some particular instrument.
However, we fully support fitting of the data presented in the form of `numpy` arrays.

Thus, fitting workflow is following

* User imports the data into numpy array.
* User creates simulation with beam, sample and detector defined.
  * The number of detector pixels must match the shape of numpy array.
  * User create region of interest to simulate/fit only some selected rectangle on his experimental image.
* User passes simulation and numpy array to fitting engine.

### Using fabio library

In code snippet below we show how to create a numpy array from the file in `edf` format using [fabio](https://pypi.org/project/fabio/) library.

{{< highlight python >}}
import fabio

img = fabio.open("experimental_data.edf")
print(img.header)

data = img.data.astype("float64")
{{< /highlight >}}

Later in the code new data array can be used to setup fitting.

{{< highlight python >}}
import bornagain as ba

fit_objective = FitObjective()
fit_objective.addSimulationAndData(simulation_builder, data)
{{< /highlight >}}

### Using BornAgain own i/o

BornAgain i/o module supports limited amount of file formats: `ascii`, 32-bits `tiff` and own text format `int`.
If file name contains and `.gz` or `.bzip2` extensions i/o module considers them as compressed and performs uncompressing on-the-flight.

{{< highlight python >}}
import bornagain as ba

data = readIntensityData("experimental_data.int.gz").array()
{{< /highlight >}}

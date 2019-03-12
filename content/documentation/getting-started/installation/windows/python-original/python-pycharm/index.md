+++
title = "PyCharm integrated development environment"
weight = 20
+++

## Using PyCharm integrated development environment

In given tutorial we are explaining, how to run BornAgain Python examples using `PyCharm` - a free, lightweighted, 
multi-platform Python integrated development environment, to work with Python code in a convenient manner.

At this point we assume that the user has already installed BornAgain and a Python distribution as explained in
[Python installation section]({{% relref "documentation/getting-started/installation/windows/python-original" %}}).

### Download and install PyCharm

Download PyCharn installer from [here](https://www.jetbrains.com/pycharm/download/#section=windows).
Make sure you are installing community edition.

{{< figscg src="python-pycharm-step2.PNG" class="center" width="450px">}}

Run installer as usual.

{{< figscg src="python-pycharm-step4.PNG" class="center" width="450px">}}

### Start PyCharm and create new project

Open `PyCharm` and select `Create New Project`:

{{< figscg src="python-pycharm-project1.PNG" class="center" width="450px">}}

The project `Untitled` will be created in the default projects directory. Click on `Project interpreter` to start configuring `PyCharm` for Python interpreter.

{{< figscg src="python-pycharm-project2.PNG" class="center" width="450px">}}

Click on `Existing interpreter` and proceed with interpreter selection.

{{< figscg src="python-pycharm-project3.PNG" class="center" width="450px">}}

In new window select `System interpreter`, this will let you to select system interpreter you have installed already
during [Python installation]({{% relref "documentation/getting-started/installation/windows/python-original" %}}) phase.

{{< figscg src="python-pycharm-project5.PNG" class="center" width="450px">}}

The final window for project creation should look like on screenshot below.

{{< figscg src="python-pycharm-project6.PNG" class="center" width="450px">}}

Push create project button.

{{% alert theme="info" %}}
Up to now we have configured `PyCharm` to work with system interpreter directly. Please note, that `PyCharm` has a possibility to run
the code in so-called virtual environment. The detailed description of configuration process can be found
[on official web site](https://www.jetbrains.com/help/pycharm/configuring-python-interpreter.html).
{{% /alert %}}


### Configure the project you've just created.

As soon as you push `Create` button, you will be presented with the initial project view. 
The tree view on the left shows that your project consists of two parts: the `Untitled` directory for your python scripts (which is empty for the moment) and the `External Libraries ` directory (which is none of our buisiness at this point).

{{< figscg src="python-pycharm-project7.PNG" class="center" width="450px">}}

Please also note, that `PyCharm` is busy now with the `indexing` (the label and the progress bar at the bottom of the screen).
This is one-time procedure when `PyCharm` familiarize itself with the project interpreter. This phase can last from several minutes up to half of an hour, depending on the speed of your laptop. During this phase you will not be able to run any of Python scripts.

Let's add BornAgain examples to project directory to run and to modify any of them at any time. Go to the `File/Settings` menu:

{{< figscg src="python-pycharm-project8.PNG" class="center" width="450px">}}

On the left, select `Project -> Project Structure` and then push the button `+ Add Content Root` on the right:

{{< figscg src="python-pycharm-project10.PNG" class="center" width="450px">}}

A new window will appear, select the directory with BornAgain Python examples and push `OK` button.

{{< figscg src="python-pycharm-project11.PNG" class="center" width="450px">}}

Close the settings window. The final project will look like shown below. 

{{< figscg src="python-pycharm-project13.PNG" class="center" width="450px">}}

Try to run any of example using right mouse button.

{{< figscg src="python-pycharm-project14.PNG" class="center" width="450px">}}

You will see scattering image appearing on the screen.

{{< figscg src="python-pycharm-project15.PNG" class="center" width="450px">}}

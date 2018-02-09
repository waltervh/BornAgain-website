+++
title = "Setup of a PyCharm project"
weight = 20
+++

### How to setup a PyCharm project

In this tutorial we explain how to setup a Python development environment to be able to create, modify and run BornAgain simulations using Python scripts. The tutorial is oriented towards Windows users who are making their first steps in scientific computing with Python.

At this point we assume that the user has already installed `BornAgain` and the `Anaconda` Python distribution as explained in the [installation section]({{% relref "documentation/bornagain/installation/windows" %}}). As the next step, we suggest you to install PyCharm - a free, lightweighted, multi-platform Python IDE - to be able to work with Python code in a convenient manner. Download PyCharm community edition from [here](https://www.jetbrains.com/pycharm/download).

The rest of the tutorial explains how to setup Anaconda, BornAgain and a PyCharm project for the first time.

#### Start PyCharm and create a new project

Open PyCharm and select `Create New Project`:

{{< figure src="create-new.png" alignment="center">}}

The project `Untitled1` will be created in the default projects directory and will use the Python interpreter from the Anaconda Python distribution:

{{< figure src="create-new2.png" alignment="center">}}

As soon as you push `Create` button, you will be presented with the initial project view. The tree view on the left shows that your project consists of two parts: the `untitled1` directory for your python scripts (which is empty for the moment) and the `External Libraries` directory.

{{< figscg src="create-new3.png" alignment="center">}}

#### Add the BornAgain libraries to your project

At this point it might be necessary to help PyCharm find the correct `BornAgain` libraries. The easiest way to do this, is to add the BornAgain library path to your project. Go to the `File/Settings` menu:

{{< figscg src="add-libs.png" alignment="center">}}

On the left, select `Project -> Project Structure` and then push the button `+ Add Content Root` on the right:

{{< figscg src="add-libs2.png" alignment="center">}}

A new window will appear, select the `C:\BornAgain-<X.x.x>\bin` directory and click the `OK` button:

{{< figscg src="add-libs3.png" alignment="center">}}

As a result, the directory `C:\BornAgain-<X.x.x>\bin` will be aded to your project. The directory contains the BornAgain core libraries and PyCharm will now be able to load them if other project files require this.

#### Add the BornAgain example path to your project

Optionally, you now might want to add the BornAgain examples path to you project to be able to see, modify and run the examples at any time. As was explained in the previous section, go to the project settings and add `C:\BornAgain-<X.x.x>\Examples` as a new content root. The final project settings window should look like this:

{{< figscg src="add-examples.png" alignment="center">}}

Close the settings window. The final project will look like shown below. Try to run some examples one by one, or start creating your own BornAgain Python script.

{{< figscg src="add-examples2.png" alignment="center">}}

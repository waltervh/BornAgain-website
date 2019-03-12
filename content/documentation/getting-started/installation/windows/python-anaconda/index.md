+++
title = "Install Python with Anaconda installer"
weight = 10
+++

## Install Python with Anaconda installer

In this tutorial we explain how to install Python together with all possible science-related packages
using Anaconda Python distribution and how to run BornAgain in `conda` environment.

### Download Anaconda installer

Download Anaconda distribution for Windows from [Official website](https://www.anaconda.com/distribution/).
Please make sure, that

+ you are downloading Windows version,
+ you are downloading 64-bit version,
+ your Anaconda Python version major number is the same as version of Python specified in BornAgain installer name.

That means, that for BornAgain installed using installer with the name `{{% installer-win-name "3.7" %}}` 
you need `Anaconda Python {{% recommended-python %}} 64-Bit version`.

{{< figscg src="anaconda-install-step0.PNG" class="center" width="450px" caption="Anaconda website download page">}}

### Run Anaconda installer

{{< figscg src="anaconda-install-step1.PNG" class="center" width="450px" caption="Run installer as usual">}}

{{< figscg src="anaconda-install-step2.PNG" class="center" width="450px" caption="Agree with installation just-for-you">}}

{{< figscg src="anaconda-install-step3.PNG" class="center" width="450px" caption="Agree with default installation folder">}}

{{< figscg src="anaconda-install-step4.PNG" class="center" width="450px" caption="Agree with advanced options defaults">}}

Push `Install` button, that will start lengthy installation process.

### Select to install VS code editor

Anaconda nowadays comes with nice free code editor from Microsoft and we recommend to install it during next installation step.
An editor provides Python code highlight and is extremely handy in Python code development, as well as for any script-related or code-related activity (e.g. Latex, web development, etc).

{{< figscg src="anaconda-install-step5.PNG" class="center" width="450px">}}

Push the button "Install Microsoft VSCode" and after installation is complete you are basically done.

{{< figscg src="anaconda-install-step6.PNG" class="center" width="450px">}}

{{% alert theme="info" %}}
In this scenario you have installed Anaconda to your local home directory and you didn't change
any system variables. This approach has the advantage that you can't break any other software and/or Python installations existing on your system.

The disadvantage is that your Anaconda is not integrated with Windows installation. You will have to use `Anaconda command prompt` and `Anaconda navigator`
to have correct Python set up. Please see below.
{{% /alert %}}

### Validate Anaconda + BornAgain installation

To validate that BornAgain is working together with installed Anaconda launch "Anaconda command prompt" from Start menu.
Just click "Start menu" and start to type "Anaconda..." unless "Anaconda command prompt" appears in options.

{{< figscg src="anaconda-running-step1.PNG" class="center" width="450px">}}

New Anaconda command shell will pop-up. To validate BornAgain installation start to type

+ `python` to start Python interpreter
+ `import bornagain` as a first command
+ `print(bornagain.GetVersionNumber())` to print BornAgain version number on the screen.

{{< figscg src="anaconda-running-step2.PNG" class="center" width="450px">}}

If no errors will come up, and you even see BornAgain version number printed on the screen, your installation is correct.

### Running BornAgain examples

To run BornAgain example from command line launch "Anaconda command prompt" and
type (or copy-and-paste) command as below to see scattering image appearing on the screen.

```
python C:/BornAgain-{{< release-string >}}/Examples/python/simulation/ex01_BasicParticles/CylindersAndPrisms.py
```

{{< figscg src="anaconda-running-step3.PNG" class="center" width="450px">}}

This implies, that BornAgain was installed to default place. If not, you will have to adjust path to BornAgain Python example accordingly.

{{% alert theme="info" %}}
`Little hint:` while typing long commands in command shell you can push `TAB` keyboard key - the Windows will help with long directory names.
{{% /alert %}}

This kind of manual launching is not very convenient for regular usage and should be considered rather as yet another validation step.

### Running BornAgain examples using VSCode editor

To start BornAgain scripts in convenient manner, one have to use one of Python integrated development environments (Spyder, PyCharm, VSCode). 
Our own choice is to use VSCode - light weighted by powerful community editor from Microsoft. 

To run VSCode editor one have to start it using `Anaconda navigator`. Start `Anaconda navigator` from Windows start menu, and then start `VSCode` editor from
the navigator.

{{< figscg src="anaconda-running-step4.PNG" class="center" width="450px">}}

Anaconda navigator is important component of Anaconda eco-system. In given example it is not only starts `VSCode` editor, but also defines correct environment variables to make `VSCode` correctly working in `conda` environment.

{{% alert theme="info" %}}
`Little hint:` always use `Anaconda navigator` to start `VSCode` in correct environment.
{{% /alert %}}

### Add BornAgain examples to VSCode

By default, `VSCode` editor opens a welcome screen. 
Add a folder with BornAgain Python examples to a workspace
by clicking `Add workspace folder` as shown in screenshot below.

{{< figscg src="anaconda-running-step5-vscode.PNG" class="center" width="450px">}}

Choose directory with BornAgain python examples at `C:/BornAgain-{{< release-string >}}/Examples/python`

{{< figscg src="anaconda-running-step6-vscode.PNG" class="center" width="450px">}}

Choose any example and run it in terminal using the right mouse button.

{{< figscg src="anaconda-running-step7-vscode.PNG" class="center" width="450px">}}

Script will be executed in terminal embedded in `VSCode`, scattering image will appear on the screen after simulation is complete.

{{< figscg src="anaconda-running-step8-vscode.PNG" class="center" width="450px">}}

### Troubleshooting

If you are experiencing problem in running BornAgain Python script please make sure, that

+ BornAgain installation version matches Anaconda Python version.
+ You are running BornAgain scripts from Anaconda command prompt.
+ You are running `VSCode` editor from `Anaconda navigator`.
+ You do not have any other Python installed on the system.

### Caveat

Anaconda is a rolling release which allows to switch between various Python versions, update/remove packages using `conda` environment, create isolated Python 
virtual environments and so on. It is also possible to setup powerful Python IDE, like `PyCharm` to work together with Anaconda.
The description of necessary configuration steps goes far beyond this tutorial and interested users are suggested to proceed with
[Anaconda documentation](https://docs.anaconda.com/anaconda/navigator/tutorials).


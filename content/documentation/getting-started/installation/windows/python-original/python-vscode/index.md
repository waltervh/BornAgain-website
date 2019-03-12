+++
title = "VSCode editor"
weight = 10
+++

## VSCode editor

In given tutorial we are explaining, how to run BornAgain Python examples in convenient manner, using `VSCode` editor.
This is a community driven, light weighted and open-source editor from Microsoft, which provides code highlight for many languages and
can be extremely handy in any kind of script-related and code-related activity.

### Download and install VSCode

Download editor from [official website](https://code.visualstudio.com).

{{< figscg src="python-code-step0.PNG" class="center" width="450px" caption="Download installer">}}

{{< figscg src="python-code-step1.PNG" class="center" width="450px" caption="Run installer as normal">}}


### Add BornAgain examples to VSCode

Start `VSCode` and you will find yourself  on welcome screen.

Add a folder with BornAgain Python examples to a workspace
by clicking `Add workspace folder` as shown in screenshot below.

{{< figscg src="../../python-anaconda/anaconda-running-step5-vscode.PNG" class="center" width="450px">}}

Choose directory with BornAgain Python examples at `C:/BornAgain-{{< release-string >}}/Examples/python`.
Open any example, `VSCode` will require to configure Python interpreter to use. In screenshot below, `VSCode` is complaining 
that no Python interpreter was selected and also suggests to install so-called `pylint` plugin for better code development experience.

{{< figscg src="python-code-step2.PNG" class="center" width="450px">}}

Click on `Select Python Interpreter` and select the interpreter you have installed previously. Install `pylint` too.
On screenshot below `VSCode` is fully configured and ready for work.

{{< figscg src="python-code-step3.PNG" class="center" width="450px">}}

Finally you can run example using the right mouse button.

{{< figscg src="../../python-anaconda/anaconda-running-step7-vscode.PNG" class="center" width="450px">}}

Script will be executed in terminal embedded in `VSCode`, scattering image will appear on the screen after simulation is complete.

{{< figscg src="../../python-anaconda/anaconda-running-step8-vscode.PNG" class="center" width="450px">}}

Now you can select other BornAgain Python examples, run them one-by-one and so start your exciting journey in Python scripting with BornAgain.


+++
title = "Python troubleshooting"
weight = 30
+++

## Python troubleshooting

When BornAgain is installed on the system, its library directory is automatically added to `PYTHONPATH` environment directory.

{{< figscg src="python-troubleshooting1.png" class="center" width="450px">}}

This make possible to use `import bornagain` statement in any Python script and run this script using Python interpreter installed on the system.

Sometimes this process can fail. The following checklist can be useful to tackle the source of the problem.

* [How many Python's you have installed on the system?]({{% relref "#how-many-python" %}})
* [Does Python interpreter version matches BornAgain installation?]({{% relref "#does-interpreter-match" %}})
* [Are you using Anaconda installation?]({{% relref "#is-anaconda" %}})
* [Are you using native Python installation?]({{% relref "#is-native-python" %}})

<hr>

#### How many Python's you have installed on the system? 
{{% anchor "how-many-python" %}}

Please note, that having more than one Python interpreter installed on the system is potentially error prone and requires lots of skill from the user 
to manage they co-existence. If you have more than one Python, please consider uninstalling all of them but one.

<hr>

#### Does Python interpreter version matches BornAgain installation?
{{% anchor "does-interpreter-match" %}}

BornAgain is a `64-bit` application and requires `64-bit` Python installed on the system. Additionally, you can't use BornAgain intended for Python
{{% recommended-python %}} together with older Python 2.7.
Please make sure, that Python version number, as specified
in BornAgain installer name (e.g. `{{% installer-win-name "3.7" %}}`),
matches Python installation on a system.

<hr>

#### Are you using Anaconda installation?
{{% anchor "is-anaconda" %}}

If you have installed Python using Anaconda installer, please make sure that you are using `Anaconda command prompt`, `Anaconda navigator` and
can run BornAgain scripts from command line, as explained in 
[Install Python with Anaconda installer]({{% relref "documentation/getting-started/installation/windows/python-anaconda" %}}).

<hr>

#### Are you using native Python installation?
{{% anchor "is-native-python" %}}

If you have installed Python manually using native installer, can you actually run it from `Windows command prompt`, as explained in
[Install Python with Anaconda installer]({{% relref "documentation/getting-started/installation/windows/python-original" %}})?






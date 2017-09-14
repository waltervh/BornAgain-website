+++
title = "Python code embedded"
weight = 40
+++

This tutorial explains how to embed Python code from a script, located in certain directory.

{{% highlightfile file="/content/static/code_snippet.py" language="python" %}}

{{< prettify python >}}
class Base:
    """
    Base class
    """
    def __init__(self):
        self.x = None
        self.y = numpy.sin(numpy.pi/2.0)

    def value(self):
        return self.y
{{< /prettify >}}
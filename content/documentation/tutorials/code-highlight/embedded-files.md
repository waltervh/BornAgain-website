+++
title = "Python code embedded"
weight = 20
+++

This tutorial explains how to embed Python code from a script, located in certain directory.

#### Highlight the file located in static directory

{{% highlightfile file="/static/files/code_snippet.py" language="python" %}}

#### Highlight the file located in static directory (line numbers)

{{< highlight python "linenos=table,hl_lines=5">}}
{{< readfile file="/static/files/code_snippet.py">}}
{{< /highlight >}}

#### Highlight the file from local directory (Not possible)

{{< highlight python "linenos=table,hl_lines=5">}}
{{< readfile file="another_code_snippet.py">}}
{{< /highlight >}}


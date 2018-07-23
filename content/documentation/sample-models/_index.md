+++
title = "Sample model reference"
weight = 50
+++

## Sample model reference

This section presents BornAgain simulations of various model systems. All Python scripts are shipped with BornAgain. They can be found in the "Examples" directory:

<!-- Nav tabs -->
<ul class="nav nav-tabs" id="OperationSystemTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#Windows" role="tab" aria-controls="windows" aria-selected="true">Windows</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#MacOS" role="tab" aria-controls="macos" aria-selected="false">MacOS</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="messages-tab" data-toggle="tab" href="#Linux" role="tab" aria-controls="linux" aria-selected="false">Linux</a>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content id="OperationSystemTabContent">
  <div class="tab-pane active" id="Windows" role="tabpanel" aria-labelledby="windows-tab">
    <p><pre><code>C:\BornAgain-{{< release-string >}}\Examples\python</code></pre></p>
  </div>
  <div class="tab-pane" id="MacOS" role="tabpanel" aria-labelledby="macos-tab">
    <p><pre><code>/Applications/BornAgain.app/Contents/share/BornAgain-{{< release-string-short >}}/Examples/python</code></pre></p>  
  </div>
  <div class="tab-pane" id="Linux" role="tabpanel" aria-labelledby="linux-tab">
    <p><pre><code>install_dir/share/BornAgain-{{< release-string-short >}}/Examples/python</code></pre></p>  
  </div>
</div>


###### The examples are subdivided into the following categories:
{{% children %}}

#### Embedded particles

{{% examples-preview "documentation/sample-models/embedded-particles" %}}

#### Layered structures

{{% examples-preview "documentation/sample-models/layered-structures" %}}

#### Interference functions

{{% examples-preview "documentation/sample-models/interference-functions" %}}

#### Complex shapes

{{% examples-preview "documentation/sample-models/complex-shapes" %}}

#### Beam and detector

{{% examples-preview "documentation/sample-models/beam-and-detector" %}}

#### Reflectometry

{{% examples-preview "documentation/sample-models/reflectometry" %}}

#### Fitting

{{% examples-preview "documentation/sample-models/fitting" %}}

#### Miscellaneous

{{% examples-preview "documentation/sample-models/miscellaneous" %}}

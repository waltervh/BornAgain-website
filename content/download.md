+++
title = "Download"
menu = "main"
weight = 30
breadcrumb = true
+++

<div class="container page-download">
  <div class="row">
    <div class="col-lg-10 mx-auto">
    <h5> Current release {{% release-string %}}</h5>
    <p> View changes made in <a href="{{% last-release-letter %}}">this release</a> </p>
    </div>
  </div>
  <hr class="feature-divider">
  <div class="row">
    <div class="col-lg-10 mx-auto mt-1 mb-5">
    <p class ="text-sm-center font-italic">
      BornAgain is supported under Windows, Mac OS X and Linux operating systems. For Windows and MacOS we provide binary installer packages, both for Python2 and Python3. For Unix-like operating systems (including Linux and Mac OS X) we support installation from source.
    </p>
  <hr class="feature-divider">
    <p>Use links below to download the appropriate package. Previous versions are available <a href="{{% download-loc %}} " onclick="ga('send', 'event', 'download', 'click', 'previous-ver');">here<a>.</p>
    </div>
  </div>
  

<!-- Nav tabs -->
<ul class="nav nav-tabs nav-pills nav-fill " id="OperationSystemTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link" id="home-tab" data-toggle="tab" href="#Windows" role="tab" aria-controls="home" aria-selected="true">Windows</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#MacOS" role="tab" aria-controls="profile" aria-selected="false">MacOS</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="messages-tab" data-toggle="tab" href="#Linux" role="tab" aria-controls="messages" aria-selected="false">Linux</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="messages-tab" data-toggle="tab" href="#Manual" role="tab" aria-controls="messages" aria-selected="false">Manual</a>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content" id="OperationSystemTabContent">
  <div class="tab-pane fade" id="Windows" role="tabpanel" aria-labelledby="profile-tab">  
    <div class="d-flex flex-column flex-md-row justify-content-center">
      <div class="card text-center bg-light mx-3 my-5 border-primary ba-custom-border" style="width: 18rem;">        
        <div class="card-header">Windows, 64-bit (x86)</div>
        <div class="card-body">
          <h5 class="card-title">Windows, Python3</h5>
          <p><span class="badge badge-primary mr-1">Recommended</span></p>
          <p class="card-text">Windows 7,8,10 binary installer package, intended for Python3.</p>
          <a href="{{% ref-installer-win-py3 %}}" onclick="ga('send', 'event', 'download', 'click', 'win-py3');" class="btn btn-primary ba-custom">Download</a>
        </div>
      </div>
      <div class="card text-center bg-light mx-3 my-5 border-secondary" style="width: 18rem;">        
        <div class="card-header">Windows, 64-bit (x86)</div>
        <div class="card-body">
          <h5 class="card-title">Windows, Python2</h5>
          <p><span class="badge badge-default mr-1">Obsolete</span></p>
          <p class="card-text">Windows 7,8,10 binary installer package, intended for Python2.</p>
          <a href="{{% ref-installer-win-py2 %}}" onclick="ga('send', 'event', 'download', 'click', 'win-py2');" class="btn btn-secondary">Download</a>
        </div>
      </div>      
    </div>
  </div>

  <div class="tab-pane fade" id="MacOS" role="tabpanel" aria-labelledby="profile-tab">
    <div class="d-flex flex-column flex-md-row justify-content-center">
      <div class="card text-center bg-light mx-3 my-5 border-primary ba-custom-border" style="width: 22rem;">        
        <div class="card-header">MacOS, 64-bit (x86)</div>
        <div class="card-body">
          <h5 class="card-title">MacOS, Python3</h5>
          <p><span class="badge badge-primary mr-1">Recommended</span></p>
          <p class="card-text">MacOS 10.10 (Yosemite), suitable for 10.11 (El Capitan), 10.12 (Sierra) and 10.13 (High Sierra).</p>
          <a href="{{% ref-installer-mac-py3 %}}" onclick="ga('send', 'event', 'download', 'click', 'mac-py3')" class="btn btn-primary ba-custom">Download</a>
        </div>
      </div>
      <div class="card text-center bg-light mx-3 my-5 border-secondary" style="width: 22rem;">        
        <div class="card-header">MacOS, 64-bit (x86)</div>
        <div class="card-body">
          <h5 class="card-title">MacOS, Python2</h5>
          <p><span class="badge badge-default mr-1">Obsolete</span></p>
          <p class="card-text">MacOS 10.10 (Yosemite), suitable for 10.11 (El Capitan), 10.12 (Sierra) and 10.13 (High Sierra).</p>
          <a href="{{% ref-installer-mac-py2 %}}" onclick="ga('send', 'event', 'download', 'click', 'mac-py2');" class="btn btn-secondary">Download</a>
        </div>
      </div>      
    </div>
  </div>
  
  <div class="tab-pane fade" id="Linux" role="tabpanel" aria-labelledby="messages-tab">
    <div class="d-flex flex-column flex-md-row justify-content-center">
      <div class="card text-center bg-light mx-5 my-5 border-primary ba-custom-border" style="width: 80%;">        
        <div class="card-header">Get source code</div>
        <div class="card-body">
          <h5 class="card-title">Clone Git repository</h5>
          <p>
          <pre><code>{{% git-clone %}}</code></pre>
          </p>
          <h5 class="card-title">or</h5>
          <a href="{{% ref-tarball %}}" onclick="ga('send', 'event', 'download', 'click', 'tarball');" class="btn btn-primary ba-custom">Download tarball</a>
        </div>
      </div>
    </div>
  </div>

  <div class="tab-pane fade" id="Manual" role="tabpanel" aria-labelledby="messages-tab">
    <div class="d-flex flex-column flex-md-row justify-content-center">
      <div class="card text-center bg-light mx-3 my-5 border-primary ba-custom-border" style="width: 22rem;">        
        <div class="card-header">Manual</div>
        <div class="card-body">
          <h5 class="card-title">Manual, pdf</h5>
          <a href="{{% ref-manual %}}" onclick="ga('send', 'event', 'download', 'click', 'manual');" class="btn btn-primary ba-custom">Download</a>
        </div>
      </div>
    </div>  
  </div>

</div>

  <hr class="feature-divider">
  <div class="row">
    <div class="col-lg-10 mx-auto mt-2">
      To use BornAgain from Python you have to have Python interpreter installed.
      See {{< local-link "documentation/getting-started/installation">}} installation instructions {{< /local-link >}}for more details.
    </div>
  </div>

  </div>

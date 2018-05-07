+++
title = "Install the third party software"
weight = 10
+++

### Install the third party software

#### Required software

* `Compiler with C++-14 support (i.e. gcc>= 4.9)`
* `cmake (>= 3.1)`
* `boost library (>= 1.48)`
* `eigen3 (>= 2.91.0)`
* `fftw3 library (>= 3.3.1)`
* `gsl (GNU scientific library, >= 1.15)`
* `libtiff library (>=4.0.2)`
* `python3, python3-devel, python3-numpy, python3-matplotlib`
* `Qt5 (>=5.4)`

All required packages can be easily installed on most Linux distributions using the system's package manager. Below are a few examples for several selected operating systems. Please note, that other distributions (Fedora, Mint, etc) may have different commands for invoking the package manager and slightly different names of packages (like boost instead of libboost etc). Besides that, the installation should be very similar.

<!-- Nav tabs -->
<ul class="nav nav-tabs" id="OperationSystemTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#Ubuntu" role="tab" aria-controls="ubuntu" aria-selected="true">Ubuntu/Debian</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#OpenSuse" role="tab" aria-controls="opensuse" aria-selected="false">OpenSuse</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="messages-tab" data-toggle="tab" href="#CentOS" role="tab" aria-controls="centos" aria-selected="false">CentOS/Redhat</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="messages-tab" data-toggle="tab" href="#MacOS" role="tab" aria-controls="macos" aria-selected="false">MacOS</a>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content id="OperationSystemTabContent">
  <div class="tab-pane active" id="Ubuntu" role="tabpanel" aria-labelledby="ubuntu-tab">
    <p><pre><code># Install required packages
    $ sudo apt-get install build-essential git cmake libgsl-dev libboost-all-dev \
      libfftw3-dev python3 python3-dev python3-numpy python3-matplotlib libtiff5-dev</code></pre></p>
    <p><pre><code># Install Qt5
    $ sudo apt-get install qt5-default libqt5designercomponents5 qttools5-dev \
      libqt5svg5-dev</code></pre></p>
  </div>
  <div class="tab-pane" id="OpenSuse" role="tabpanel" aria-labelledby="opensuse-tab">
    <p><pre><code>/Applications/BornAgain.app/Contents/share/BornAgain-{{< release-string-short >}}/Examples/python</code></pre></p>  
  </div>
  <div class="tab-pane" id="CentOS" role="tabpanel" aria-labelledby="centos-tab">
    <p><pre><code>install_dir/share/BornAgain-{{< release-string-short >}}/Examples/python</code></pre></p>  
  </div>
  <div class="tab-pane" id="MacOS" role="tabpanel" aria-labelledby="macos-tab">
    <p><pre><code>install_dir/share/BornAgain-{{< release-string-short >}}/Examples/python</code></pre></p>  
  </div>
</div>

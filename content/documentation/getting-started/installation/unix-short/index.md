+++
title = "Installation on Unix (short version)"
weight = 31
+++

### Installation on Unix (short version)

This page shortly explains how to build and install BornAgain from source on Unix platforms.

#### Install third party software

* `Compiler with C++-11 full support (i.e. gcc>= 4.9)`
* `cmake (>= 2.8.11)`
* `boost library (>= 1.48)`
* `eigen3 (>= 2.91.0)`
* `fftw3 library (>= 3.3.1)`
* `gsl (GNU scientific library, >= 1.15)`
* `libtiff library (>=4.0.2)`
* `python-2.7, python-devel, python-numpy-devel`
* `Qt5 (>=5.4)`
* `libyaml-cpp (>=0.5)`

#### Get the source

Download the BornAgain source [tarball](http://apps.jcns.fz-juelich.de/src/BornAgain/BornAgain-1.10.0.tar.gz) or use the following git repository
  
```
$ git clone https://github.com/scgmlz/BornAgain.git
```

#### Build and install the framework

```
$ mkdir <build_dir>; cd <build_dir>;
$ cmake -DCMAKE_INSTALL_PREFIX=<install_dir> <source_dir>
$ make -j4
$ ctest -j4
$ make install 
```

#### For Python3

```
$ cmake -DBORNAGAIN_USE_PYTHON3=ON -DCMAKE_INSTALL_PREFIX=<install_dir> <source_dir>
```

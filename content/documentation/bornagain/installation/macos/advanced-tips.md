+++
title = "MacOS advanced tips"
weight = 21
+++

### MacOS advanced tips

#### Installing BornAgain python core libraries to the custom folder

If your prefer to install the BornAgain core libraries not to the site-packages folder of your Python interpreter, but to some custom folder, you can do it in a following way.

* Run the `bornagain_install_python.py` script from application bundle:

```
$ python /Applications/BornAgain.app/Contents/libexec/BornAgain-1.10/bornagain_python_install.py
```

* Choose the option '[0]' - Generate bundle with BornAgain libraries, do not install it. 
You will get a message:

```
...
BornAgain Python bundle is successfully created in temporary directory 
'/var/folders/zt/0l4f_l_d46v5rkx668jqx0b4000lw7/T/bornagain_bundle'
...
```

* Go to the specified directory, pay attention that on your system name of this directory may differ from the name in this instruction.

```
$ cd /var/folders/zt/0l4f_l_d46v5rkx668jqx0b4000lw7/T/bornagain_bundle
```

* Set the environment variable `PYTHONUSERBASE` to the directory where you want BornAgain libraries to be installed:

```
$ export PYTHONUSERBASE=/Users/me/my_python_extra
```

* Run the `setup.py` to install the BornAgain core libraries to the specified folder

```
$ python setup.py install --user
```

* Check that the installation went successfully by typing

```
$ python -c "import bornagain"
```

You need to pay attention that the `PYTHONUSERBASE` environment variable is allways defined when you run your python scripts. You may also insert  corresponding export directive  into your `.profile` configuration file:

```
export PYTHONUSERBASE=/Users/me/my_python_extra
```

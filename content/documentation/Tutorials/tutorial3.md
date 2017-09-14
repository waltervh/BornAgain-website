+++
title = "Python code highlighted"
weight = 30
+++

This tutorial explains, how to insert Python snippets in the text with and without line numbering.

#### Python code highlight basics

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 

{{< highlight python >}}

import sys
import numpy


class Base:
    """
    Base class
    """
    def __init__(self):
        self.x = None
        self.y = numpy.sin(numpy.pi/2.0)

    def value(self):
        return self.y


def say_hello():
    """
    Prints 'Hello World' message
    """
    b = Base()
    print("Hello World", b.value())


if __name__ == '__main__':
    say_hello()

{{< /highlight >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 


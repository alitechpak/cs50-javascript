<style>
    code {
        color: rgb(235, 0, 0);
    }

</style>
Python3
===================

![Python](../images/python.png)
*   Python is a very powerful and widely-used language that will allow us to quickly build faily complicated web applications.
*   These notes are about Python3, although Python2 is still in use in some places.

### `print` function

*   Let's start with Hello, world.

```py
print("Hello, world!")
```
*   `print` **function** is built in to the python language, that takes an **argument** in the parentheses, and displays that argument on the command line.
---
*   To actually write and run this program on your computers,
    *   you’ll first type this line into your text editor of choice,
    *   and then save the file as `something.py`.
    *   Next, you’ll head over to your terminal,
        *   navigate to the directory containing your file,
        *   and type `python something.py`.
    *   In the case of the above program, the words “Hello, world!” will then be displayed in the terminal.
*   Depending on how your computer is set up, you may have to type `python3` instead of `python` before the file name, and you may even have to [download Python](https://www.python.org/downloads/) if you haven’t already. After installing Python, we recommend that you also [download Pip](https://pip.pypa.io/en/stable/installing/), as you’ll need that later.
*   When you type `python file.py` in your terminal, a program called an **interpreter**, which you downloaded together with Python, reads through your file line by line, and executes each line of the code. This is different than languages like **C** or **Java**, which need to be **compiled** into machine code before they can be run.

##  Variables
*   Variables are containers for storing data values, the syntax looks like this;
```py
a = 28
b = 1.5
c = "Hello!"
d = True
e = None
```

Unlike in some other programming languages, Python variable types are inferred, meaning that while each variable does have a type, we do not have to explicitly state which type it is when we create the variable.
*   Some of the most common variable types are:

    *   __int__: An integer
    *   __float__: A decimal number
    *   __chr__: A single character
    *   __str__: A string, or sequence of characters
    *   __bol__: A value that is either `True` or `False`
    *   __NoneType__: A special value (`None`) indicating the absence of a value

##  Formatting Strings
*   In the latest versions of python, there are easier ways to work with strings, known as [formatted strings](https://realpython.com/python-f-strings/), or **f-strings** for short.
*   Simply add and `f` before the quotation marks. For example.
```py
name = input("Name: ")
print("Hello, " + name) # Old style
print(f"Hello, {name}") # Latest style
```

##  Conditions
*   Python gives us the ability to run different segments of code based on different [conditions](https://realpython.com/python-conditional-statements/). For example
```py
num = input("Number: ")
if num > 0:
    print("Number is positive")
elif num < 0:
    print("Number is negative")
else:
    print("Number is 0")
```
>   __Note__: Indentation is required as part of the Python syntax.

*   However, when we run this program, we run into an [exception](https://docs.python.org/3/tutorial/errors.html) that looks like this:
```Term
Number: 2
Traceback (most recent call last):
  File "practice.py", line 2, in <module>
    if num > 0:
TypeError: '>' not supported between instances of 'str' and 'int'
```

### [exception](https://docs.python.org/3/tutorial/errors.html)
*   An exception is what happens when an error occurs while we're running our python code.
*   Let's look a bit more closely at this specific exception: If we look at the bottom, we'll see that we ran into a `TypeError`, which generally means Python expected a certain variable to be of one type, but found it to be of another type. In this case, the exception tells us that we cannot use the `>` symbol to compare a `str` and `int`, and then above we can see that this comparison occurs in line 2.
*   In this case, it's obvious that `0` is an integer, so it must be the case that our `num` variable is a string. This is happening because it turns out that the `input` function always returns a string, and we have to specify that it should be turned into (or **cast** into) and integer using the `int` function. This means our first line would now look like:
```py
num = int(input("Number: "))
```
*   Now, the program will work just as we intended!

##  Sequences
There are several types of sequences that are similar in some ways, but different in others. When explaining those differences, we'll use the terms **mutable/immutable** and **ordered/unordered**.
*   __Mutable__ means that once a sequence has been defined, we can change individual elements of that sequence.
*   __Ordered__ means that the order of the objects matters.

### Strings
-   **Ordered**: Yes
-   **Mutable**: No
-   String is a sequence of characters.
    -   We can access individual elements within the string! For example
```py
name = "Harry"
print(name[0])
```
prints out the first (or index-0) character in the string which is `H`.

### [Lists](https://www.w3schools.com/python/python_lists.asp)
-   **Ordered**: Yes
-   **Mutable**: Yes
-   A [Python list](https://www.w3schools.com/python/python_lists.asp) allows you to store any variable types.

```py
#   This is a Python comment
names = ["Harry", "Ron", "Hermione"]

#   Print the entire list:
print(names)

#   Print the second element of the list:
print(names[1])

#   Add a new name to the list:
names.append("Draco")

#   Sort the list:
names.sort()

#   Print the new list:
print(names)
```

### Tuples
-   **Ordered**: Yes
-   **Mutable**: No
-   [Tuples](https://www.w3schools.com/python/python_tuples.asp) are generally used when you need to store just two or three values together, such as the x and y values for a point. In Python code, we use parenthesis:
```py
point = (12.5, 10.6)
```

### Sets
-   **Ordered**: No
-   **Mutable**: N/A
-   [Sets](https://www.w3schools.com/python/python_sets.asp) are different from lists and tuples.

```py
#   Create an empty set:
s = set()

#   Add some elements:
s.add(1)
s.add(2)
s.add(3)
s.add(4)
s.add(3)
s.add(1)

#   Remove 2 from the set
s.remove(2)

#   Print the set:
print(s)

#   Find the size of the set:
print(f"The set has {len(s)} elements.")

"""This is a python multi-line comment:
Output:
{1, 3, 4}
The set has 3 elements.
"""
```

### Dictionaries
-   **Ordered**: No
-   **Mutable**: Yes
-   [Python Dictionaries](https://www.w3schools.com/python/python_dictionaries.asp) or `dict`, is a set of **key-value pairs**, where each key has a corresponding value, just like in a dictionary, each word (the key) has a corresponding definition (the value).

```py
#   Define a dictionary
houses = {"Harry": "Gryffindor", "Draco": "Slytherin"}

#   Print out Harry's house
print(houses["Harry"])

#   Adding values to a dictionary:
houses["Hermione"] = "Gryffindor"

#   Print out Hermione's House:
print(houses["Hermione"])

"""Output:
Gryffindor
Gryffindor
"""
```

### Loops
There are tow main forms: [for loops](https://www.w3schools.com/python/python_for_loops.asp) and [while loops](https://www.w3schools.com/python/python_while_loops.asp)
*   For loops are used to iterate over a sequence of elements, performing some block of code.

```py
for i in [0, 1, 2, 3, 4, 5]:
    print(i)

""" Output:
0
1
2
3
4
5
"""
```
*   We can condense this code using the python `range` function, which allows us to easily get a sequence of numbers.

```py
for i in range(6):
    print(i)

""" Output:
0
1
2
3
4
5
"""
```
*   This type of loop can work for any sequence!

```py
#   Create a list:
names = ["Harry", "Ron", "Hermione"]

#   Print each name:
for name in names:
    print(name)

""" Output:
Harry
Ron
Hermione
"""
```
*   We can get even more specific and loop through each character

```py
name = "Harry"
for char in name:
    print(char)

""" Output:
H
a
r
r
y
"""
```

### Functions
Write a function

```py
def square(x):
    return x * x
```

`def` keyword defines a function, that it takes a single input called `x` and that it uses `return` keyword for output.

<br>
We can then "call" this function just as we've called other ones: using parentheses:

```py
for i in range(10):
    print(f"The square of {i} is {square(i)}")

""" Output:
The square of 0 is 0
The square of 1 is 1
The square of 2 is 4
The square of 3 is 9
The square of 4 is 16
The square of 5 is 25
The square of 6 is 36
The square of 7 is 49
The square of 8 is 64
The square of 9 is 81
"""
```

### Modules
As our projects get larger and larger, it will become useful to be able to write functions in one file and run them in another. In the case above, we could create on file called `functions.py` with the code:

```py
def square(x):
    return x * x
```
And another file called `square.py` with the code:

```py
for i in range(10):
    print(f"The square of {i} is {square(i)}")
```
Python files don't know about each other, so we have to explicitly `import` the square function from the `functions` **module** we just wrote.
`square.py` looks like this:

```py
from functions import square

for i in range(10):
    print(f"The square of {i} is {square(i)}")
```
Alternatively, we can choose to import the entire `functions` module and then use dot notation to access the `square` function:

```py
import functions

for i in range(10):
    print(f"The square of {i} is {functions.square(i)}")
```
There are many built-in Python modules we can import such as `math` or `csv` that give us access to even more functions. Additionally, we can download even more Modules to access even more functionality! i.e. `Django` Module etc.

##  Object-Oriented Programming
[Object Oriented Programming](https://en.wikipedia.org/wiki/Object-oriented_programming) is a programming paradigm, or a way of thinking about programming, that is centered around objects that can store information and perform actions. <br>

**`Classes`**: A [Python Class](https://www.w3schools.com/python/python_classes.asp) is essentially a template for a **new type of object** that can **store information** and **perform actions**.

```py
class Point():
    #   A method defining how to create a point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

p = Point(2, 8)
print(p.x)
print(p.y)

""" Output:
2
8
"""
```
*   We use the keyword `self` to represent the object we are currently working with. `self` should be the first argument for any method within a Python class. <br>

Now, let's see how we can actually use the class from above to create an object:

****************************

Now, let's look at a more interesting example where instead of storing just the coordinates of a Point, we create a class represents an airline flight:

```py
class Flight():
    #   Method to create new flight with givin capacity
    def __init__(self, capacity):
        self.capacity = capacity
        self.passengers = []

    #   Method to add a passenger to the flight:
    def add_passenger(self, name):
        self.passengers.append(name)
```
However, this class is flawed because while we set a capacity, we could still add too many passengers. let's augment it so that before adding a passenger we check to see if there is room on the flight:

```py
class Flight():
    #   Method to create new flight with given capacity
    def __init__(self, capacity):
        self.capacity = capacity
        self.passengers = []

    #   Method to add a passenger to the flight:
    def add_passenger(self, name):
        if not self.open_seats():
            return False
        self.passengers.append(name)
        return True

    #   Method to return number of open seats
    def open_seats(self):
        return self.capacity - len(self.passengers)

#   Create a new flight with 0 up to 3 passengers
flight = Flight(3)

#   Create a list of people
people = ["Harry", "Ron", "Hermione", "Ginny"]

#   Attempt to add each person in the list to a flight
for person in people:
    if flight.add_passenger(person):
        print(f"Added {person} to flight successfully")
    else:
        print(f"No available seats for {person}")


""" Output:
Added Harry to flight successfully
Added Ron to flight successfully
Added Hermione to flight successfully
No availabel seats for Ginny
"""
```

Note that above, we use the line `if not self.open_seats()` to determine whether or not there are open seats. This works because in Python, the number **0** can be interpretted as meaning `False`, and we can also use the keyword `not` to signify the opposite of the following statement so `not True` is `False` and `not False` is `True`. Therefore, if `open_seats` returns 0, the entire expression will evaluate to `True`


##  Functional Programming
Python also supports the [Functional Programming Paradigm](https://en.wikipedia.org/wiki/Functional_programming), in which functions are treated as values just like any other variable.

### Decorators
One thing made possible by functional programming is the idea of a decorator, which is a higher-order function that can modify another function. For example, let's write a decorator that announces when a function is about to begin, and when it ends. We can then apply this decorator using an `@` symbol.

```py
def announce(f):
    def wrapper():
        print("About to run the function...")
        f()
        print("Done with the function")
    return wrapper

@announce
def hello():
    print("Hello, world!")

hello()

""" Output:
About to run the function...
Hello, world!
Done with the function
"""
```

### Lambda Functions
Lambda functions provide another way to create functions in python. For example, if we want to define the same `square` function we did earlier, we can write:

```py
square = lambda x: x * x
```
Where the input is to the left of the `:` and dthe output is on the right. <br>

This can be useful when we don't want to write a whole separate function for a single, small use. For example, if we want to sort some objects where it's not clear at first how to sort them. Imagine we have a list of people, but with names and houses instead of just names that we wish to sort:

```py
people = [
    {"name": "Harry", "house": "Gryffindor"},
    {"name": "Cho", "house": "Ravenclaw"},
    {"name": "Draco", "house": "Slytherin"}
]

people.sort()

print(people)
```
This, however, leaves us with the error:

```terminal
Traceback (most recent call last):
  File "practice.py", line 7, in <module>
    people.sort()
TypeError: '<' not supported between instances of 'dict' and 'dict'
```
Which occurs because Python doesn't know how to compare two Dictionaries to check one is less than the other. <br>

We can solve this problem by including a `key` argument to the sort function, which specifies which part of the dictionary we wish to use to sort:

```py
people = [
    {"name": "Harry", "house": "Gryffindor"},
    {"name": "Cho", "house": "Ravenclaw"},
    {"name": "Draco", "house": "Slytherin"}
]

def f(person):
    return person["name"]

people.sort(key=f)

print(people)

""" Output:
[{'name': 'Cho', 'house': 'Ravenclaw'}, {'name': 'Draco', 'house': 'Slytherin'},
 {'name': 'Harry', 'house': 'Gryffindor'}]
"""
```
While this does work, we've had to write an entire function that we're only using once, we can make our code more readable by using a lambda function:

```py
people = [
    {"name": "Harry", "house": "Gryffindor"},
    {"name": "Cho", "house": "Ravenclaw"},
    {"name": "Draco", "house": "Slytherin"}
]

people.sort(key=lambda person: person["name"])

print(people)

""" Output:
[{'name': 'Cho', 'house': 'Ravenclaw'}, {'name': 'Draco', 'house': 'Slytherin'},
 {'name': 'Harry', 'house': 'Gryffindor'}]
"""
```

##  Exceptions
In the following chunk of code, we'll take two integers from the user, and attempt to divide them:

```py
x = int(input("x: "))
y = int(input("y: "))

result = x / y

print(f"{x} / {y} = {result} ")
```
In many cases, this program works well:

```terminal
x: 5
y: 2
5 / 2 = 2.5
```
However, we'll into problems when we attempt to divide by 0:

```Terminal
x: 5
y: 0
Traceback (most recent call last):
  File "exceptions.py", line 4, in <module>
    result = x / y
ZeroDivisionError: division by zero
```
We can deal with this messy error using [Exception Handling](https://www.w3schools.com/python/python_try_except.asp). In the following block of code, we will `try` to divide the two numbers, `except` when we get a `ZeroDivisionError`:

```py
import sys

x = int(input("x: "))
y = int(input("y: "))

try:
    result = x / y
except ZeroDivisionError:
    print("Error: cannot divide by 0.")
    #   Exit the program
    sys.exit(1)

print(f"{x} / {y} = {result}")

""" Output:
x: 5
y: 0
Error: cannot divide by 0.
"""
```
However, we still run into an error when the user enters non-numbers for x and y:

```Terminal
x: hello
Traceback (most recent call last):
  File "exceptions.py", line 3, in <module>
    x = int(input("x: "))
ValueError: invalid literal for int() with base 10: 'hello'
```
We can solve this problem in a similar manner!

```py
import sys

try:
    x = int(input("x: "))
    y = int(input("y: "))
except:
    print("Error: Invalid input")
    sys.exit(1)

try:
    result = x / y
except ZeroDivisionError:
    print("Error: cannot divide by 0.")
    #   Exit the program
    sys.exit(1)

print(f"{x} / {y} = {result}")
```
Output

```Terminal
x: hello
Error: Invalid input
```

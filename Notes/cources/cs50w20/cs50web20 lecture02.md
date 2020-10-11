



        <div class="container-fluid">

            <div class="row">

                <aside class="col-md">

                    <header>
# [CS50’s Web Programming with Python and JavaScript](../..)

OpenCourseWare


[Brian Yu](https://brianyu.me)  
&#10;[brian@cs.harvard.edu](mailto:brian@cs.harvard.edu)


[David J. Malan](https://cs.harvard.edu/malan/)  
&#10;[malan@harvard.edu](mailto:malan@harvard.edu)  
&#10;[<i class="fab fa-facebook-f"></i>](https://www.facebook.com/dmalan)[<i class="fab fa-github"></i>](https://github.com/dmalan)[<i class="fab fa-instagram"></i>](https://www.instagram.com/davidjmalan/)[<i class="fab fa-linkedin"></i>](https://www.linkedin.com/in/malan/)[<i class="fab fa-quora"></i>](https://www.quora.com/profile/David-J-Malan)[<i class="fab fa-reddit-alien"></i>](https://www.reddit.com/user/davidjmalan)[<i class="fab fa-twitter"></i>](https://twitter.com/davidjmalan)

</header>



                    <button aria-controls="nav" aria-expanded="false" class="btn btn-sm collapsed d-md-none" data-target="aside > nav" data-toggle="collapse">
                        Menu
                    </button>

                    <nav class="collapse d-md-block" id="nav">
- - -



1. [HTML, CSS](../../weeks/0/)

1. [Git](../../weeks/1/)

1. [Python](../../weeks/2/)

1. [Django](../../weeks/3/)

1. [SQL, Models, and Migrations](../../weeks/4/)

1. [JavaScript](../../weeks/5/)

1. [User Interfaces](../../weeks/6/)

1. [Testing, CI/CD](../../weeks/7/)

1. [Scalability and Security](../../weeks/8/)


- - -



- [CS50 Certificate](../../certificate/)

- [FAQs](../../faqs/)


- - -



- [Ed Discussion](https://cs50.harvard.edu/web/ed) for Q&amp;A

- [Quick Start Guide](https://us.edstem.org/quickstart/ed-discussion.pdf)


- - -



- [edX](https://cs50.edx.org/web)

- [iTunes U](https://itunes.apple.com/us/course/id1505432709)

- [YouTube](https://www.youtube.com/playlist?list=PLhQjrBD2T380xvFSUmToMMzERZ3qB5Ueu)


- - -



- [Changelog](https://cs50.noticeable.io/)

- [Status Page](https://cs50.statuspage.io/)


- - -



-

    [Communities](../../communities/)





- [Discord](https://discord.gg/cs50)

- [Facebook Group](https://www.facebook.com/groups/cs50/)

- [Facebook Page](https://www.facebook.com/cs50/)

- [GitHub](https://github.com/cs50)

- [Gitter](https://gitter.im/cs50/x)

- [Instagram](https://instagram.com/cs50)

- [LinkedIn Group](https://www.linkedin.com/groups/7437240/)

- [LinkedIn Page](https://www.linkedin.com/school/CS50/)

- [Quora](https://www.quora.com/topic/CS50)

- [Slack](https://cs50.edx.org/slack)

- [Snapchat](https://www.snapchat.com/add/cs50)

- [Twitter](https://twitter.com/cs50)

- [YouTube](http://www.youtube.com/subscription_center?add_user=cs50tv)


- - -

[![Harvard Shop](https://i.imgur.com/GGMdcKt.png)](https://cs50.harvardshop.com/)

- - -

[<i class="fab fa-creative-commons mr-1"></i>License](../../license/)

</nav>

                    <footer></footer>

                </aside>

                <main class="col-md markdown-body">

                    # Lecture 2


  - [Introduction](#introduction)
  - [Python](#python)
  - [Variables](#variables)
  - [Formatting Strings](#formatting-strings)
  - [Conditions](#conditions)
  - [Sequences](#sequences)    
                  - [Strings](#strings)
                  - [Lists](#lists)
                  - [Tuples](#tuples)
                  - [Sets](#sets)
                  - [Dictionaries](#dictionaries)
                  - [Loops](#loops)


  - [Functions](#functions)
  - [Modules](#modules)
  - [Object-Oriented Programming](#object-oriented-programming)
  - [Functional Programming](#functional-programming)    
                  - [Decorators](#decorators)
                  - [Lambda Functions](#lambda-functions)


  - [Exceptions](#exceptions)


## Introduction


  - So far, we’ve discussed how to build simple web pages using HTML and CSS, and how to use Git and GitHub in order to keep track of changes to our code and collaborate with others.
  - Today, we’ll dive into Python, one of the two main programming languages we’ll use throughout this course.


## Python

![Python Logo](cs50.web.2020_files/lecture02/python.png)


  -
        Python is a very powerful and widely-used language that will allow us to quickly build fairly complicated web applications. In this course, we’ll be using Python 3, although Python 2 is still in use in some places. When looking at outside resources, be careful to make sure they’re using the same version.

  -
        Let’s start where we start with many programming languages: Hello, world. This program, written in Python, would look like this:



<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">print</span><span class="p">(</span><span class="s">"Hello, world!"</span><span class="p">)</span>
</code></pre></div></div>


  - To break down what’s going on in that line, there is a `print` **function** built in to the python language, that takes an **argument** in parentheses, and displays that argument on the command line.
  - To actually write and run this program on your computers, you’ll first type this line into your text editor of choice, and then save the file as `something.py`. Next, you’ll head over to your terminal, navigate to the directory containing your file, and type `python something.py`. In the case of the above program, the words “Hello, world!” will then be displayed in the terminal.
  - Depending on how your computer is set up, you may have to type `python3` instead of `python` before the file name, and you may even have to [download Python](https://www.python.org/downloads/) if you haven’t already. After installing Python, we recommend that you also [download Pip](https://pip.pypa.io/en/stable/installing/), as you’ll need that later in the course.
  - When you type `python file.py` in your terminal, a program called an **interpreter**, which you downloaded together with Python, reads through your file line by line, and executes each line of the code. This is different than languages like **C** or **Java**, which need to be **compiled** into machine code before they can be run.


## Variables

A key part of any programming language is the ability to create and manipulate variables. In order to assign a value to a variable in Python, the syntax looks like this:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="n">a</span> <span class="o">=</span> <span class="mi">28</span>
<span class="n">b</span> <span class="o">=</span> <span class="mf">1.5</span>
<span class="n">c</span> <span class="o">=</span> <span class="s">"Hello!"</span>
<span class="n">d</span> <span class="o">=</span> <span class="bp">True</span>
<span class="n">e</span> <span class="o">=</span> <span class="bp">None</span>
</code></pre></div></div>

Each of these lines is taking the value to the right of the `=`, and storing it in the variable name to the left.

Unlike in some other programming languages, Python variable types are inferred, meaning that while each variable does have a type, we do not have to explicitly state which type it is when we create the variable. Some of the most common variable types are:

  - **int**: An integer
  - **float**: A decimal number
  - **chr**: A single character
  - **str**: A string, or sequence of characters
  - **bool**: A value that is either `True` or `False`
  - **NoneType**: A special value (`None`) indicating the absence of a value.


Now, we’ll work on writing a more interesting program that can take input from the user and say hello to that user. To do this, we’ll use another built in function called `input` which displays a prompt to the user, and returns whatever the user provides as input. For example, we can write the following in a file called `name.py`:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="n">name</span> <span class="o">=</span> <span class="nb">input</span><span class="p">(</span><span class="s">"Name: "</span><span class="p">)</span>
<span class="k">print</span><span class="p">(</span><span class="s">"Hello, "</span> <span class="o">+</span> <span class="n">name</span><span class="p">)</span>
</code></pre></div></div>

When run on the terminal, this is what the program looks like:

![Hello](cs50.web.2020_files/lecture02/hello.png)

A couple of things to point out here:

  - In the first line, instead of assigning the variable name to an explicit value, we’re assigning it to whatever the `input` function returns.
  - In the second line, we’re using the `+` operator to combine, or **concatenate**, two strings. In python, the `+` operator can be used to add numbers or concatenate strings and lists.


## Formatting Strings


  - While we can use the `+` operator to combine strings as we did above, in the latest versions of python, there are even easier ways to work with strings, known as [formatted strings](https://realpython.com/python-f-strings/), or **f-strings** for short.
  - To indicate that we’re using formatted strings, we simply add an `f` before the quotation marks. For example, instead of using `"Hello, " + name` as we did above, we could write `f"Hello, {name}"` for the same result. We can even plug a function into this string if we want, and turn our program above into the single line:


<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">print</span><span class="p">(</span><span class="s">f"Hello, </span><span class="si">{</span><span class="nb">input</span><span class="p">(</span><span class="s">"Name: "</span><span class="p">)</span><span class="si">}</span><span class="s">"</span><span class="p">)</span>
</code></pre></div></div>

## Conditions


  - Just like in other programming languages, Python gives us the ability to run different segments of code based on different [conditions](https://realpython.com/python-conditional-statements/). For example, in the program below, we’ll change our output depending on the number a user types in:


<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="n">num</span> <span class="o">=</span> <span class="nb">input</span><span class="p">(</span><span class="s">"Number: "</span><span class="p">)</span>
<span class="k">if</span> <span class="n">num</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">:</span>
    <span class="k">print</span><span class="p">(</span><span class="s">"Number is positive"</span><span class="p">)</span>
<span class="k">elif</span> <span class="n">num</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">:</span>
    <span class="k">print</span><span class="p">(</span><span class="s">"Number is negative"</span><span class="p">)</span>
<span class="k">else</span><span class="p">:</span>
    <span class="k">print</span><span class="p">(</span><span class="s">"Number is 0"</span><span class="p">)</span>
</code></pre></div></div>


  - Getting into how the above program works, conditionals in python contain a keyword (`if`, `elif`, or `else`) and then (except in the `else` case) a boolean expression, or an expression that evaluates to either `True` or `False`. Then, all of the code we want to run if a certain expression is true is **indented** directly below the statement. Indentation is required as part of the Python syntax.
  - However, when we run this program, we run into an [exception](https://docs.python.org/3/tutorial/errors.html) that looks like this:


![condition](cs50.web.2020_files/lecture02/cond.png)


  - An exception is what happens when an error occurs while we’re running our python code, and over time you’ll get better and better at interpreting these errors, which is a very valuable skill to have.
  - Let’s look a bit more closely at this specific exception: If we look at the bottom, we’ll see that we ran into a `TypeError`, which generally means Python expected a certain variable to be of one type, but found it to be of another type. In this case, the exception tells us that we cannot use the `&gt;` symbol to compare a `str` and `int`, and then above we can see that this comparison occurs in line 2.
  - In this case, it’s obvious that `0` is an integer, so it must be the case that our `num` variable is a string. This is happening because it turns out that the `input` function always returns a string, and we have to specify that it should be turned into (or **cast** into) an integer using the `int` function. This means our first line would now look like:


<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="n">num</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s">"Number: "</span><span class="p">))</span>
</code></pre></div></div>


  - Now, the program will work just as we intended!


## Sequences

One of the most powerful parts of the Python language is its ability to work with **sequences** of data in addition to individual variables.

There are several types of sequences that are similar in some ways, but different in others. When explaining those differences, we’ll use the terms **mutable/immutable** and **ordered/unordered**. **Mutable** means that once a sequence has been defined, we can change individual elements of that sequence, and **ordered** means that the order of the objects matters.

### Strings

<dl>
  <dt>: <strong>Ordered</strong>: Yes</dt>
  <dd>
    <p><strong>Mutable</strong>: No</p>
  </dd>
  <dd>
    <p>We’ve already looked at strings a little bit, but instead of just variables, we can think of a string as a sequence of characters. This means we can access individual elements within the string! For example:</p>
  </dd>
</dl>

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="n">name</span> <span class="o">=</span> <span class="s">"Harry"</span>
<span class="k">print</span><span class="p">(</span><span class="n">name</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span>
<span class="k">print</span><span class="p">(</span><span class="n">name</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span>
</code></pre></div></div>

prints out the first (or index-0) character in the string, which in this case happens to be `H`, and then prints out the second (or index-1) character, which is `a`.

### Lists

<dl>
  <dt>: <strong>Ordered</strong>: Yes</dt>
  <dd>
    <p><strong>Mutable</strong>: Yes</p>
  </dd>
  <dd>
    <p>A <a href="https://www.w3schools.com/python/python_lists.asp">Python list</a> allows you to store any variable types. We create a list using square brackets and commas, as shown below. Similarly to strings, we can print an entire list, or some individual elements. We can also add elements to a list using <code class="highlighter-rouge">append</code>, and sort a list using <code class="highlighter-rouge">sort</code></p>
  </dd>
</dl>

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c1"># This is a Python comment
</span><span class="n">names</span> <span class="o">=</span> <span class="p">[</span><span class="s">"Harry"</span><span class="p">,</span> <span class="s">"Ron"</span><span class="p">,</span> <span class="s">"Hermione"</span><span class="p">]</span>
<span class="c1"># Print the entire list:
</span><span class="k">print</span><span class="p">(</span><span class="n">names</span><span class="p">)</span>
<span class="c1"># Print the second element of the list:
</span><span class="k">print</span><span class="p">(</span><span class="n">names</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span>
<span class="c1"># Add a new name to the list:
</span><span class="n">names</span><span class="p">.</span><span class="n">append</span><span class="p">(</span><span class="s">"Draco"</span><span class="p">)</span>
<span class="c1"># Sort the list:
</span><span class="n">names</span><span class="p">.</span><span class="n">sort</span><span class="p">()</span>
<span class="c1"># Print the new list:
</span><span class="k">print</span><span class="p">(</span><span class="n">names</span><span class="p">)</span>
</code></pre></div></div>

![Names](cs50.web.2020_files/lecture02/list.png)

### Tuples

<dl>
  <dt>: <strong>Ordered</strong>: Yes</dt>
  <dd>
    <p><strong>Mutable</strong>: No</p>
  </dd>
  <dd>
    <p><a href="https://www.w3schools.com/python/python_tuples.asp">Tuples</a> are generally used when you need to store just two or three values together, such as the x and y values for a point. In Python code, we use parentheses:</p>
  </dd>
</dl>

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="n">point</span> <span class="o">=</span> <span class="p">(</span><span class="mf">12.5</span><span class="p">,</span> <span class="mf">10.6</span><span class="p">)</span>
</code></pre></div></div>

### Sets

<dl>
  <dt>: <strong>Ordered</strong>: No</dt>
  <dd>
    <p><strong>Mutable</strong>: N/A</p>
  </dd>
  <dd>
    <p><a href="https://www.w3schools.com/python/python_sets.asp">Sets</a> are different from lists and tuples in that they are <strong>unordered</strong>. They are also different because while you can have two or more of the same elements within a list/tuple, a set will only store each value once. We can define an empty set using the <code class="highlighter-rouge">set</code> function. We can then use <code class="highlighter-rouge">add</code> and <code class="highlighter-rouge">remove</code> to add and remove elements from that set, and the <code class="highlighter-rouge">len</code> function to find the set’s size. Note that the <code class="highlighter-rouge">len</code> function works on all sequences in python. Also note that despite adding <code class="highlighter-rouge">4</code> and <code class="highlighter-rouge">3</code> to the set twice, each item can only appear once in a set.</p>
  </dd>
</dl>

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c1"># Create an empty set:
</span><span class="n">s</span> <span class="o">=</span> <span class="nb">set</span><span class="p">()</span>

<span class="c1"># Add some elements:
</span><span class="n">s</span><span class="p">.</span><span class="n">add</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span>
<span class="n">s</span><span class="p">.</span><span class="n">add</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span>
<span class="n">s</span><span class="p">.</span><span class="n">add</span><span class="p">(</span><span class="mi">3</span><span class="p">)</span>
<span class="n">s</span><span class="p">.</span><span class="n">add</span><span class="p">(</span><span class="mi">4</span><span class="p">)</span>
<span class="n">s</span><span class="p">.</span><span class="n">add</span><span class="p">(</span><span class="mi">3</span><span class="p">)</span>
<span class="n">s</span><span class="p">.</span><span class="n">add</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span>

<span class="c1"># Remove 2 from the set
</span><span class="n">s</span><span class="p">.</span><span class="n">remove</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span>

<span class="c1"># Print the set:
</span><span class="k">print</span><span class="p">(</span><span class="n">s</span><span class="p">)</span>

<span class="c1"># Find the size of the set:
</span><span class="k">print</span><span class="p">(</span><span class="s">f"The set has </span><span class="si">{</span><span class="nb">len</span><span class="p">(</span><span class="n">s</span><span class="p">)</span><span class="si">}</span><span class="s"> elements."</span><span class="p">)</span>

<span class="s">""" This is a python multi-line comment:
Output:
{1, 3, 4}
The set has 3 elements.
"""</span>
</code></pre></div></div>

### Dictionaries

<dl>
  <dt>: <strong>Ordered</strong>: No</dt>
  <dd>
    <p><strong>Mutable</strong>: Yes</p>
  </dd>
  <dd>
    <p><a href="https://www.w3schools.com/python/python_dictionaries.asp">Python Dictionaries</a> or <code class="highlighter-rouge">dict</code>s, will be especially useful in this course. A dictionary is a set of <strong>key-value pairs</strong>, where each key has a corresponding value, just like in a dictionary, each word (the key) has a corresponding definition (the value). In Python, we use curly brackets to contain a dictionary, and colons to indicate keys and values. For example:</p>
  </dd>
</dl>

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c1"># Define a dictionary
</span><span class="n">houses</span> <span class="o">=</span> <span class="p">{</span><span class="s">"Harry"</span><span class="p">:</span> <span class="s">"Gryffindor"</span><span class="p">,</span> <span class="s">"Draco"</span><span class="p">:</span> <span class="s">"Slytherin"</span><span class="p">}</span>
<span class="c1"># Print out Harry's house
</span><span class="k">print</span><span class="p">(</span><span class="n">houses</span><span class="p">[</span><span class="s">"Harry"</span><span class="p">])</span>
<span class="c1"># Adding values to a dictionary:
</span><span class="n">houses</span><span class="p">[</span><span class="s">"Hermione"</span><span class="p">]</span> <span class="o">=</span> <span class="s">"Gryffindor"</span>
<span class="c1"># Print out Hermione's House:
</span><span class="k">print</span><span class="p">(</span><span class="n">houses</span><span class="p">[</span><span class="s">"Hermione"</span><span class="p">])</span>

<span class="s">""" Output:
Gryffindor
Gryffindor
"""</span>
</code></pre></div></div>

### Loops

Loops are an incredibly important part of any programming language, and in Python, they come in two main forms: [for loops](https://www.w3schools.com/python/python_for_loops.asp) and [while loops](https://www.w3schools.com/python/python_while_loops.asp). For now, we’ll focus on For Loops.


  - For loops are used to iterate over a sequence of elements, performing some block of code (indented below) for each element in a sequence. For example, the following code will print out the numbers from 0 to 5:


<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">5</span><span class="p">]:</span>
    <span class="k">print</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>

<span class="s">""" Output:
0
1
2
3
4
5
"""</span>
</code></pre></div></div>


  - We can condense this code using the python `range` function, which allows us to easily get a sequence of numbers. The following code gives the exact same result as our code from above:


<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">6</span><span class="p">):</span>
    <span class="k">print</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>

<span class="s">""" Output:
0
1
2
3
4
5
"""</span>
</code></pre></div></div>


  - This type of loop can work for any sequence! For example, if we wish to print each name in a list, we could write the code below:


<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c1"># Create a list:
</span><span class="n">names</span> <span class="o">=</span> <span class="p">[</span><span class="s">"Harry"</span><span class="p">,</span> <span class="s">"Ron"</span><span class="p">,</span> <span class="s">"Hermione"</span><span class="p">]</span>

<span class="c1"># Print each name:
</span><span class="k">for</span> <span class="n">name</span> <span class="ow">in</span> <span class="n">names</span><span class="p">:</span>
    <span class="k">print</span><span class="p">(</span><span class="n">name</span><span class="p">)</span>

<span class="s">""" Output:
Harry
Ron
Hermione
"""</span>
</code></pre></div></div>


  - We can get even more specific if we want, and loop through each character in a single name!


<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="n">name</span> <span class="o">=</span> <span class="s">"Harry"</span>
<span class="k">for</span> <span class="n">char</span> <span class="ow">in</span> <span class="n">name</span><span class="p">:</span>
    <span class="k">print</span><span class="p">(</span><span class="n">char</span><span class="p">)</span>

<span class="s">""" Output:
H
a
r
r
y
"""</span>
</code></pre></div></div>

## Functions

We’ve already seen a few python functions such as `print` and `input`, but now we’re going to dive into writing our own functions. To get started, we’ll write a function that takes in a number and squares it:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">def</span> <span class="nf">square</span><span class="p">(</span><span class="n">x</span><span class="p">):</span>
    <span class="k">return</span> <span class="n">x</span> <span class="o">*</span> <span class="n">x</span>
</code></pre></div></div>

Notice how we use the `def` keyword to indicate we’re defining a function, that we’re taking in a single input called `x` and that we use the `return` keyword to indicate what the function’s output should be.

We can then “call” this function just as we’ve called other ones: using parentheses:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">10</span><span class="p">):</span>
    <span class="k">print</span><span class="p">(</span><span class="s">f"The square of </span><span class="si">{</span><span class="n">i</span><span class="si">}</span><span class="s"> is </span><span class="si">{</span><span class="n">square</span><span class="p">(</span><span class="n">i</span><span class="p">)</span><span class="si">}</span><span class="s">"</span><span class="p">)</span>

<span class="s">""" Output:
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
"""</span>
</code></pre></div></div>

## Modules

As our projects get larger and larger, it will become useful to be able to write functions in one file and run them in another. In the case above, we could create create one file called `functions.py` with the code:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">def</span> <span class="nf">square</span><span class="p">(</span><span class="n">x</span><span class="p">):</span>
    <span class="k">return</span> <span class="n">x</span> <span class="o">*</span> <span class="n">x</span>
</code></pre></div></div>

And another file called `square.py` with the code:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">10</span><span class="p">):</span>
    <span class="k">print</span><span class="p">(</span><span class="s">f"The square of </span><span class="si">{</span><span class="n">i</span><span class="si">}</span><span class="s"> is </span><span class="si">{</span><span class="n">square</span><span class="p">(</span><span class="n">i</span><span class="p">)</span><span class="si">}</span><span class="s">"</span><span class="p">)</span>
</code></pre></div></div>

However, when we try to run `square.py`, we run into the following error:

![Name Error](cs50.web.2020_files/lecture02/NameError.png)

We run into this problem because by default, Python files don’t know about each other, so we have to explicitly `import` the square function from the `functions` **module** we just wrote. Now, when `square.py` looks like this:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="kn">from</span> <span class="nn">functions</span> <span class="kn">import</span> <span class="n">square</span>

<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">10</span><span class="p">):</span>
    <span class="k">print</span><span class="p">(</span><span class="s">f"The square of </span><span class="si">{</span><span class="n">i</span><span class="si">}</span><span class="s"> is </span><span class="si">{</span><span class="n">square</span><span class="p">(</span><span class="n">i</span><span class="p">)</span><span class="si">}</span><span class="s">"</span><span class="p">)</span>
</code></pre></div></div>

Alternatively, we can choose to import the entire `functions` module and then use dot notation to access the `square` function:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="kn">import</span> <span class="nn">functions</span>

<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">10</span><span class="p">):</span>
    <span class="k">print</span><span class="p">(</span><span class="s">f"The square of </span><span class="si">{</span><span class="n">i</span><span class="si">}</span><span class="s"> is </span><span class="si">{</span><span class="n">functions</span><span class="p">.</span><span class="n">square</span><span class="p">(</span><span class="n">i</span><span class="p">)</span><span class="si">}</span><span class="s">"</span><span class="p">)</span>
</code></pre></div></div>

There are many built-in Python modules we can import such as `math` or `csv` that give us access to even more functions. Additionally, we can download even more Modules to access even more functionality! We’ll spend a lot of time using the `Django` Module, which we’ll discuss in the next lecture.

## Object-Oriented Programming

[Object Oriented Programming](https://en.wikipedia.org/wiki/Object-oriented_programming) is a programming paradigm, or a way of thinking about programming, that is centered around objects that can store information and perform actions.


  - **Classes**: We’ve already seen a few different types of variables in python, but what if we want to create our own type? A [Python Class](https://www.w3schools.com/python/python_classes.asp) is essentially a template for a new type of object that can store information and perform actions. Here’s a class that defines a two-dimensional point:


<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">class</span> <span class="nc">Point</span><span class="p">():</span>
    <span class="c1"># A method defining how to create a point:
</span>    <span class="k">def</span> <span class="nf">__init__</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">):</span>
        <span class="bp">self</span><span class="p">.</span><span class="n">x</span> <span class="o">=</span> <span class="n">x</span>
        <span class="bp">self</span><span class="p">.</span><span class="n">y</span> <span class="o">=</span> <span class="n">y</span>
</code></pre></div></div>


  - Note that in the above code, we use the keyword `self` to represent the object we are currently working with. `self` should be the first argument for any method within a Python class.


Now, let’s see how we can actually use the class from above to create an object:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="n">p</span> <span class="o">=</span> <span class="n">Point</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">8</span><span class="p">)</span>
<span class="k">print</span><span class="p">(</span><span class="n">p</span><span class="p">.</span><span class="n">x</span><span class="p">)</span>
<span class="k">print</span><span class="p">(</span><span class="n">p</span><span class="p">.</span><span class="n">y</span><span class="p">)</span>

<span class="s">""" Output:
2
8
"""</span>
</code></pre></div></div>

Now, let’s look at a more interesting example where instead of storing just the coordinates of a Point, we create a class that represents an airline flight:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">class</span> <span class="nc">Flight</span><span class="p">():</span>
    <span class="c1"># Method to create new flight with given capacity
</span>    <span class="k">def</span> <span class="nf">__init__</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">capacity</span><span class="p">):</span>
        <span class="bp">self</span><span class="p">.</span><span class="n">capacity</span> <span class="o">=</span> <span class="n">capacity</span>
        <span class="bp">self</span><span class="p">.</span><span class="n">passengers</span> <span class="o">=</span> <span class="p">[]</span>

    <span class="c1"># Method to add a passenger to the flight:
</span>    <span class="k">def</span> <span class="nf">add_passenger</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">name</span><span class="p">):</span>
        <span class="bp">self</span><span class="p">.</span><span class="n">passengers</span><span class="p">.</span><span class="n">append</span><span class="p">(</span><span class="n">name</span><span class="p">)</span>
</code></pre></div></div>

However, this class is flawed because while we set a capacity, we could still add too many passengers. Let’s augment it so that before adding a passenger, we check to see if there is room on the flight:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">class</span> <span class="nc">Flight</span><span class="p">():</span>
    <span class="c1"># Method to create new flight with given capacity
</span>    <span class="k">def</span> <span class="nf">__init__</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">capacity</span><span class="p">):</span>
        <span class="bp">self</span><span class="p">.</span><span class="n">capacity</span> <span class="o">=</span> <span class="n">capacity</span>
        <span class="bp">self</span><span class="p">.</span><span class="n">passengers</span> <span class="o">=</span> <span class="p">[]</span>

    <span class="c1"># Method to add a passenger to the flight:
</span>    <span class="k">def</span> <span class="nf">add_passenger</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">name</span><span class="p">):</span>
        <span class="k">if</span> <span class="ow">not</span> <span class="bp">self</span><span class="p">.</span><span class="n">open_seats</span><span class="p">():</span>
            <span class="k">return</span> <span class="bp">False</span>
        <span class="bp">self</span><span class="p">.</span><span class="n">passengers</span><span class="p">.</span><span class="n">append</span><span class="p">(</span><span class="n">name</span><span class="p">)</span>
        <span class="k">return</span> <span class="bp">True</span>

    <span class="c1"># Method to return number of open seats
</span>    <span class="k">def</span> <span class="nf">open_seats</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>
        <span class="k">return</span> <span class="bp">self</span><span class="p">.</span><span class="n">capacity</span> <span class="o">-</span> <span class="nb">len</span><span class="p">(</span><span class="bp">self</span><span class="p">.</span><span class="n">passengers</span><span class="p">)</span>
</code></pre></div></div>

Note that above, we use the line `if not self.open_seats()` to determine whether or not there are open seats. This works because in Python, the number 0 can be interpretted as meaning `False`, and we can also use the keyword `not` to signify the opposite of the following statement so `not True` is `False` and `not False` is `True`. Therefore, if `open_seats` returns 0, the entire expression will evaluate to `True`

Now, let’s try out the class we’ve created by instantiating some objects:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c1"># Create a new flight with o=up to 3 passengers
</span><span class="n">flight</span> <span class="o">=</span> <span class="n">Flight</span><span class="p">(</span><span class="mi">3</span><span class="p">)</span>

<span class="c1"># Create a list of people
</span><span class="n">people</span> <span class="o">=</span> <span class="p">[</span><span class="s">"Harry"</span><span class="p">,</span> <span class="s">"Ron"</span><span class="p">,</span> <span class="s">"Hermione"</span><span class="p">,</span> <span class="s">"Ginny"</span><span class="p">]</span>

<span class="c1"># Attempt to add each person in the list to a flight
</span><span class="k">for</span> <span class="n">person</span> <span class="ow">in</span> <span class="n">people</span><span class="p">:</span>
    <span class="k">if</span> <span class="n">flight</span><span class="p">.</span><span class="n">add_passenger</span><span class="p">(</span><span class="n">person</span><span class="p">):</span>
        <span class="k">print</span><span class="p">(</span><span class="s">f"Added </span><span class="si">{</span><span class="n">person</span><span class="si">}</span><span class="s"> to flight successfully"</span><span class="p">)</span>
    <span class="k">else</span><span class="p">:</span>
        <span class="k">print</span><span class="p">(</span><span class="s">f"No available seats for </span><span class="si">{</span><span class="n">person</span><span class="si">}</span><span class="s">"</span><span class="p">)</span>

<span class="s">""" Output:
Added Harry to flight successfully
Added Ron to flight successfully
Added Hermione to flight successfully
No available seats for Ginny
"""</span>
</code></pre></div></div>

## Functional Programming

In addition to supporting Object-Oriented Programming, Python also supports the [Functional Programming Paradigm](https://en.wikipedia.org/wiki/Functional_programming), in which functions are treated as values just like any other variable.

### Decorators

One thing made possible by functional programming is the idea of a decorator, which is a higher-order function that can modify another function. For example, let’s write a decorator that announces when a function is about to begin, and when it ends. We can then apply this decorator using an `@` symbol.

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">def</span> <span class="nf">announce</span><span class="p">(</span><span class="n">f</span><span class="p">):</span>
    <span class="k">def</span> <span class="nf">wrapper</span><span class="p">():</span>
        <span class="k">print</span><span class="p">(</span><span class="s">"About to run the function"</span><span class="p">)</span>
        <span class="n">f</span><span class="p">()</span>
        <span class="k">print</span><span class="p">(</span><span class="s">"Done with the function"</span><span class="p">)</span>
    <span class="k">return</span> <span class="n">wrapper</span>

<span class="o">@</span><span class="n">announce</span>
<span class="k">def</span> <span class="nf">hello</span><span class="p">():</span>
    <span class="k">print</span><span class="p">(</span><span class="s">"Hello, world!"</span><span class="p">)</span>

<span class="n">hello</span><span class="p">()</span>

<span class="s">""" Output:
About to run the function
Hello, world!
Done with the function
"""</span>
</code></pre></div></div>

### Lambda Functions

Lambda functions provide another way to create functions in python. For example, if we want to define the same `square` function we did earlier, we can write:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="n">square</span> <span class="o">=</span> <span class="k">lambda</span> <span class="n">x</span><span class="p">:</span> <span class="n">x</span> <span class="o">*</span> <span class="n">x</span>
</code></pre></div></div>

Where the input is to the left of the `:` and the output is on the right.

This can be useful when we don’t want to write a whole separate function for a single, small use. For example, if we want to sort some objects where it’s not clear at first how to sort them. Imagine we have a list of people, but with names and houses instead of just names that we wish to sort:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="n">people</span> <span class="o">=</span> <span class="p">[</span>
    <span class="p">{</span><span class="s">"name"</span><span class="p">:</span> <span class="s">"Harry"</span><span class="p">,</span> <span class="s">"house"</span><span class="p">:</span> <span class="s">"Gryffindor"</span><span class="p">},</span>
    <span class="p">{</span><span class="s">"name"</span><span class="p">:</span> <span class="s">"Cho"</span><span class="p">,</span> <span class="s">"house"</span><span class="p">:</span> <span class="s">"Ravenclaw"</span><span class="p">},</span>
    <span class="p">{</span><span class="s">"name"</span><span class="p">:</span> <span class="s">"Draco"</span><span class="p">,</span> <span class="s">"house"</span><span class="p">:</span> <span class="s">"Slytherin"</span><span class="p">}</span>
<span class="p">]</span>

<span class="n">people</span><span class="p">.</span><span class="n">sort</span><span class="p">()</span>

<span class="k">print</span><span class="p">(</span><span class="n">people</span><span class="p">)</span>
</code></pre></div></div>

This, however, leaves us with the error:

![Type Error](cs50.web.2020_files/lecture02/TypeError.png)

Which occurs because Python doesn’t know how to compare two Dictionaries to check if one is less than the other.

We can solve this problem by including a `key` argument to the sort function, which specifies which part of the dictionary we wish to use to sort:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="n">people</span> <span class="o">=</span> <span class="p">[</span>
    <span class="p">{</span><span class="s">"name"</span><span class="p">:</span> <span class="s">"Harry"</span><span class="p">,</span> <span class="s">"house"</span><span class="p">:</span> <span class="s">"Gryffindor"</span><span class="p">},</span>
    <span class="p">{</span><span class="s">"name"</span><span class="p">:</span> <span class="s">"Cho"</span><span class="p">,</span> <span class="s">"house"</span><span class="p">:</span> <span class="s">"Ravenclaw"</span><span class="p">},</span>
    <span class="p">{</span><span class="s">"name"</span><span class="p">:</span> <span class="s">"Draco"</span><span class="p">,</span> <span class="s">"house"</span><span class="p">:</span> <span class="s">"Slytherin"</span><span class="p">}</span>
<span class="p">]</span>

<span class="k">def</span> <span class="nf">f</span><span class="p">(</span><span class="n">person</span><span class="p">):</span>
    <span class="k">return</span> <span class="n">person</span><span class="p">[</span><span class="s">"name"</span><span class="p">]</span>

<span class="n">people</span><span class="p">.</span><span class="n">sort</span><span class="p">(</span><span class="n">key</span><span class="o">=</span><span class="n">f</span><span class="p">)</span>

<span class="k">print</span><span class="p">(</span><span class="n">people</span><span class="p">)</span>

<span class="s">""" Output:
[{'name': 'Cho', 'house': 'Ravenclaw'}, {'name': 'Draco', 'house': 'Slytherin'}, {'name': 'Harry', 'house': 'Gryffindor'}]
"""</span>
</code></pre></div></div>

While this does work, we’ve had to write an entire function that we’re only using once, we can make our code more readable by using a lambda function:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="n">people</span> <span class="o">=</span> <span class="p">[</span>
    <span class="p">{</span><span class="s">"name"</span><span class="p">:</span> <span class="s">"Harry"</span><span class="p">,</span> <span class="s">"house"</span><span class="p">:</span> <span class="s">"Gryffindor"</span><span class="p">},</span>
    <span class="p">{</span><span class="s">"name"</span><span class="p">:</span> <span class="s">"Cho"</span><span class="p">,</span> <span class="s">"house"</span><span class="p">:</span> <span class="s">"Ravenclaw"</span><span class="p">},</span>
    <span class="p">{</span><span class="s">"name"</span><span class="p">:</span> <span class="s">"Draco"</span><span class="p">,</span> <span class="s">"house"</span><span class="p">:</span> <span class="s">"Slytherin"</span><span class="p">}</span>
<span class="p">]</span>

<span class="n">people</span><span class="p">.</span><span class="n">sort</span><span class="p">(</span><span class="n">key</span><span class="o">=</span><span class="k">lambda</span> <span class="n">person</span><span class="p">:</span> <span class="n">person</span><span class="p">[</span><span class="s">"name"</span><span class="p">])</span>

<span class="k">print</span><span class="p">(</span><span class="n">people</span><span class="p">)</span>

<span class="s">""" Output:
[{'name': 'Cho', 'house': 'Ravenclaw'}, {'name': 'Draco', 'house': 'Slytherin'}, {'name': 'Harry', 'house': 'Gryffindor'}]
"""</span>
</code></pre></div></div>

## Exceptions

During this lecture, we’ve run into a few different exceptions, so now we’ll look into some new ways of dealing with them.

In the following chunk of code, we’ll take two integers from the user, and attempt to divide them:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="n">x</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s">"x: "</span><span class="p">))</span>
<span class="n">y</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s">"y: "</span><span class="p">))</span>

<span class="n">result</span> <span class="o">=</span> <span class="n">x</span> <span class="o">/</span> <span class="n">y</span>

<span class="k">print</span><span class="p">(</span><span class="s">f"</span><span class="si">{</span><span class="n">x</span><span class="si">}</span><span class="s"> / </span><span class="si">{</span><span class="n">y</span><span class="si">}</span><span class="s"> = </span><span class="si">{</span><span class="n">result</span><span class="si">}</span><span class="s">"</span><span class="p">)</span>
</code></pre></div></div>

In many cases, this program works well:

![Good example](cs50.web.2020_files/lecture02/dividegood.png)

However, we’ll run into problems when we attempt to divide by 0:

![Bad example](cs50.web.2020_files/lecture02/dividebad.png)

We can deal with this messy error using [Exception Handling](https://www.w3schools.com/python/python_try_except.asp). In the following block of code, we will `try` to divide the two numbers, `except` when we get a `ZeroDivisionError`:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="kn">import</span> <span class="nn">sys</span>

<span class="n">x</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s">"x: "</span><span class="p">))</span>
<span class="n">y</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s">"y: "</span><span class="p">))</span>

<span class="k">try</span><span class="p">:</span>
    <span class="n">result</span> <span class="o">=</span> <span class="n">x</span> <span class="o">/</span> <span class="n">y</span>
<span class="k">except</span> <span class="nb">ZeroDivisionError</span><span class="p">:</span>
    <span class="k">print</span><span class="p">(</span><span class="s">"Error: Cannot divide by 0."</span><span class="p">)</span>
    <span class="c1"># Exit the program
</span>    <span class="n">sys</span><span class="p">.</span><span class="nb">exit</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span>

<span class="k">print</span><span class="p">(</span><span class="s">f"</span><span class="si">{</span><span class="n">x</span><span class="si">}</span><span class="s"> / </span><span class="si">{</span><span class="n">y</span><span class="si">}</span><span class="s"> = </span><span class="si">{</span><span class="n">result</span><span class="si">}</span><span class="s">"</span><span class="p">)</span>
</code></pre></div></div>

In this case, when we try it again:

![Divide by 0 exception](cs50.web.2020_files/lecture02/divide0.png)

However, we still run into an error when the user enters non-numbers for x and y:

![Value error](cs50.web.2020_files/lecture02/valueError.png)

We can solve this problem in a similar manner!

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="kn">import</span> <span class="nn">sys</span>

<span class="k">try</span><span class="p">:</span>
    <span class="n">x</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s">"x: "</span><span class="p">))</span>
    <span class="n">y</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s">"y: "</span><span class="p">))</span>
<span class="k">except</span> <span class="nb">ValueError</span><span class="p">:</span>
    <span class="k">print</span><span class="p">(</span><span class="s">"Error: Invalid input"</span><span class="p">)</span>
    <span class="n">sys</span><span class="p">.</span><span class="nb">exit</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span>

<span class="k">try</span><span class="p">:</span>
    <span class="n">result</span> <span class="o">=</span> <span class="n">x</span> <span class="o">/</span> <span class="n">y</span>
<span class="k">except</span> <span class="nb">ZeroDivisionError</span><span class="p">:</span>
    <span class="k">print</span><span class="p">(</span><span class="s">"Error: Cannot divide by 0."</span><span class="p">)</span>
    <span class="c1"># Exit the program
</span>    <span class="n">sys</span><span class="p">.</span><span class="nb">exit</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span>

<span class="k">print</span><span class="p">(</span><span class="s">f"</span><span class="si">{</span><span class="n">x</span><span class="si">}</span><span class="s"> / </span><span class="si">{</span><span class="n">y</span><span class="si">}</span><span class="s"> = </span><span class="si">{</span><span class="n">result</span><span class="si">}</span><span class="s">"</span><span class="p">)</span>
</code></pre></div></div>

That’s all for this lecture! Next time, we’ll use Python’s `Django` Module to build some applications!



                </main>

            </div>

        </div>

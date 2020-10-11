<style>
    code {
        color: rgb(230, 0, 0);
    }
</style>


Testing
===========

*   The idea of testing. `prime.py`

```py
import math

def is_prime(n):
    """Determines if a non-negative integer is prime."""
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True
```

*   There are two ways to test this function
    *   Manually in Python interpreter
    *   Write a test function

###   Manually in Python interpreter
```py interpreter
>>> from prime import is_prime
>>> is_prime(23)
True
>>> is_prime(28)
False
```
*   Interpreter might work for a small example but this will ultimately become tedious for large one.

### Test function
*   `tests0.py`

```py
from prime import is_prime

def test_prime(n, expected):    # "n" is a number, and "expected" is a boolean value
    if is_prime(n) != expected:
        print(f"ERROR on is_prime({n}), expected {expected}")

if __name__ == "__main__":
    test_prime(-4, False)
    test_prime(0, False)
    test_prime(2, True)
    test_prime(3, True)
    test_prime(4, False)
    test_prime(4, True)    
```
*   Run in the terminal with `python tests0.py`
```bash
$ python tests0.py
ERROR on is_prime(4), expected True
```
####    bash script
*   Make a bash script file `tests0.sh`
```bash
python3 -c "from tests0 import test_prime; test_prime(1, False)"
python3 -c "from tests0 import test_prime; test_prime(2, True)"
python3 -c "from tests0 import test_prime; test_prime(8, False)"
python3 -c "from tests0 import test_prime; test_prime(11, True)"
python3 -c "from tests0 import test_prime; test_prime(25, False)"
python3 -c "from tests0 import test_prime; test_prime(28, True)"
```
*   Run in terminal by
    *   `source tests0.sh` or sometimes
    *   `./tests0.sh`
*   Here `-c` says, hey terminal run this particular Python command

##  assert
*   `assert` is a Python built-in command.
    *   which is followed by an boolean expression
    *   If it does not evaluate to `True`
        *   Python will throw an `AssertionError`

*   All programs, on exit, return an exit code
    *   exit code 0 indicates that
        *   everything went well
    *   exit code other than 0 indicates that
        *   Some error
    *   `echo $?` is used in bash to examine an exit code after running a script.

*   `assert0.py`

```py
def square(x):
    return x * x

assert square(10) == 100
```
run in terminal
```bash
$ python assert0.py

```
Nothing will appear if all went well



*   `assert1.py`

```py
def square(x):
    return x * x

assert square(10) == 101
```
run in terminal
```bash
$ python assert1.py
Traceback (most recent call last):
  File "assert1.py", line 4, in <module>
    assert square(10) == 101
AssertionError
```
Here `AssertionError` at the end will show that test is False


##  unittest

*   `unittest` is a built-in Python library for testing.
*   Testing `is_prime` with `unittest` might look like this.

```py
import unittest
from prime import is_prime

class Tests(unittest.TestCase):

    def test_1(self):
        """Check that 1 is not prime."""
        self.assertFalse(is_prime(1))

    def test_2(self):
        """Check that 2 is prime."""
        self.assertTrue(is_prime(2))

    def test_25(self):
        """Check that 25 is not prime."""
        self.assertFalse(is_prime(25))

if __name__ == "__main__":
    unittest.main()
```
Now it may be checked in terminal

```bash
$ python tests1.py
...
----------------------------------------------------------------------
Ran 3 tests in 0.000s

OK
```

Now just for testing, delete `+1` from `for i in range(2, int(math.sqrt(n)) + 1):` in `is_prime` function, and test again

```bash
$ python tests1.py
..F
======================================================================
FAIL: test_25 (__main__.Tests)
Check that 25 is not prime.
----------------------------------------------------------------------
Traceback (most recent call last):
  File "tests1.py", line 17, in test_25
    self.assertFalse(is_prime(25))
AssertionError: True is not false

----------------------------------------------------------------------
Ran 3 tests in 0.001s

FAILED (failures=1)
```
in `..F` means first two test `True` and last one is `False` and details are below.


*   `Tests` inherits from `unittest.TestCase`, which signifies that it contains a series of tests, each of which is capable of extending the basic functionality defined in `unittest.TestCase`.
*   Each test inside `Tests` is simply a method with an appropriate "docstring" labelling it.
*   `unittest` has a series of built-in, more advanced and readable assert statements. Instead of using `assert isPrime(1) == False`, simply use `self.assertFalse(is_prime(1))`.
*   `unittest.main()` will run all the tests.

*   `unittest` methods include (but are not limited to):
    *   `assertEqual`: checks that *first* and *second* are equal
    *   `assertNotEqual`: checks that *first* and *second* are not equal
    *   `assertTrue`: checks that *expr* is true
    *   `assertFalse`: checks that *expr* is false
    *   `assertIn`: checks if an item is in a list
    *   `assertNotIn`: checks if an item is not in a list

##  Testing Web Applications with Django

*   Django has its own testing framework.
*   `flights/tests.py`: first part

```py
from django.test import TestCase, Client
from django.db.models import Max

from .models import Airport, Flight, Passenger

# Create your tests here.
class ModelsTestCase(TestCase):

    def setUp(self):

        # Create airports.
        a1 = Airport.objects.create(code="AAA", city="City A")
        a2 = Airport.objects.create(code="BBB", city="City B")

        # Create flights.
        Flight.objects.create(origin=a1, destination=a2, duration=100)
        Flight.objects.create(origin=a1, destination=a1, duration=200)
```

### Back-End Testing
*   `flights/tests.py`: 2nd part

```py
"""Back-End Testing"""

def test_departures_count(self):
    a = Airport.objects.get(code="AAA")
    self.assertEqual(a.departures.count(),2)

def test_arrivals_count(self):
    a = Airport.objects.get(code="AAA")
    self.assertEqual(a.arrivals.count(), 1)

def test_valid_flight(self):
    a1 = Airport.objects.get(code="AAA")
    a2 = Airport.objects.get(code="BBB")
    f = Flight.objects.get(origin=a1, destination=a2)
    self.assertTrue(f.is_valid_flight())

def test_invalid_flight_destination(self):
    a1 = Airport.objects.get(code="AAA")
    f = Flight.objects.get(origin=a1, destination=a1)
    self.assertFalse(f.is_valid_flight())

def test_invalid_flight_duration(self):
    a1 = Airport.objects.get(code="AAA")
    a2 = Airport.objects.get(code="BBB")
    f = Flight.objects.get(origin=a1, destination=a2)
    f.duration = -100
    self.assertFalse(f.is_valid_flight())
```

### Front-End Testing
*   `flights/tests.py`: 3rd and last part

```py
"""Front End Testing"""

def test_index(self):
    c = Client() # for testing purpose, it can make rquest to and get response from a web server.
    response = c.get("/") # uses a `client` object to make a 'GET' request
    self.assertEqual(response.status_code, 200)
    self.assertEqual(response.context["flights"].count(), 2)

def test_valid_flight_page(self):
    a1 = Airport.objects.get(code="AAA")
    f = Flight.objects.get(origin=a1, destination=a1)

    c = Client()
    response = c.get(f"/{f.id}")
    self.assertEqual(response.status_code, 200)

def test_invalid_flight_page(self):
    max_id = Flight.objects.all().aggregate(Max("id"))["id__max"]

    c = Client()
    response = c.get(f"/{max_id} + 1")
    self.assertEqual(response.status_code, 404)

def test_flight_page_passengers(self):
    f = Flight.objects.get(pk=1)
    p = Passenger.objects.create(first="Alice", last="Adams")
    f.passengers.add(p)

    c = Client()
    response = c.get(f"/{f.id}")
    self.assertEqual(response.status_code, 200)
    self.assertEqual(response.context["passengers"].count(), 1)

def test_flight_page_non_passengers(self):
    f = Flight.objects.get(pk=1)
    p = Passenger.objects.create(first="Alice", last="Adams")

    c = Client()
    response = c.get(f"/{f.id}")
    self.assertEqual(response.status_code, 200)
    self.assertEqual(response.context["non_passengers"].count(), 1)
```

##  Selenium

*   Selenium is used for testing browser behavior including JavaScript.
*   Selenium interact with a webpage
    *   By a web driver (i.e. `chromedriver`) that allows Python code to programmatically pretend to be a user.


### Installation on ubuntu 20.04LTS

> `sudo pip3 install selenium`: Install Selenium

> `sudo apt install chromium-chromedriver`: Install chromedriver


*   `file_uri`: takes an HTML file and returns the URL (Uniform Resource Locator)
*   `webdriver.Chrome()`: is one of many Selenium built-in web drivers. This one is for interacting with Google Chrome
*   `driver.get`: will open up whatever URL is passed in.


*   `counter.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Counter</title>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            let counter = 0;

            document.querySelector('#increase').onclick = () => {
                counter++;
                document.querySelector('h1').innerHTML = counter;
            };

            document.querySelector('#decrease').onclick = () => {
                counter--;
                document.querySelector('h1').innerHTML = counter;
            };
        });
    </script>
</head>
<body>
    <h1>0</h1>
    <button id="increase">+</button>
    <button id="decrease">-</button>
</body>
</html>
```

*   `tests.py`: this program will perform testing by Selenium

```py
import os
import pathlib
import unittest

from selenium import webdriver

def file_uri(filename):
    return pathlib.Path(os.path.abspath(filename)).as_uri()

driver = webdriver.Chrome()

class WebpageTests(unittest.TestCase):

    def test_title(self):   # This function will check that document title
        driver.get(file_uri("counter.html"))
        self.assertEqual(driver.title, "Counter")

    def test_increase(self):    # This function will check the increase button function.
        driver.get(file_uri("counter.html"))
        increase = driver.find_element_by_id("increase")
        increase.click()
        self.assertEqual(driver.find_element_by_tag_name("h1").text, "1")

    def test_decrease(self):    # This function will check the decrease button function.
        driver.get(file_uri("counter.html"))
        decrease = driver.find_element_by_id("decrease")
        decrease.click()
        self.assertEqual(driver.find_element_by_tag_name("h1").text, "-1")

    # This function will check the increase button for multiple (3) times.
    def test_multiple_increase(self):   
        driver.get(file_uri("counter.html"))
        increase = driver.find_element_by_id("increase")
        for i in range(3):
            increase.click()
        self.assertEqual(driver.find_element_by_tag_name("h1").text, "3")


if __name__ == "__main__":
    unittest.main()
```

### Testing in Terminal
*   Open Python interpreter

```py interpreter
$ python
Python 3.8.2 (default, Apr 27 2020, 15:53:34)
[GCC 9.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from selenium import webdriver
>>> from tests import *
>>> uri=file_uri("counter.html")
>>> driver=webdriver.Chrome()
>>> driver.get(uri)
>>> plus=driver.find_element_by_id("increase")
>>> plus.click()
>>>
```
and so on...

##  CI (Continuous Integration) / CD (Continuous Delivery)


### Continuous Integration

*   Frequency merges to main branch
*   Automated unit testing


### Continuous Delivery

*   Automated application deployment.


### Travis

*   [Travis](https://travis-ci.org/)
*   __Sign in__ or __Sign up__ via github account
*   Authorize Travis on GitHub
*   Go to `Profile` > `Settings`
    *   Enable the repository to integrate
*   Make a YAML file `.travis.yml` inside the repository
*   `.travis.yml`

```yaml
language: python
python:
    - 3.8.2
install:
    - pip install -r requirements.txt
script:
    - python manage.py test
```
*   `pip freeze > requirements.txt`: Make list of dependencies.
*   Add and push all changes to GitHub.
*   Go to repository page on Travis.
    *   Then go to `Build History` and then `master`
    *   all details about test will be shown below.
*   Go to GitHub and the `commit` page.
    *   testing status is shown here in green tick or red cross.

##  Docker
*   Docker is the most popular tool for containerization.
*   Docker is build directly on top of the operating system.
    *   and add an additional layer that help to keep containers isolated

### Docker Installation
*   [Instruction to install Docker on ubuntu](https://docs.docker.com/engine/install/ubuntu/)
*   `sudo apt-get remove docker docker-engine docker.io containerd runc`: Uninstall old versions.
*   `sudo apt-get update`: Update the `apt` package index.
*   Install packages to allow `apt` to use a repository over HTTPS.
```bash
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```
*   `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`: Add Docker's official GPG key.
*   `sudo apt-key fingerprint 0EBFCD88`: Verify thy key with last 8 characters of the fingerprint `9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88`.
*   Set up the **stable** repository.
```bash
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```
*   `sudo apt-get update`: Update the `apt` package index.
*   `sudo apt-get install docker-ce docker-ce-cli containerd.io`: Install the *latest version* of Docker Engine and containered.
    *   `docker -v`: Verify the installation by checking version.
    *   `sudo docker run hello-world`: Verify the Docker Engine is installed correctly by running the `hello-world` image.
    *   `sudo docker images`: Confirm the REPOSITORY is `hello-world`.
    *   `sudo docker ps -a`: Confirm the IMAGE is `hello-world`.

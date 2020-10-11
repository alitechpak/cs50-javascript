<style>
    code {
        color: rgb(230, 0, 0);
    }
</style>

django
==============================
*   Django is much havier weight web framework than Flask with a lot more features.

##  Install Python and pip
*   `sudo apt-get update`:
*   `sudo apt-get upgrade`:
*   `sudo apt-get install python3`: Install Python3
    *   `python3 -V`: Check python version
*   `sudo apt-get install -y python3-pip`: Install pip
    *   `pip3 -V`: Check pip version

##  Install and Create Virtual Environment
**Action**      | **Windows**                   | **Mac/Linux**
---             | ---                           | ---
install         |                               | `sudo apt-get install -y python3-venv`
Create          | `py -3 -m venv env`           | `python3 -m venv env`
Activate        | `env\scripts\activate`__*__   | `source env/bin/activate`
Activate        | ``Ctrl + Shift +` ``          |
Deactivate      |   `deactivate`                | `deactivate`

##  Install Django
*   `pip install django`: Install django inside _venv_
    *   `django-admin --version`: Check version

##  Create a Django project
Django divides all of its web applications into 'projects', composed of different parts.

### Start a new project

####    Start project
*   `django-admin startproject <projectname>`: Start from within desired directory.

| Some Details |
|:---|
| **`__init__.py`**: defines the directory `projectname` as a Python 'package', a collectin of multiple Python files (Django is built on the idea of packages.)|
| **`manage.py`**: a Python script that can be used to perform useful operations on a web application |
| **`settings.py`**: basic settings, like time zone, other applications installed in the project, what sort of database is used, etc |
| **`urls.py`**: determins what URLs/routes can be accessed when using teh web application |
| **`wsgi.py`**: a file that helps to deploy an application to a web server |
| **`projectname/`**: the directory for the project that contains all of the above files by default |

####    Create app
*   `cd <projectname>`: change directory to `projectname`.
*   `python manage.py startapp <appname>`: Create app inside the project directory.
    *   This will create a directory `appname` inside of the project directory. `appname` will contain a number of files automatically.
*   `views.py` inside of `appname` is analogous to `application.py` for a Flask application.
    *   At first, `views.py` will look like this:
        *   `appname/views.py`

    ```python
    from django.shortcuts import render

    # Create your views here.
    ```

####    Edit `views.py`
*   All view functions should take the `request` object as an argument. Like in Flask, this object will contain information about what sort of arguments were passed in to the request.
    *   `appname/views.py`

    ```py
    from django.http import HttpResponse
    from django.shortcuts import render  

    # Create your views here.
    def index(request):
        return HttpResponse("Hello, World!")
    ```

####    Create `urls.py` inside app directory
*   A new `urls.py` must be created inside `appname` directory (this is a different `urls.py` than the project-level file of the same name).
    *   Each application will often have its own routes (separate `urls.py`) file.
    *   `appname/urls.py`

    ```py
    from django.urls import path

    from . import views

    urlpatterns = [
        path("", views.index),
    ]
    ```
    *   `from . import views` imports `views.py` from the `appname` directory, so that URLs can be linked to views.
    *   `urlpatterns` is a list of all the URLs supported by this application.
    *   `""` indicates the empty route.

####    Update `urls.py` inside project level
*   When the Django project starts up, it will only check the `urls.py` at the project level.
    *   So, `appname/urls.py` must be linked to the project's `urls.py`
    *   To link the new path,
        *   simply add `path("", include("appname.urls"))` to `urlpatterns`
        *   and import `include` from `django.urls`

    ```py
    from django.contrib import admin
    from django.urls import include, path

    urlspatterns = [
        path("", include("appname.urls")),
        path("admin/", admin.site.urls)
    ]
    ```

####    Run app
By default, the `runserver` command starts the development server on the internal IP at port `8000`. <br>

If you want to change the server's port, pass it as a command-line argument. For instance, this command starts the server on `8080`:
*   `python manage.py runserver`: Run the application on `8000` port
*   `python manage.py runserver 8080`: Run the application on `8080` port <br>

####    Quite the Server
*   <kbd>Ctrl + C</kbd>: Quite the server

|<kbd>Ctrl + z</kbd>: does not Quite the server|
|:---|
|`sudo fuser -k 8000/tcp`: This should kill all the processes associated with port `8000`.|
| `sudo lsof -i tcp:8000`: on mac |


###    Database
*   Database is defined in `<project>/settings.py` in the `DATABASE` dictionary. By default, it uses a SQLite 3 (another version of SQL that uses a local file for a database) and the database file `db.sqlite3`.

####    Open `appname/models.py` and code for sql table.
*   `appname/models.py` will define the types of data being stored in the database.
*   The information to be contained here is very analogous to the information created  with Flask-SQLAlchemy.
*   For example `flights/models.py`

    ```py
    class Flight(models.Model):
        origin = models.CharField(max_length=64)
        destination = models.CharField(max_length=64)
        duration = models.IntegerField()
    ```

####    Link with `project/settings.py`
*   Now, it must be linked to the Django project. In `project/settings.py`, there is a list called `INSTALLED_APPS`.
    *   `flights.apps.FlightsConfig` i.e. `<appname>.apps.<classNameIn_apps>.py`

####    Migrations
*   `python manage.py makemigrations`: Create the table for managing `appname` inside the database.
    *   Running this command will create a file `migrations/0001_initial.py`
*   `python manage.py sqlmigrate <appname> 0001`: will produce the SQL code that actually corresponds to this migration.
    *   This command doesn't need to be run, but it is helpful.
*   `python manage.py migrate`: Apply the migrations


### Django Shell
*   Django provides a shell, similar to Python's interpreter, that allows for direct modification of the database.

####    Start Shell
*   `python manage.py shell`: Start the shell

####    Create data
```py
# from flights.models import Flight
from <appname>.models import <appClass>

# f = Flight(origin="New York", destination="London", duration=415)
variable = <appClass>(column1="data", column2="data", column3="data")
# f.save()
variable.save()

# Flight.objects.all()
<appClass>.objects.all()
# Returns <QuerySet [<appClass: appClass object(1)>]>
```
*   `.save()` is analogous to SQL's `COMMIT`.
*   A `QuerySet` is like a list, with added functionality.

####    Representation of `QuerySet`
*   To produce a useful, string representation of a class object, a `__str__` function can be added to `appClass` in `<appname>/models.py`.

```py
def __str__(self):
    # return f"{self.id} - {self.origin} to {self.destination}"
    return variable"{self.id} - {self.column1} to {self.column2}"
```

> `__str__`: function defines what an object should look like when printed, whether to a terminal, an HTML page, etc

*   Back to shell:

```Shell
Flight.objects.all()
# Returns <QuerySet [<Flight: 1 - New York to London>]>

f = Flight.objects.first()

f
# Returns <Flight: 1 - New York to London>

f.origin
# Returns 'New York'

f.id
# Returns 1

f.delete()
# Deletes the flight as expected
```

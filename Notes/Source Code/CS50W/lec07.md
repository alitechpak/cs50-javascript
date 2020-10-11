<style>
    code {
        color: rgb(230, 0, 0);
    }
</style>

CS50 Web Programming with Python and JavaScript
=============================================

##  lecture 07 source code

## airline

###    `airline/airline/urls.py`
```py
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('', include('flights.urls')),
    path('admin/', admin.site.urls),
]
```

###    `airline/flights/admin.py`

```py
from django.contrib import admin

from .models import Airport, Flight, Passenger

# Register your models here.

class PassengerInline(admin.StackedInline):
    model = Passenger.flights.through
    extra = 1

class FlightAdmin(admin.ModelAdmin):
    inlines = [PassengerInline]

class PassengerAdmin(admin.ModelAdmin):
    filter_horizontal = ("flights",)

admin.site.register(Airport)
admin.site.register(Flight, FlightAdmin)
admin.site.register(Passenger, PassengerAdmin)
```

###    `airline/flights/apps.py`

```py
from django.apps import AppConfig

class FlightsConfig(AppConfig):
    name = 'flights'
```

### `airline/flights/models.py`
```py
from django.db import models

# Create your models here.
class Airport(models.Model):
    code = models.CharField(max_length=3)
    city = models.CharField(max_length=64)

    def __str__(self):
        return f"{self.city} ({self.code})"

class Flight(models.Model):
    origin = models.ForeignKey(Airport, on_delete=models.CASCADE, related_name="departures")
    destination = models.ForeignKey(Airport, on_delete=models.CASCADE, related_name="arrivals")
    duration = models.IntegerField()

    def __str__(self):
        return f"{self.id} - {self.origin} to {self.destination}"

class Passenger(models.Model):
    first = models.CharField(max_length=64)
    last = models.CharField(max_length=64)
    flights = models.ManyToManyField(Flight, blank=True, related_name="passengers")

    def __str__(self):
        return f"{self.first} {self.last}"
```

### `airline/flights/urls.py`
```py
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("<int:flight_id>", views.flight, name="flight"),
    path("<int:flight_id>/book", views.book, name="book")
]
```


### `airline/flights/views.py`
```py
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.shortcuts import render
from django.urls import reverse

from .models import Flight, Passenger

# Create your views here.
def index(request):
    context = {
        "flights": Flight.objects.all()
    }
    return render(request, "flights/index.html", context)

def flight(request, flight_id):
    try:
        flight = Flight.objects.get(pk=flight_id)
    except Flight.DoesNotExist:
        raise Http404("Flight does not exist")
    context = {
        "flight": flight,
        "passengers": flight.passengers.all(),
        "non_passengers": Passenger.objects.exclude(flights=flight).all()
    }
    return render(request, "flights/flight.html", context)

def book(request, flight_id):
    try:
        passenger_id = int(request.POST["passenger"])
        flight = Flight.objects.get(pk=flight_id)
        passenger = Passenger.objects.get(pk=passenger_id)
    except KeyError:
        return render(request, "flights/error.html", {"message": "No selection."})
    except Flight.DoesNotExist:
        return render(request, "flights/error.html", {"message": "No flight."})
    except Passenger.DoesNotExist:
        return render(request, "flights/error.html", {"message": "No passenger."})
    passenger.flights.add(flight)
    return HttpResponseRedirect(reverse("flight", args=(flight_id,)))
```

### `airline/flights/templates/flights/base.html`
```HTML
{% load static %}

<!DOCTYPE html>
<html>
    <head>
        <title>{% block title %}{% endblock %}</title>
        <link rel="stylesheet" href="{% static 'flights/styles.css' %}"/>
    </head>
    <body>
        {% block body %}
        {% endblock %}
    </body>
</html>
```

### `airline/flights/templates/flights/error.html`
```HTML
{% extends "flights/base.html" %}

{% block title %}
    Error
{% endblock %}

{% block body %}
    <h1>Error</h1>
    {{ message }}
    <hr>
    <a href="{% url 'index' %}">Return to flights.</a>
{% endblock %}
```


### `airline/flights/templates/flights/flight.html`
```HTML
{% extends "flights/base.html" %}

{% block title %}
    Flight {{ flight.id }}
{% endblock %}

{% block body %}
    <ul>
        <li>Flight Number: {{ flight.id }}</li>
        <li>Origin: {{ flight.origin }}</li>
        <li>Destination:  {{ flight.destination }}</li>
        <li>
            Passengers:
            <ul>
                {% for passenger in passengers %}
                    <li>{{ passenger }}</li>
                {% empty %}
                    <li>No passengers</li>
                {% endfor %}
            </ul>
        </li>
    </ul>
    {% if non_passengers %}
        <h2>Add a Passenger</h2>
        <form action="{% url 'book' flight.id %}" method="post">
            {% csrf_token %}
            <select name="passenger">
                {% for passenger in non_passengers %}
                    <option value="{{ passenger.id }}">{{ passenger }}</option>
                {% endfor %}
            </select>
            <input type="submit" value="Book Flight" />
        </form>
    {% else %}
        <div>No passengers to add.</div>
    {% endif %}
    <a href="{% url 'index' %}">Back to full listing.</a>
{% endblock %}
```

### `airline/flights/templates/flights/index.html`
```HTML
{% extends "flights/base.html" %}

{% block title %}
    Flights
{% endblock %}

{% block body %}
    <h1>Flights</h1>

    {% for flight in flights %}
        <li>
            <a href="{% url 'flight' flight.id %}">
                Flight #{{ flight.id }}: {{ flight.origin }} to {{ flight.destination }}
            </a>
        </li>
    {% endfor %}
{% endblock %}
```

##  authentication

### `authentication/authentication/urls.py`
```py
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("", include("users.urls")),
    path("admin/", admin.site.urls),
]
```


### `authentication/users/apps.py`
```py
from django.apps import AppConfig


class UsersConfig(AppConfig):
    name = 'users'
```

### `authentication/users/urls.py`
```py
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout")
]
```


### `authentication/ursers/views.py`
```py
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

# Create your views here.

def index(request):
    if not request.user.is_authenticated:
        return render(request, "users/login.html", {"message": None})
    context = {
        "user": request.user
    }
    return render(request, "users/user.html", context)

def login_view(request):
    username = request.POST["username"]
    password = request.POST["password"]
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "users/login.html", {"message": "Invalid credentials."})

def logout_view(request):
    logout(request)
    return render(request, "users/login.html", {"message": "Logged out."})
```

### `authentication/users/templates/users/base.html`
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Users</title>
    </head>
    <body>
        {% block body %}
        {% endblock %}
    </body>
</html>
```

### `authentication/users/templates/users/login.html`
```html
{% extends "users/base.html" %}

{% block body %}
<h1>Login</h1>
{% if message %}
    <div>
        {{ message }}
    </div>
{% endif %}
<form action="{% url 'login' %}" method="post">
    {% csrf_token %}
    <input name="username" type="text"/>
    <input name="password" type="password"/>
    <input type="submit" value="Login"/>
</form>
{% endblock %}
```

### `authentication/users/templates/users/user.html`
```html
{% extends "users/base.html" %}

{% block body %}
<h1>Hello, {{ user.first_name }}</h1>
<ul>
    <li>Currently logged in as: {{ user.username }}</li>
    <li><a href="{% url 'logout' %}">Logout</a></li>
</ul>
{% endblock %}
```

##  mysite

### `mysite/mysite/urls.py`
```py
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("", include("hello.urls")),
    path("admin/", admin.site.urls)
]
```

### `mysite/hello/apps.py`
```py
from django.apps import AppConfig


class HelloConfig(AppConfig):
    name = 'hello'
```

### `mysite/hello/urls.py`
```py
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index),
    path("second", views.second)
]
```

### `mysite/hello/views.py`
```py
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return HttpResponse("Hello, world!")

def second(request):
    return HttpResponse("Second page")
```

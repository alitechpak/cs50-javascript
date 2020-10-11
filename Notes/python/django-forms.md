Django forms
=================

Some important links
*   [Working with django forms](https://docs.djangoproject.com/en/3.0/topics/forms/)


In HTML, **Form** is a collection of elements inside `<form>...</form>`

A form must specify these things:
*   _where_: the `URL` to which the data corresponding to the user's input should be returned
*   _how_: the `HTTP` method the data should be returned by
*   \<input>\: `<input>` elements


##  `GET` and `POST`
-   **GET** request should be used only for requests that do not affect the state of the system.
    -   **DOs**
        -   Search form, because the URLs that represent a **GET** request can easily be bookmarked, shared, or resubmitted.

    -   **DON'Ts**
        -   Password form, because password would appear in the URL, and thus in browser history and server logs, all in plain text.
        -   Large quantities of data
        -   Binary data, such as an image
        -   Admin forms
-   **POST** request could be used to change the state of the system, for example
    -   A request that makes changes in the database

##  Building a form in Django

`forms.py`
```py
from django import forms

class NameForm(forms.Form):
    your_name = forms.CharField(label='Your Name', max_length=100)
```
*   `label` value will appear in the `<label>` when it's rendered
*   `max_length` field defines the max allowable length of chars


### Django forms fields represented
*   `CharField` by an `<input type="text">`
*   `EmailField` by an `<input type="email">`
*   `BooleanField(null=False)` by an `<input type="checkbox">`

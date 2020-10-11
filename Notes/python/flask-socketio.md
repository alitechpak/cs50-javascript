#   flask-SocketIO
<style>
    code {
        color: rgb(230, 0, 0);
    }
</style>
##  Documentation
*   [flask-SocketIO](https://flask-socketio.readthedocs.io/en/latest/) Documentation

##  Installation
`pip install flask-socketio`

## Requirements
*   [eventlet](http://eventlet.net/) is best performant option.
    *   `pip install eventlet`
*   [gevent]() is supported in a number of different configurations.
    *   `pip install gevent`

## Initialization
```python
from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)


if __name__ == '__main__':
    socketio.run(app)
```

The application must serve a page to the client that loads the Socket.IO library and establishes a connection:
```js
<script src="//cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js" integrity="sha256-yr4fRk/GU1ehYJPAs8P4JlTgu0Hdsp4ZKrx8bDEDC3I=" crossorigin="anonymous"></script>
<script type="text/javascript" charset="utf-8">
    // Connect to the Socket.IO server.
    // The connection URL has the following format:
    //  http[s]://<domain>:<port>[/<namespace>]
    var socket = io.connect('http://' + document.domain + ':' + location.port + namespace);
or
    var socket = io.connect('http://' + document.domain) + ':' + location.port + namespace,
        {'path': '/test_socket.io'});
or
    var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port);

    // When connected, configure function
    socket.on('connect', function() {

        // Here variable for `data` may also be configured.
        socket.emit('my event', {data: 'I\'m connected!'});
    });
</script>
```

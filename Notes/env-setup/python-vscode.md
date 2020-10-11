#   Getting Started with Python in Visual Studio code
<style>
    code {
        color: rgb(230,0,0);
    }
</style>
##  [Getting Started with Python in VS Code Tutorial](https://code.visualstudio.com/docs/python/python-tutorial)
*   Download and install [vscode](https://code.visualstudio.com/) and instructions are [here](./WSL-vscode-ubuntu.md)
*   Download and install [python3](https://www.python.org/downloads/)
*   [VS Code Python extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python)

##   Install Extensions
*   Go to extensions and install `python extension` in vscode
*   Install `python linter` ext.

### Make a hello app
*   `mkdir <dir>`: make directory
*   `touch hello.py`: make file
*   `Ctrl+Shift+P` and type `python: Create Terminal`
*   ```python
        print("Hello World!")
    ```
    *   and hit run button

##  VSCODE COMMANDS
*   `Ctrl+Shift+P`: Command Palette

##  Virtual Environment
*   Create and Activate `venv` follow [venv](./pip.md)

##  Debugging
*   Insert the `Breakpoint` on a line or press `F9`

### Method (First Time)
*   Go to toolbar in hit `Start Debugging`
    *   Select **Debug Configuration** e.g. `Python File` or `Flask` or `Django` etc
    *   Enter the path to file e.g. `ParentFolder/app.py`
*   Hit **Enter** Debugging will Start

### Method (After First Time)
*   Go to Debugger or `Ctrl + Shift + D`
*   Go to `Add Configuration`
*   Select **Debug Configuration** e.g. This case `Flask` but `Python File` or `Django` etc
*   Enter the path to file e.g. `<ParentFolder>/<app>.py`
*   Click on gear icon to open `launch.json` File
*   `"name"` should `"Python: Flask"`
*   `"module"` should `"flask"` which tells vscode to run Python with `-m flask`
*   `"FLASK_APP"` should `"<ParentFolder>/<app>.py"`
*   **Note:** if `"FLASK_APP": ${workspaceFolder}/app.py`, change as above

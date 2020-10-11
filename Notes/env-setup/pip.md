#   Install `pip` and `env` in Ubuntu 20.04 LTS release
<style>
    code {
        color: rgb(230, 0, 0);
    }
</style>
##  Install **python3** and **pip3**
*   `python3 -V` or `python3 --version`: check and confirm if python is installed
*   `sudo apt update`: update the ubuntu repository
*   `sudo apt-get install -y python3-pip`: Install pip3
    *   `-y`: is yes to prompt
    *   `pip3 -V` or `pip3 --version`: Confirm version
*   `pip3 install requests`: Install any package on ubuntu for checking only
*   Additional optional tools
    *   `sudo apt install build-essentials libssl-dev libffi-dev python3-dev`

##  Virtual Environment

**Action**      | **Windows**                   | **Mac/Linux**
---             | ---                           | ---
install         |                               | `sudo apt-get install -y python3-venv`
Create          | `py -3 -m venv env`           | `python3 -m venv env`
Activate        | `env\scripts\activate`__*__   | `source env/bin/activate`
Activate        | ``Ctrl + Shift +` ``          |
Deactivate      |   `deactivate`                | `deactivate`

**NOTE**: When creating virtual environment last argument `python3 -m venv` **`env`** is the name of directory to create virtual environment in.

__*__ If the activate command generates the message "Activate.ps1 is not digitally signed. You cannot run this script on the current system.", then temporarily change the PowerShell execution policy to allow scripts to run, by
`Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process`

### If creating or activating venv gives this error

```The virtual environment was not created successfully because ensurepip is not
available.  On Debian/Ubuntu systems, you need to install the python3-venv
package using the following command.
    apt-get install python3-venv
You may need to use sudo with that command.  After installing the python3-venv
package, recreate your virtual environment.
Failing command: ['/mnt/e/cs50/web/practice/test/.env/bin/python3', '-Im', 'ensurepip', '--upgrade', '--default-pip']
```
*   **Lesson**: I wasted my almost three unsuccessful days to fix this problem, then I decided to leave *ubuntu* and switch to *windows*
    *   **What I did**
        *   Open **PowerShell**
        *   Go to directory
        *   Create venv by `py -3 -m venv env`
        *   Activate venv by `env\scripts\activate`
        *   Here activate command generated the message "Activate.ps1 is not digitally signed. You cannot run this script on the current system."
        *   Then temporarily change the PowerShell execution policy to allow scripts to run, by
        *   `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process`
        *   Activate again `env\scripts\activate`
        *   **Congratulations** venv activated successfully.
        *   Restart PC
        *   Open **vscode** in **WSL** as described above
        *   Create and activate `venv` in ubuntu.

__Note:__ Within python3 venv, you can use `python` instead of `python3` and `pip` instead of `pip3`.


##  Usage `pip3 <command> [options]`
*   `pip help`: list out _Commands_ and _General Options_
*   `pip3 install <package>`: Install package
*   `pip install -r requirements.txt`: Install all packages listed in file 'requirements.txt'

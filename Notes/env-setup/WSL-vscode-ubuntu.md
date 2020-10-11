<style>
    code {
        color: rgb(230, 0, 0);
    }
</style>

#   Windows Subsystem for Linux in Visual Studio Code

## Installation
*   Install the [Windows Subsystem for Linux](https://docs.microsoft.com/windows/wsl/install-win10) and [ubuntu](https://www.microsoft.com/en-pk/p/ubuntu-2004-lts/9n6svws3rx71#activetab=pivot:overviewtab)
*   Install [Visual Studio Code](https://code.visualstudio.com/)
> During Installation, be sure to check the **`Add to PATH`** option

*   Install the [Remote Development extension pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

## `ubuntu` Installation
*   When it prompts `Ener new UNIX username:`
    *   Don't use capital letters otherwise it will give following error
        * ```
          adduser: Please enter a username matching the regular expression configured
          via the NAME_REGEX[_SYSTEM] configuration variable.  Use the `--force-badname'
          option to relax this check or reconfigure NAME_REGEX.
          ```

    *   Enter `New password:` when prompted

##  Open a remote folder from the WSL Terminal
*   Open `command prompt` or `PowerShell`
*   Go to any folder and type `wsl` **WSL Terminal** will open

    *   Windows filesystem mounts like `/mnt/c`
*   Type **`code .`** in the terminal.
    *   When doing this first time, you should see VS Code fetching components needed to run in WSL.
    > **NOTE** If this command does not work,
        >   Restart you terminal **OR**
        >   You may not have added VS Code to your path when it was installed.

*   After a moment, a new VS Code window will appear and you can see a WSL indicator in the bottom left corner.
*   Install python extension in `Linux`

## Alternatively From VS code
*   Start VS Code.
*   Press `F1`
    *   Select **Remote-WSL: New Window** for the default distro
    *   Select **Remote-WSL: New Window using Distro** for a specific distro
*   Use the File menu to open your folder
*   [Git related line ending issue](https://code.visualstudio.com/docs/remote/wsl#_working-with-git)

##  Opening a terminal in WSL
*   Once folder is opened in WSL
    *   Windows filesystem mounts like `/mnt/c`
    *   **Terminal > New Terminal)**
*   Number of operations can be performed from this same terminal
    *   Type `code --help` to see what options are available

*   Open `git bash`
*   `git clone https://github.com/miguelgrinberg/flasky`: clone the repository
*   `cd` to `flasky` directory
*   **Create** and **Activate** virtual environment
*   `pip3 install -r requirements/div.txt`: install requirements

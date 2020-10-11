<style>
    code {
        color: rgb(230, 0, 0);
    }
</style>
#   CS50 Web Development by Python and JavaScript

##  How to submit projects via GitHub
*   Login to [GitHub](https://github.com/)
*   __Authorize cs50__ link can be found under *How to Submit*
*   Make sure you have a repository (working tree clean)
*   `git checkout -b web50/projects/2020/x/1`: switch to new branch
    *   `git status`
*   `git add .`
    *   `sudo git add .`: if on mac
    *   `git status`
*   `git commit -m "<message>"`
*   `git push https://github.com/me50/USERNAME.git`

__OR__
*   Create a new folder for `master branch`
    *   `cd <new folder>`: change directory to `new folder`
*   `git init`: initiate a git repository
*   `git clone https://github.com/me50/alitechpak`: clone the master branch
    *   `git status`: On branch master
    *   `ls`: list items
*   `cd alitechpak`: change directory to subfolder
    *   `git branch`: check available branches
    *   `git status`: On branch `something`
*   `git checkout -b <branch>`: Crate a new branch
    *   `git branch`: New `<branch>` should be visible in status
*   Delete all existing files and folders.
*   Paste all project files and folders
    *   `git status`: Changes not staged for commit
*   `git add .`: Add all files
*   `git commit =m "<message>"`: commit about changes
*   `git push`: **warning** message = The current branch "xyz" has no upstream branch.
    *   `git push --set-upstream origin <current branch>`: Set upstream (online) branch

##  ONLINE Method

*   __Authorize cs50__ link can be found under *How to Submit*
*   Manually create a branch in me50/USERNAME.git
*   Drag and drop the files into the branch

<style>
    code {
        color: rgb(230, 0, 0);
    }
    b code {
        font-size: 16px;
        color: blue;
        font-weight: bolder;
    }
</style>
-   [Git](#git-is-version-control-software-that)
-   [GitHub](#github-is-a-website-that)
-   [Git Installation](#install-git)
-   [Git Commands](#git-commands)
-   [GitHub Glossary](#github-glossary)
    -   [`branch`](#branch)


#   Git and Github

##   __Git__ is Version Control Software that
*   Keep track of changes made to code
*   Synchronize code between different people
*   Test changes to code without losing the original
*   Revert back to old versions of code

##  __GitHub__ is a website that
*   Stores Git repositories on the internet
*   __Repository__ is a place to keep track of code and all the changes to code.

##  [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
*   `sudo apt install git-all`: Install **git** on Linux.
    *   `git --version`: check and confirm git version.

##  Getting Started

### Clone Repository
*   [Create a new repository](https://github.com/new)
    *   Repository name*
    *   Description(optional)
    *   Initialize this repository with README (check this option)
    *   Create repository
*   `git clone https://github.com/<username>/<repository_name>`: clone the repository from github to local
*   `cd <repository_name>`: change directory to `repository`.
*   Now files can be modified, added, deleted.
*   `git add .`: add all repo files.
    *   `git add <file_name>`: add specific file.
*   `git commit -m "<message>"`: commit changes.
*   `git commit -am "<message>"`: this command work do both jobs, `add` and `commit`.
*   `git push`: push all files local to remote.

### Create on command line
*   [Create a new repository](https://github.com/new)
    *   Repository name*
    *   Description(optional)
    *   Initialize this repository with README (check this option)
    *   Create repository
*   `echo " #<repository_name>" >> README.md`: create a README file inside the directory
*   `git init`: Initialize the git repository
*   `git add .`: Add files.
*   `git commit -m "first commit"`: Commit
*   `git remote add origin https://github.com/<username>/<repository_name>.git`: link to remote(github)
    *   `git remote -v`: verify files local and remote.
*   `git push -u origin master`: push all files

### Create a repo right from CLI
*   `git remote remove origin`: It disconnect the origin(remote) from master(local)
*   `git remote add origin https://github.com/<username>/<repo>.git`: Add to another remote repository.
*   `git pull origin master --allow-unrelated-histories`: to kill the conflicts.
*   `git push origin master`: push all local files to online.

### Disconnect a repo from remote
*   

### Merge changes made online
*   `git fetch origin master`: fetch all changes.
*   `git merge origin/master`: merge all changes with local.
    *   If conflicts are to be resolved, then above commands are used.
*   `git pull`: this command is equal to both `git fetch` and `git merge`.
    *   If conflicts are known then `git pull` is used.

##  Git Commands:
*   `git clone <url>`: Downloads the repository from server(like GitHub)
*   `git add <filename(s)>`: Add files to staging area to be included in the next commit
*   `git commit -m "message"`: Save the repository with a message
*   `git commit -am <filename(s)> "message"`: Add files and commit changes all in one
*   `git status`: Print what is currently going on with the repository
*   `git push`: Push any local changes (commits) to a remote server
*   `git pull`: Pull any remote changes from a remote server to a local computer
-   `git log`: Print a history of all the commits
-   `git reflog`: Print a list of all the different references to commits
-   `git reset --hard <commit>`: Reset the repository to a given commit
-   `git reset --hard origin/master`: Reset the repository to its original state (e.g. the version cloned from GitHub)

### `git pull`
-   When combining different versions of code using `git pull`
    *   A merge conflict can occur
        *   If different versions have different data in the same location
*   Git will try to take care of merging automatically
*   But if two users edit then
    *   a merge conflict will have to be manually resolved
*   __To Resolve__
    *   Simply locally remove all lines and code that are not wanted
    *   Push the results


### Branching
*   'Branching' is a feature of Git that allows a project to
    *   Move in multiple different directions simultaneously.
*   There is one `master` branch
    *   That is always usable
*   Any number of new branches can be created to develop new features.
    *   Once ready, these branched can then be merged back into `master`.
*   __`HEAD`__: refers to the current branch being worked on
*   When a different branch in `checked out`, the `HEAD` changes to indicate the new working branch
*   When merging a branch back into `master`,
    *   There is a possibility for merge conflicts to arise.
    *   These can be resolved in the same way discussed above
*   `git branch`: list all the branches currently in a repository
*   `git checkout -b <new branch name>`: Create a new branch and switch to new branch
*   `git branch <name>`: create a new branch called `name`
*   `git checkout <name>`: switch current working branch to `name`
*   `git merge <name>`: merge branch `name` into current working branch (normally `master`)
*   `git fetch`: download all of teh latest commits from a remote to a local device
*   `git merge origin/master`: merge `origin/master`, which is the remote version of a repository normally downloaded with `git fetch`, into the local, preexisting `master` branch
*   `git branch -r`: List of  New upstream updates will be fetched into "remote-tracking branches" named `origin/name-of-upstream-branch`


## GitHub Glossary
<b>`branch`</b>: A "branch" is an active and parallel line of development, which can be merged back into `master`

<b>`checkout`</b>:

<b>`dirty`</b>: A working tree is said to be `dirty` if it contains modifications which have not been committed to the current branch.

<b>`fetch`</b>: Fetching a `branch` means tp get the branch's `head ref` from a `remote` repository

<b>`head`</b>
A named reference to the commit at the tip of a `branch`. Heads are stored in a file `$ GIT_DIR/refs/heads/` directory, except when using packed refs.

<b>`HEAD`</b>
The current `branch`.

<b>`master`</b>:
The default development `branch`. In most cases, this contains the local development.

<b>`merge`</b>
As a verb: To bring the contents of another `branch` into the current `branch`. This is done by first `fetching` the `remote` `branch` and then merging the result into the current `branch`.

<b>`pull`</b>:
Pulling a `branch` means to `fetch` it and `merge` it.

<b>`push`</b>
Pushing a `branch` means to send your commited changes to a remote repository.

<b>`octopus`</b>
To `merge` more than two `branches`

<b>`origin`</b>
The default upstream (mostly online) `repository`.

<b>`overlay`</b>:
Only update and add files to the working directory, but don't delete them, similar to `cp -R`

<b>`repository`</b>
A collectin of `refs`

<b>`SCM`</b>
Source Code Management(tool).

<b>`submodule`</b>
A `repository` that holds the history of a separate project inside another repository (the latter of which is called `superproject`).

<b>`superproject`</b>
A `repository` that references repositories of other projects in its working tree as `submodule`. The `superproject` knows about the names(but does not hold copies of) commit objects of teh contained `submodule`.

<b>`LFS`</b>
Git Large File Storage. An open source Git extension for versioning large files.

<b>`master`</b>
The default development branch. Whenever you create a Git repository, a branch named `"master"` is created, and becomes teh active branch.

<b>`milestone`</b>
A way to track the progress on groups of issues or pull requests in a repository.

<b>`mirror`</b>
A new copy of a repository.

<b>`origin`</b>
The default upstream repository (`remote`) which the local repository was originally downloaded from

<b>`remote`</b>:
Version of repository or branch that is hosted on a server, most likely GitHub.com, not stored locally.

<b>`repository`</b>
A repository is a project's folder. It contains all of the project files (documentation, revision history etc).

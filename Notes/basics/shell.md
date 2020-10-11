<style>
    code {
        color: rgb(230, 0, 0);
    }
</style>
#   The Shell

##  The Shell
The shell is an effecient, textual interface to computer that
*   Allows to run programs
*   Give them input
*   Inspect their output in a semi-structured way

### bash
*   `bash` stands for __Bourne Again SHell__.

##  Using the shell
When launch terminal, it looks like
```bash
username@machine-name:~$
```
*   `~`: home directory
*   `$`: not root user

####    __`date`__ program
it print out the date and time
```bash
user@machine:~$ date
Thu 21 May 22:42:25 PKT 2020
```

####    __`echo`__ program
It print out the arguments
```bash
user@machine:~$ echo hello
hello
```
> **_NOTE_**: Spaces separates arguments

The shell parses the command by splitting it by whitespace.
If argument contains spaces or other special characters (e.g., a directory named "My Photos"), you can either quote the argument with `'` or `"` (`"My Photos"`), or excape just the relevant character with `\` (`My\ Photos`).


> **_NOTE:_**   The shell is a programming environment, just like Python or Ruby, and so it has variables, conditionals, loops and functions


*   `$PATH`: colon separated list of directories, the **shell** should search for programs when it is given a command

```bash
user@machine:~$ echo $PATH
/home/ali/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
```
We can bypass `$PATH` entirely by giving the *path* to the file we want to execute.
```bash
user@machine:~$ /bin/echo $PATH
/home/ali/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
```
*   __Environment Variables__:  Environment variables are things that are set whenever you start your shell, they're not thins you have to set every time you run your shell e.g.
    *   where is your home directory
    *   what is your username

*   __Absolute Path__: Fully determine the location of the file starts with `/`
*   __Relative Path__: Relative to the current working directory, which can be seen with `pwd`
    *   `pwd`: Print working directory

*   __`which` program__: Find out which file is executed for a given program name
```bash
user@machine:~$ which echo
/usr/bin/echo
```

##  Navigating in the Shell
A path on shell is a delimited list of directories,
*   Linux and macOS
    *   Separated by `/`.
    *   `/` is the "root" of the file system
*   Windows
    *   Separated by `\`.
    *   There is one root for each disk partition (e.g., `C:\`, `D:\`).


```bash
user@machine:~$ pwd
/home/user
user@machine:~$ cd /home
user@machine:/home$ pwd
/home
user@machine:/home$ cd ..
user@machine:/$ pwd
/
user@machine:/$ cd ./home
user@machine:/home$ pwd
/home
user@machine:/home$ cd user
ali@alibhai:~$ pwd
/home/user
user@machine:~$ ../../bin/echo hello
hello
```

*   __`ls`__:   list down all sub directories

### flags and options
Most commands accept flags and options (flags with values) that start with `-` to modify their behaviour.
*   Linux and macOS
    *   `-h` or `--help` flag
*   Windows
    *   `/?` flag

for example `ls --help`
```bash
user@machine:~$ ls --help
-l                         use a long listing format
```
```bash
user@machine:~$ ls -l /home
total 4
drwxr-xr-x 27 user user 4096 May 21 22:34 user
```

This gives us a bunch more information about each file or directory present. First,
*   The `d` at the beginning tells us that it (`home`) is a directory.
*   Then follow three groups of three characters (`rwx`). These indicate what permissions have been set respectively
    *   The owner (`machine`),
    *   The owning group (`user`), and
    *   Everyone else
*   `w`: write permission
    *   add file
    *   remove file
    *   save file
    *   rename directory
    *   create directory
*   `x`: execute permission
    *   e.g. `echo` program execution
    *   search in directory
*   `r`: read permission
    *   To list contents of directory
    *   To read contents of file
*   `-` Means that you don't have any permission.

### Connecting programs
Normally, a program's input and output are both your terminal. That is, keyboard as input and screen as output. However, these streams can be rewired.

*   `<`:    rewire as input
    *   `< file`
*   `>`:    rewire as output
    *   `> file`
*   `cat`: prints the content of a file
    *   `cat hello.txt`
    *   `cat < hello.txt`:  take input from hello.txt
    *   `cat < hello.txt > hello2.txt` take input from hello.txt and print out(output) to hello2.txt. It is the copy of original file.
*   `>>`:   append
    *   ```bash
        user@machine:~$ cat < hello.txt >> hello2.txt
        user@machine:~$ cat hello2.txt
        hello
        hello    
        ```
*   `|`: pipe operator takes the output of left and gives the output to right.
    *   ```bash
    user@machine:~$ curl --head --silent google.com   
    HTTP/1.1 301 Moved Permanently
    Location: http://www.google.com/
    Content-Type: text/html; charset=UTF-8
    Date: Sat, 23 May 2020 01:21:06 GMT
    Expires: Mon, 22 Jun 2020 01:21:06 GMT
    Cache-Control: public, max-age=2592000
    Server: gws
    Content-Length: 219
    X-XSS-Protection: 0
    X-Frame-Options: SAMEORIGIN
    ```
    *   ```bash
    user@machine:~$ curl --head --silent google.com | grep -i content-length
    Content-Length: 219
    ```
    *   ```bash
    user@machine:~$ curl --head --silent google.com | grep -i content-length | cut --delimiter=' ' -f2
    219
    ```

### root user
*   __root user__:  "root" user is special.
    *   The root user is above (almost) all access restrictions
        *   create
        *   read
        *   update
        *   delete any file
    *   Usually user don't log into system as the "root" user.
    *   `sudo` command is used instead
    *   `sudo` means **do** as **su**. (short for "super user", or "root")
*   `sudo su`: Go as root user.
    *   `exit`: exit from root user
    *   ```bash
        user@machine:~$ sudo su
        [sudo] password for user:
        root@machine:/home/user#
        ```

##      Shell Scripting
*   MOst shells have their own scripting language with variables, control flow and its own syntax.
*   Permitives in shell scripting
    *   Creating command piplines
    *   Saving results into files
    *   Reading from standard input
*   We will focus on `bash` scripting since it is the most common.
*   __Define variables__
    *   Syntax `foo=bar` or `variable=value`
        *   `foo = bar` will not work, since it is interpreted as calling the `foo` program with arguments `=` and `bar`.

*   __Define String__
    *   Strings can be defined with `'` and `"` delimiters.
    ```bash
    foo=ber
    echo "$foo" # prints bar
    bar
    echo '$foo' # prints $foo
    $foo
    ```
*   __functions in bash__
    *   `bash` has functions that take arguments and can operate with them e.g. `if`, `case`, `while`, `for`
    *   function that creates a directory and `cd`s into it
        *   Create a file `mcd.sh` and inside the file write
        ```bash
        mcd() {
            mkdir -p "$1"
            cd "$1"
        }
        ```
        *   `source mcd.sh`: load or define the function
        *   `mcd test`: call the function in command line
        ```bash
        user@machine:~/Desktop$ source mcd.sh # Load the function
        user@machine:~/Desktop$ mcd test #  Call the function `test` folder has been created `cd`
        user@machine:~/Desktop/test$
        ```
    *   Here `$1` is the first argument to the function.
    *   Some special variables.
        *   `$0` - Name of the Script
        *   `$1` to `$9` - Arguments to the script. `$1` is the first argument and so on.
        *   `$@` - All the arguments.
        *   `$#` - Number of arguments.
        *   `$?` - Return code of the previous command.
        *   `$$` - Process identification number (PID) for the current script.
        *   `!!` - Entire last command, including arguments. A common pattern is to execute a command only for it to fail due to missing permissions; you can quickly re-execute the command with sudo by doing `sudo !!`.
            *
            ```bash
            user@machine:~$ mkdir /mnt/new
            mkdir: cannot create directory ‘/mnt/new’: Permission denied

            user@machine:~$ sudo !!
            ```
            Here `sudo !!` is equal to `sudo mkdir /mnt/new`
        *   `$_` - Last argument from the last command. If you are in an interactive shell, you can also quickly get this value by typing `Esc` followed by `.`.

###     Return Codes
-   Commands oftenly return output using `STDOUT`,  errors through `STDERR`, and a return code to report errors in a more script-friendly manner.
    -   `0` means everything went OK
    -   Anything different from `0` means error
-   Exit codes can be used to conditionally execute commands using
    -   `&&` (and operator) and.
    -   `||` (or operator).
    -   `;` semicolon separate commands in same line.
    -   `true` program will return `0` code
    -   `false` program will return `1` or other than `0` code.
    *   

    ```bash
    user@machine:~$ grep foobar mcd.sh
    user@machine:~$ echo $?
    1

    user@machine:~$ true
    user@machine:~$ echo $?
    0

    user@machine:~$ false
    user@machine:~$ echo $?
    1

    user@machine:~$ true || echo "Oops fail"
    user@machine:~$ echo $?
    Oops fail

    user@machine:~$ true || echo "Will not be printed"
    user@machine:~$ echo $?

    user@machine:~$ false ; echo "This will always print"
    This will always print
    # and so on...
    ```

*    __Command Substitution__
    *   Command substitution is to get the output of a command as a variable.
    *   Syntax `$(cmd)`
        *   for example
        ```bash
        user@machine:~$ pwd
        /home/user
        user@machine:~$ foo=$(pwd)
        user@machine:~$ echo $foo
        /home/user
        ```
*   __Process Substitution__
    *   `<(cmd)` will execute `CMD` and place the output in a temporary file and substitute the `<()` with that file's name.
    *   e.g. following command will show differences between files in dirs `foo` and `bar`.
    ```bash
    user@machine:~$ diff <(ls foo) <(ls bar)
    ```

### Shell Globbing
*   The bash shell feature that is used for matching or expanding specific types of patterns.
*   Globbing is mainly used to
    *   Match filenames or
    *   Searching for content in a file.

*   __Wildcards__: Wildcards characters are used to create the pattern.
    *   __Question Mark `?`__:    match any single or multiple characters.
        *   for example

        ```bash
        user@machine:~$ ls -l ????.txt
        -rw-rw-r-- 1 ali ali 6 May 23 05:58 test.txt
        ```
        *   `????.txt` for `test.txt`
        *   `foot????.doc` for `football.doc`
        *   `best.???` for `best.doc`

    *   __Asterisk `*`__:    select all characters
        *   `*.py` for `allfiles.py`
        *   `a*.*` for `art.sh` , `act.py` etc
    *   __Square Bracket `[]`__: match the character from the range, some mostly used range declarations are mentioned below.
        *   `[:upper:]` or `[A-Z]`: all uppercase alphabets
        *   `[:lower:]` or `[a-z]`: all lowercase alphabets
        *   `[:digit:]` or `[0-9]`: all numeric digits
        *   `[:alpha:]` or `[a-zA-Z]`: all alphabets
        *   `[:alnum:]` or `[a-zA-Z0-9]`: all alphabets and digits
    *   __Caret `^`__:
    *   __Exclamatory Sign `!`__:
    *   __Dollar Sign `$`__:
    *   __Curly bracket `{}`__:
    *   __Pipe `|`__:
    

##  Basic Linux Shell Commands
>   __Note__:   For information about a program's arguments, give the `man` program a try. It takes an argument (the name of a program), and shows you its *manual page*.

*   `man`:  an interface to the system reference manuals
    *   `man man`
    *   `man ls`
    *   `man mkdir` etc
*   `~`: home directory
*   `$`: not root user
*   `-`: Previous directory
*   __`cd`__:   change directory
    *   __`cd -`__: Change directory to previous
    *   __`cd ~`__: Change directory to home
*   __`pw`__:   present working directory
*   __`.`__:    current directory
*   __`..`__:   parent directory
*   __`mv`__:   Move / rename a file
    *   `mv SOURCE DEST`
*   __`cp`__:   copy files and directories
    *   `cp SOURCE DEST`
*   __`rm`__:   remove files or directories
    *   `rm [OPTION]... [FILE]...`
*   __`rmdir`__:    remove empty directories
    *   `rmdir [OPTION]... DIRECTORY...`
*   __`mkdir`__:    Make directories
    *   `mkdir [OPTION]... DIRECTORY...`
*   __`touch`__: Create a file
    *   `touch index.html`: create a file index.html
*   __`#`__:    Starts a comment in bash
*   __`!`__:    Has a special meaning even within double-quoted string
*   __`xdg-open`__: Open a file in appropriate program
    *   `xdg-open index.html`

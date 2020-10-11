<style>
    code {
        color: rgb(230, 0, 0);
    }
</style>

#   Ubuntu

*   Install [Ubuntu](https://ubuntu.com/download/alternative-downloads) **LTS** (Long Term Support) Latest for Desktop
    *   Download `ubuntu` in [Deluge](https://deluge-torrent.org/)
    *   Download [rufus](https://rufus.ie/) and make <kbd>usb</kbd> bootable.
    *   Install ubuntu alongside windows
*   Run `sudo apt update`
*   Run `sudo apt upgrade`

##  Google Drive in Ubuntu
*   Open Terminal <kbd>Ctrl + Shift + T</kbd>
*   Install and authenticate __google-drive-ocamlfuse__
    *   `sudo add-apt-repository ppa:alessandro-strada/ppa`
        *   Press <kbd>Enter</kbd> When prompted
    *   `sudo apt-get update`
    *   `sudo apt-get install google-drive-ocamlfuse`
    *   `mkdir ~/<g-drive>`: Make a directory in home directory
    *   `google-drive-ocamlfuse ~/<g-drive>`: Mount the Google Drive in directory

##  Install Terminator
*   `sudo add-apt-repository ppa:gnome-terminator`
*   `sudo apt-get update`
*   `sudo apt-get install terminator`

##  Install Git
*   `sudo apt-get install git`: Install git

##  Install curl
*   `sudo apt install curl`: Install curl

##  Uninstall a package
*   `sudo apt purge <package name>`: Completely remove package
*   `snap remove <package name>`: If package was installed from snap

##  Adjust Volums
*   <kbd>Ctrl+Alt+T</kbd>: Open Terminal
*   `alsamixer`: and <kdb>Enter</kbd>
*   <kbd>F6</kbd>: Select sound card
    *   In my case `HDA Intel PCH`
*   <kbd>F5</kbd>: See all controls

>   Move round with left and right arrow keys.

>   Increase and decrease volume with up and down arrow keys.

>   Mute/Unmute with the <kbd>M</kbd> key.

for more details [Alaska](https://wiki.ubuntu.com/Audio/Alsamixer)


##  Background Noise Cancellation from Audio
1.  <kbd>Ctrl+Alt+T</kbd>: Open Terminal
2.  `sudo nano /etc/pulse/default.pa`:
3.  Add the following line anywhere in the file, but at the end is recommended.
    `load-module module-echo-cancel`
4.  `pulseaudio -k`: Reload PulseAudio, or simply restart the computer.
5.  Select the new Noise cancellation option from the Inpute Device Section

for more details on [askubuntu](https://askubuntu.com/questions/18958/realtime-noise-removal-with-pulseaudio)


##	USB drive not working
*	`sudo ntfsfix /dev/<drive_name>`: i.e. `sudo ntfsfix /dev/sdb1`

##  READ-ONLY FILE SYSTEM
*   Shut-down **ubuntu**
*   Login to Windows (which is installed alongside ubuntu)
*   Go to `Power Options` > `Additional power settings` > `Choose what the power buttons do`
    *   `Change settings that are currently unavailable`
    *   Disable `Turn on fast start-up (recommended)`
    *   Click on `Save Changes`
*   Shut-down `Windows`
*   Login to `Ubuntu` and enjoy with all permissions

##  Internet speed test via command-line
*   <kbd>Ctrl+alt+T</kbd>: Open Terminal
*   `sudo apt-get install python3-pip`: Install pip if not installed
*   `sudo pip3 install speedtest-cli`: Install speedtest-cli
*   `speedtest-cli`: Open speedtest-cli to check internet speed on command-line
*   `speedtest-cli --share`: All details to image


##  Flathub Installation
*   `sudo flatpak install flathub com.obsproject.Studio`
*   `flatpak run com.obsproject.Studio`
*   `sudo add-apt-repository ppa:graphics-drivers/ppa`
*   `sudo apt install nvidia-driver-440`

##  Install OBS Studio
*   `sudo apt install ffmpeg`:
*   `sudo add-apt-repository ppa:obsproject/obs-studio`:
*   `sudo apt update`:
*   `sudo apt install obs-studio`:


##  Install VLC Media Player
Using PPA
*   `sudo apt update`: update the repository
*   `sudo apt install vlc`: Install VLC

### Remove VLC
*   `sudo apt remove vlc`: Uninstall VLC

##  Install ClipGrab
*   `sudo sudo apt-get update && sudo apt-get upgrade`: Add repository
*   `sudo apt-get update && sudo apt-get upgrade`: Update and Upgrage APT List and Packages
*   `sudo apt-get install clipgrap`: Install ClipGrab


##  Install curl


##  Install nodejs
*   Got to [nodejs](https://nodejs.org/en/) website.
    *   Go to [Other Downloads](https://nodejs.org/en/download/current/)
    *   Go to [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/)
    *   Go to [Debian and Ubuntu based Linux distributions, Enterprise Linux/Fedora and Snap packages](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions-enterprise-linux-fedora-and-snap-packages)
    *   Go to __Snap packages__ [Node.js binary distributions](https://github.com/nodesource/distributions/blob/master/README.md)
    *   Go to [Installation Instructions](https://github.com/nodesource/distributions/blob/master/README.md#debinstall)

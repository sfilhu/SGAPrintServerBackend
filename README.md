<h1 align="center">
<br>
  <img src="icon.png" alt="GoBarber" width="200">
<br>
<br>
SGA Print Server
</h1>

<p align="center">A simple Nodejs application for local printing.</p>

<hr>

                                     

## Drivers USB
- For windows [Zadig](https://zadig.akeo.ie/)
- For linux [Cups](https://localhost:631/)
- Run with admin run `sudo su` in terminal


## Install Dependencies

**GIT**<br />
`sudo apt install git`<br />

**NODE/NPM**<br />
1. Run `sudo apt install curl`<br />
2. Run `curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -`<br />
3. Run `sudo apt install nodejs`.<br />

**NVM**<br />
1. Run `curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh -o install_nvm.sh`<br />
2. Run `bash install_nvm.sh`<br />
3. Run `source ~/.profile`<br />
4. Run `nvm install 8.13.0`<br />
5. Run `nvm alias default 8.13.0`<br />

**Visual Code (optional)**<br />
`sudo snap install --classic code`<br />


## Getting started

PS: It's very important run with admin! Run `sudo su` in terminal

1. Clone this repository<br />
`sudo apt-get install build-essential libudev-dev`
`git clone https://github.com/sfilhu/SGAPrintServerBeckend.git`<br />
2. `cd SGAPrintServerBeckend`<br />

3. Run `sudo npm i` to install project dependencies<br />
4. Run `sudo npm rebuild`<br />
4. Run `sudo npm run start`<br />
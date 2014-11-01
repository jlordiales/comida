#!/bin/bash
sudo apt-get -y install git 
cd /vagrant
npm install
nodejs server/server.js&

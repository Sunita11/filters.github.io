# filters.github.io

### Project start
- run "npm run dev"


### Nightwatch Installation
End to end integration setup using [nightwatchjs](http://nightwatchjs.org) , [Selenium Server](http://selenium-release.storage.googleapis.com/index.html?path=3.9/) and [Chrome Driver](https://chromedriver.storage.googleapis.com/index.html?path=2.41/).

```
## Pre-requisite
## Java Development Kit - https://www.oracle.com/technetwork/java/javase/downloads/index.html
##  

* cd filters.github.io
* mkdir bin
* cd bin
* wget http://selenium-release.storage.googleapis.com/3.9/selenium-server-standalone-3.9.1.jar
* MAC -  wget https://chromedriver.storage.googleapis.com/2.41/chromedriver_mac64.zip  
* Linux - wget https://chromedriver.storage.googleapis.com/2.41/chromedriver_linux64.zip
* MAC - unzip chromedriver_mac64.zip
* Linux - extract zip and move chrome driver file to bin folder
```
Once setup is done run the following command to execute the test cases.
```
* cd ../
* npm run test  // run in seperate tab
``` 
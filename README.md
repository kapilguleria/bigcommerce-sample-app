# To Get started

## 1st Step - Angular Setup

To run Angular application on your local system, you need to install below packaegs:

    1) NodeJS.
    2) Npm

For Ex. in ubuntu system, to install, open a terminal window and run the following command:

    1) sudo apt install nodejs
    2) sudo apt install npm

Link: https://nodejs.org/en/download/package-manager

Verify these are installed and check the installed version:

    1) node -v
    2) npm -v

### Need to Install the Angular CLI

To install the Angular CLI, run the following command:

`npm install -g @angular/cli`

### Clone the repo

    1) git clone https://github.com/hcorazao/bigcommerce-mean-sample-app.git
    2) cd bigcommerce-mean-sample-app

### After clonning need to Install npm packages

To Install the `npm` the packages are described in the `package.json`, run the following command:

`npm install`

### Create build

To create build, run the following command:

`ng build --prod`

### After build need to Add keys in .env

To add keys, Create a new .env file in root directory and add these lines:

    NODE_ENV=local
    SERVER_PORT=3000
    MEAN_FRONTEND=angular
    BC_LOCAL_ACCESS_TOKEN=#####
    BC_LOCAL_STORE_HASH=#####

### Get Keys

To get `BC_LOCAL_ACCESS_TOKEN` and `BC_LOCAL_STORE_HASH`

    1) [Login to Bigcommerce](https://login.bigcommerce.com/login)
    2) Navigate to: Advanced Setting > API Accounts
    3) Create Api Account.
    4) By creating account, it will display a popup with keys.  

update `BC_LOCAL_ACCESS_TOKEN` and `BC_LOCAL_STORE_HASH` in .env with yours.


## 2nd Step - Fork the sandbox

Once you have a [Developer Portal](https://login.bigcommerce.com/login) account and a store, To fork our app need to follow these steps:

    1) [Open CodeSandbox](https://codesandbox.io/s)
    2) Click on Create Sandbox
    3) Click on Node HTTP Server.
    4) Add following folder & files from your system:
        a) api
        b) dist
        c) .env
        d) app.js
    5) Replace `package.json` file with yours.
    6) Click Fork in the top right.
    7) Open api > routes > load.js
    8) Replace `YOUR_FORK` at line 24 with the fork you created by clicking Fork.

## 3rd Step - Register a draft app

To register a draft app in the Developer Portal using the sandbox’s app URL. need to follow these steps:

    1) [Login to the Developer Portal](https://login.bigcommerce.com/login)
    2) Click Create an App
    3) Give the app a name
    4) Click Technical
    5) Enter Auth Callback URL. Ex: https://{{YOUR_FORK}}.sse.codesandbox.io/auth
    6) Enter Load Callback URL. Ex: https://{{YOUR_FORK}}.sse.codesandbox.io/load
    7) Enter Uninstall Callback URL. Ex: https://{{YOUR_FORK}}.sse.codesandbox.io/uninstall
    8) Click Update & Close
    9) Click View Client ID – this is the app’s client_id and client_secret

Keep this tab open for the next step.

## 4th Step - Configure sandbox environment

After registering the app, enter the app’s credential’s and auth callback into your sandbox’s [environment variables](https://codesandbox.io/docs/secrets) (codesandbox.io):

    callback => https://{{YOUR_FORK}}.sse.codesandbox.io/auth
    client_id => the app’s client ID from the Developer Portal
    client_secret => the app’s client secret from the Developer Portal

## 5th Step - To Install the app

Log in to your store and navigate to: 
Apps > My Apps > My Draft Apps and install the app.

If everything is configured correctly, you should get an Authorization Successful message.
Navigate back to My Apps to see the list of installed apps.

Click Launch on the draft app to test the app.

Navigate back to My Apps and click Uninstall to test.

Congrats! You’ve created and installed your BigCommerce app.
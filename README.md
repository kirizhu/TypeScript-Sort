# TypeScript-Sort
Sorting algorithm using TS and working with the TS compiler

# Configuring the TS compiler

 $ mkdir src
 $ mkdir build
 $ tsc --init
 $ cd src && touch index.ts

  In tsconfig.js file
  
  "outDir": "./build" 
  "rootDir": "./src"

This redirects the compiled output to the build directory

 $ tsc -w to continuously compile all our code

# Configure concurrent compilation and execution

  open secondary terminal tab
 $ node build/index.js
 this will run the js file compiled from the ts file

  $ npm init -y
  $ npm i nodemon concurrently

  nodemon will be responsible for executing our code once compiled'
  concurrently helps us run multiple scripts at the same time in particularly a script to start up the TS compiler and a script for nodemon to execute that code.

# Adding scripts to package.json

  "start:build": "tsc -w",
  "start:run": "nodemon build/index.js",
  "start": "concurrently npm:start:*"

 npm start will run  all scripts matching 'start:*' and we are done automating the build/running process


# type guards
  use typeof and instanceof as type guards to lift union restrictions like  (collection : number[] |string) for example
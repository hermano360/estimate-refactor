# Instructions

In order to run answers.js there are a number of requirements before proceeding.

Because node does not come out-of-the-box with es6 syntax, you need to use a transpiler to use the newest features.

This demonstration assumes the use of the latest node version.
For my development environment, I am using node **v8.4.0**
If this is not the case, please upgrade to ensure consistency.

In order to use es6 syntax, the transpiler I have decided to use is **babel**.

In order to maintain the current level of dependencies in the repository, I have decided to use babel from the terminal, install the babel-cli by typing:
**npm i -g babel-cli**

To start, type:

**git clone https://github.com/startupdevs/node-basic-test-herminio_garcia.git**

then cd into the newly cloned directory with:

**cd node-basic-test-herminio_garcia**

In your terminal, type in the following command:

**babel-node --presets es2015 answers.js**

The output should match the following:

*1000*
*1*
*110*
*1 of 10*
*2 of 10*
*3 of 10*
*4 of 10*
*5 of 10*
*6 of 10*
*7 of 10*
*8 of 10*
*9 of 10*
*10 of 10*
*{ counter: 100 }*


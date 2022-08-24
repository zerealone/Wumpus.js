# Wumpus-js

A software language built with NodeJS.

## Installation

Run the following command in your shell :

```bash
npm i @ze-real-one/wumpusjs
```

## Usage

```js
const wumpus = require("@ze-real-one/wumpusjs");

wumpus.run({
    code: `SendToConsole('Hello World!');`
})
```
To run the following code, open your terminal and run :
```bash
node .
```

## Functions
#### NOTICE : This project is still in development, and it will take me some time to upgrade it.

### .run({})
This is the main function to start running your code.

Example usage :
```js
wumpus.run({
   code: `your code is here`
})
```

The code parameter is where you need write your code in the language.

### #NodeVersion
Returns the version of the node. Simple as that.

Example usage :
```js
wumpus.run({
   code: `SendToConsole('Your NodeJS Version Is #NodeVersion')`
})
```
If you want (like in the example) to send it to the console, you can't write this as another argument, only inside the `SendToConsole` function.

##### More functions coming soon!

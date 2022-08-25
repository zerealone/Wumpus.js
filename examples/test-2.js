const wumpus = require('@ze-real-one/wumpusjs');

wumpus.run({
    code: `
    <var.create> name = "Tom";
    SendToConsole("Hello,",<var.use> name,".")
    `
})

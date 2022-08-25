
//const fs = require("fs"); may be in the next update, the code will be in another file.

var prints = ""; //the prints
var nodeVers = ""; //the version of the node
var final = ""; //the final output of the "code"
var vars = ""; //the variables that are in the code
var varsUse = ""; //the use of the variables

exports.run = function({code}){ //the main run function
       prints = code.replaceAll('SendToConsole', 'console.log'); //the prints are being replaced to the js syntax
       nodeVers = prints.replaceAll('#NodeVersion', `${process.version}`); //the node version is being replaced
       vars = nodeVers.replaceAll('<var.create>', `var`); //the vars are being replaced to the js syntax
       varsUse = vars.replaceAll('<var.use>', ``) //the using of the vars are being replaced to the js syntax
       final = varsUse; //the final output
        //this is for debugging : console.log(final);
        eval(final);
}

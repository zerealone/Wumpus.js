var prints = "";
var nodeVers = "";
var final = "";
var version = process.version;
exports.run = function({code}){

    if(code.includes('#NodeVersion')==true){
        nodeVers = code.replaceAll('#NodeVersion', `${version}`);
        final = nodeVers;
    } else if (code.includes('SendToConsole')==true){
        prints = code.replaceAll('SendToConsole', 'console.log');
        final = prints;
    }

    if(both = true && code.includes('#NodeVersion') && code.includes('SendToConsole')==true){
       prints = code.replaceAll('SendToConsole', 'console.log');
       nodeVers = prints.replaceAll('#NodeVersion', `${version}`);
       final = nodeVers;
    }
        //console.log(final)
        eval(final);
}

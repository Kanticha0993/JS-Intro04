function criticalcode() {
    throw "trowing an exception";
}

function logError(theException) {
    console.log(theException);
}

//Try...catch
console.log("\n************try...catch***********");
try {
    criticalcode();
}   catch(ex) {
    console.log("Got an error");
    logError(ex);
}

//Throwing in try...catch
console.log("\n************Throwing in try...catch*********\n")

try{
    throw "An exception that is thrown every time";
}   catch (ex){
    console.log("Got an error");
    logError(ex);
}

//Try...catch..finaliy
console.log("\n********Try..catch..finally**********/n");

try {
    criticalCode();

}   catch (ex) {
    console.log("Got an error ");
    logError(ex);

}   finally {
    console.log("Code that always will run ");
}

function hello() {
    console.log("\n***********Throwing Exceptions**********\n");
}
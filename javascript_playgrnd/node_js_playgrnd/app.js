//function inside function
function callFunction(fun){
    fun();
}

//function expression
var sayHello = function(){
    console.log("Hello");
};
callFunction(sayHello);
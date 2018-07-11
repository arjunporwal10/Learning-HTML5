window.onload = function(){
    var str = "hello";
    var rever = reverse(str);
    console.log(rever);
    document.getElementById("result").innerHTML= rever;
}
function reverse(str){
    return str.split("").reverse().join("");
};
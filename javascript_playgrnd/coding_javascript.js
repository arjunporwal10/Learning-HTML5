
window.onload=function(){
    
   rnum=Math.floor((Math.random() * 10) + 1);
   console.log(rnum);
   document.getElementById('btnchk').addEventListener("click",checkguess);
}
var rnum;
function checkguess(e)
{
   var userguess = document.getElementById("guess").value;
   console.log(userguess);
   if(userguess == rnum)
   {
    document.getElementById('result').innerHTML="<h1>hello</h1>";
   }
   else
   {
    document.getElementById('result').innerHTML="<h1>wrrongs</h1>";
   }
}

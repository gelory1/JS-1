/**
 * Created by Administrator on 2018/1/14.
 */
var s = document.getElementsByClassName("sss");

 function sta(){
     var sss = document.getElementById("btn-start");
     sss.onclick = function () {
         window.clearTimeout(id2);
         window.clearTimeout(id3);
         ove();
         sta();
     }
     var arry = new Array();

for(var i=0;i<10;i++){
arry[i] = i;
}
var t1 = Math.floor(Math.random()*9);
var i1 = arry[t1];
arry.splice(t1,1);
var t2 = Math.floor(Math.random()*8);
var i2 = arry[t2];
 arry.splice(t2,1);
 var t3 = Math.floor(Math.random()*7);
 var i3 = arry[t3];
 arry.splice(t3,1);
    function bgc(){
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        return "rgb("+r+','+g+','+b+")";
    }
    s[i1].style.backgroundColor = bgc();
    s[i2].style.backgroundColor = bgc();
    s[i3].style.backgroundColor = bgc();
    var ss = document.getElementById("btn-over");
    var id3 = window.setTimeout("ove()",999);
    var id2 = window.setTimeout("sta()",1000);
    ss.onclick = function (){
    window.clearTimeout(id2);
    window.clearTimeout(id3);
    ove();
}
}
function ove(){
    for(var i=0;i<s.length;i++){
        s[i].style.backgroundColor = "rgb(254,165,0)";
    }
}



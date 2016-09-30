var button=document.getElementById('counter');
var c=0;
button.onclick=function(){
    alert("clicked"+counter);
    c=c+1;
    var span=document.getElementById('count');
    span.innerHTML=c.toString();
};

var butt=document.getElementById('counter');
var counter=0;
butt.onclick=function(){
    alert("clicked"+counter);
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};

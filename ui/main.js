var butt=document.getElementById('counter');
var counter=0;
butt.onclick=function(){
   
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};

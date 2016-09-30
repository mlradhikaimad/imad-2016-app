console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML="New Value";
var ele=document.getElementById('img1');
var marginLight=0;
var moveRight=function()
{
  marginLeft=marginLeft+10;
  ele.style.marginLeft=marginLeft+10+'x';
};
ele.onclick=function()
{
   
    alert("moving image");
   var interval=setInterval(marginLeft,100);
   
};

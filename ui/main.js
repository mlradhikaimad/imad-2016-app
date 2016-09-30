console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML="New Value";
var ele=document.getElementById('img1');
var marginLeft=0;
function moveRight()
{
  marginLeft=marginLeft+10;
  ele.style.marginLeft=marginLeft+10+'px';
}
ele.onclick=function()
{
   
    alert("moving image");
   var interval=setInterval(moveRight,100);
   
};

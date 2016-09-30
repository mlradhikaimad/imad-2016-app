console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML="New Value";
var ele=document.getElementById('img1');
var marginLeft=0;
function moveRight()
{
  marginLeft=marginLeft+50;
  ele.style.marginLeft=marginLeft+'px';
  alert(marginLeft);
}
ele.onclick=function()
{
   
    alert(margin);
    
   var interval=setInterval(moveRight,50);

   
};

console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML="New Value";
var ele=document.getElementById('img1');
var marginLeft=0;
function moveRight()
{
  marginLeft=marginLeft+50;
  ele.style.marginLeft=marginLeft+'px';
}
ele.onclick=function()
{
   
    alert("moving image");
   var interval=setInterval(moveRight,100);
   if (marginLeft>=1000)
   margiLeft=0
   
};

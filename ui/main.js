console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML="New Value";
var ele=document.getElementById('img1');
ele.onclick=function()
{
   
    alert("moving image");
   
    ele.style.marginLeft='0x';
};

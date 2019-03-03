var myImage = document.querySelector("#pic" );

myImage.onclick = function() 
{
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'p/aa.jpg') 
	myImage.setAttribute ('src','p/ab.jpg');
	 else if(mySrc === 'p/ab.jpg') 
	myImage.setAttribute ('src','p/c.jpg');
     else if(mySrc === 'p/c.jpg') 
	myImage.setAttribute ('src','p/d.jpg');
 else if(mySrc === 'p/d.jpg') 
	myImage.setAttribute ('src','p/e.jpg');
 else if(mySrc === 'p/e.jpg') 
	myImage.setAttribute ('src','p/f.jpg');
	
	else 
    myImage.setAttribute ('src','p/aa.jpg');
    
}
var myButton=document.getElementById('b2');
var myHeading=document.querySelector("h1");

if(!localStorage.getItem("name")){
	setUserName();
}else{
	var storedName=localStorage.getItem("name");
	myHeading.textContent="welcome to my profile,"
}
function setUserName(){
	var myName=prompt("please enter your name");
	localStorage.setItem("name",myName);
	myHeading.textContent="welcome to my profile,"
}
myButton.onclick=function(){
	setUserName();
}
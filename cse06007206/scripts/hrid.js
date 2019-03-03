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
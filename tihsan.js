var myImage = document.querySelector("#pic" );

myImage.onclick = function() 
{
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://www.animaatjes.nl/alfabetten/alfabetten/groen-met-poes/animaatjes-groen-met-poes-90780.gif') 
	myImage.setAttribute ('src','https://otkritkioks.ru/wp-content/uploads/2017/08/1392393430_1-heart.gif');
	 else if(mySrc === 'https://otkritkioks.ru/wp-content/uploads/2017/08/1392393430_1-heart.gif') 
	myImage.setAttribute ('src','https://cdn.dribbble.com/users/10009/screenshots/1114109/9u.gif');
     else if(mySrc === 'https://cdn.dribbble.com/users/10009/screenshots/1114109/9u.gif') 
	myImage.setAttribute ('src','tihsan.jpg');

	
	else 
    myImage.setAttribute ('src','https://www.animaatjes.nl/alfabetten/alfabetten/groen-met-poes/animaatjes-groen-met-poes-90780.gif');
    
}
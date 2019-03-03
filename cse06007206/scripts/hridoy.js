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


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'http://images5.fanpop.com/image/photos/28800000/diana-princess-diana-28887629-496-750.png') {
      myImage.setAttribute ('src','https://wallpapercave.com/wp/wp2081546.jpg');
    } else {
      myImage.setAttribute ('src','http://images5.fanpop.com/image/photos/28800000/diana-princess-diana-28887629-496-750.png');
    }
}
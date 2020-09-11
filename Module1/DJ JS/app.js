document.getElementById("div").addEventListener("mouseover",function(){
    document.getElementById("div").style.backgroundColor='blue';

    
});
//document.getElementById("div").addEventListener("onclickhold", function(){
//   document.getElementById("div").style.backgroundColor='red';
//});

//function mouseDown() {
 //   document.getElementById("div").style.backgroundColor='red';

//}

//function mouseUp() {
//    document.getElementById("div").style.backgroundColor='yellow';

//}
document.getElementById("div").addEventListener("mousedown", function(){
    document.getElementById("div").style.backgroundColor='red';
});
document.getElementById("div").addEventListener("mouseup", function(){
    document.getElementById("div").style.backgroundColor='yellow';
});
document.getElementById("div").addEventListener("dblclick", function(){
    document.getElementById("div").style.backgroundColor='green';
});
document.getElementById("div").addEventListener("mousewheel", function(){
    document.getElementById("div").style.backgroundColor='orange';
});

//Here is my attempt to get it to change colors on keydown
//document.addEventListener('keydown', logkey)
document.onkeypress = function colorchange(x)
{ 
    if (x.keyCode === 114) {
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++)
    {
      divs[i].style.backgroundColor = "red";
    }
    return;
  }
  else if (x.keyCode === 103)
  {
    var divs = document.getElementsByTagName("div");
    for(var i = 0; i < divs.length; i++)
    {
      divs[i].style.backgroundColor = "green";
    }
    return;
  }
  else if (x.keyCode === 121)
  {
    var divs = document.getElementsByTagName("div");
    for(var i = 0; i < divs.length; i++)
    {
      divs[i].style.backgroundColor = "yellow";
    }
    return;
  }
  else if (x.keyCode === 111)
  {
    var divs = document.getElementsByTagName("div");
    for(var i = 0; i < divs.length; i++)
    {
      divs[i].style.backgroundColor = "orange";
    }
    return;
  }
  else if (x.keyCode === 98)
  {
    var divs = document.getElementsByTagName("div");
    for(var i = 0; i < divs.length; i++)
    {
      divs[i].style.backgroundColor = "blue";
    }
    return;
  }
  else if (x.keyCode === 119)
  {
    var divs = document.getElementsByTagName("div");
    for(var i = 0; i < divs.length; i++)
    {
      divs[i].style.backgroundColor = "white";
    }
    return;
  }
  else 
  {
    alert("this key doesnt do anything")
  }
}
function next(){
  var img = document.getElementById("img");
  var img_src = img.src;
  var n = parseInt(img_src[(img_src.length)-5]);
  if (n == 5){
    n = 1;
  }
  else {
    n = n + 1;
  }
  img.src = img_src.substr(0,(img_src.length)-5) + n.toString() + ".jpg";
}

function previous(){
  var img = document.getElementById("img");
  var img_src = img.src;
  var n = parseInt(img_src[(img_src.length)-5]);
  if (n == 1){
    n = 5;
  }
  else {
    n = n - 1;
  }
  img.src = img_src.substr(0,(img_src.length)-5) + n.toString() + ".jpg";
}
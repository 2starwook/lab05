function update_val(){
  var para = document.getElementById("apple");
  var border = document.getElementById("input_border").value;
  var background_color = document.getElementById("input_background").value;
  switch (border){
    case "red":
      para.style.borderColor = "red";
      document.getElementById("input_border").value = "";
      break;
    case "green":
      para.style.borderColor = "green";
      document.getElementById("input_border").value = "";
      break;
    case "blue":
      para.style.borderColor = "blue";
      document.getElementById("input_border").value = "";
      break;
    default:
      para.style.borderWidth = border;
      document.getElementById("input_border").value = "";
  }
  switch (background_color){
    case "red":
      para.style.backgroundColor = "red";
      document.getElementById("input_background").value = ""
      break;
    case "green":
      para.style.backgroundColor = "green";
      document.getElementById("input_background").value = ""
      break;
    case "blue":
      para.style.backgroundColor = "blue";
      document.getElementById("input_background").value = ""
      break;
  }
}
function openFile(event) {
  event.preventDefault(); // Prevent form submission

  var pinbar = document.getElementById("pinbar").value;
 var select = document.getElementById("select").value;
 var imageContainer = document.getElementById("imageContainer");
 var error = document.getElementById("error");
var dowload = document.getElementById("dowload");
 if(select==='1year')
 {
  switch (pinbar) {
    case "22280-CM-001":
  imageContainer.innerHTML = '<img src="CME1styearAudisankaraStudentsList_page-0001.jpg" width="100%" alt="Result Image">';
  dowload.innerHTML='<input type="button" value="Dowload" onclick="dowload()">';
      break;
default :
 error.innerHTML='<p style="color:red">ERROR OCCURED</p>';
console.log(pinbar+"Inncorect Pin");
 break;
  }
}
else if(select==='4sem')
{
switch (pinbar) {
  case "21280-CM-005":
    imageContainer.innerHTML = '<img src="anvesh_page-0001.jpg" width="50%">';
    break;
  default:
  error.innerHTML='<p style="color:red" id="error">ERROR OCCURED</p>';
  break;
}
}
else {
  error.innerHTML='<p style="color:red">ERROR OCCURED</p>';
  console.log("Semester Not Selected");
}
}
function dowload()
{
window.open("pin1.pdf");
}

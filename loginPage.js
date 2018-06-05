
function login(username, password) {
  if(["jess", "alex", "Alex", "Jess"].includes(username)){
    if(["thomas", "hakoopian"].includes(password)){
      window.location='testPage.html';
  }else{
    alert("Username Wrong");
  }
}else{
  alert("Password Wrong");
}};

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

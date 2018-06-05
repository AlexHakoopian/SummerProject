
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

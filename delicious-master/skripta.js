


function turnoffLS() {
  var x = document.getElementById("loginbut");
  var y = document.getElementById("signupbut");
  var z = document.getElementById("logoutbut");
  x.style.display = "none";
  y.style.display = "none";
  z.style.display = "block";

}

function turnonLS() {
  var x = document.getElementById("loginbut");
  var y = document.getElementById("signupbut");
  var z = document.getElementById("logoutbut");
  x.style.display = "block";
  y.style.display = "block";
  z.style.display = "none";

}

function initHomePage() {
  getLanguage();
  korisnici = JSON.parse(localStorage.getItem("korisnici"));
  if (!sessionStorage.getItem("ulogovan"))
    document.getElementById("logoutbut").style.display = 'none';

  if (sessionStorage.getItem("ulogovan"))
    turnoffLS();

}

function initReceipesPage() {
  getLanguage();
  if (!sessionStorage.getItem("ulogovan"))
    document.getElementById("logoutbut").style.display = 'none';



  if (sessionStorage.getItem("ulogovan"))
    turnoffLS();


}

function myProfile() {

  let ulogovan = sessionStorage.getItem("ulogovan");
  if (!ulogovan)
    window.location.href = "login.html";
  else {

    window.location.href = "myprofile.html";

  }

}

function initMyprofile() {
  let ulogovan = sessionStorage.getItem("ulogovan");
  if (!ulogovan) {
    window.location.href = "login.html";
    return
  }
  document.getElementById("profileusername").innerText = JSON.parse(ulogovan).username;
  getLanguage();

  turnoffLS();
}

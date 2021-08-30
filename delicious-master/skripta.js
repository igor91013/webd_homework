


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

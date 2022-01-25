


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
  
  korisnik = { username: "_", password: "_" };
  korisnici.push(korisnik);
  if (localStorage.getItem("korisnici") == null) {
    localStorage.setItem("korisnici", JSON.stringify(korisnici));
  }
  korisnici = JSON.parse(localStorage.getItem("korisnici"));
  if (!sessionStorage.getItem("ulogovan"))
    document.getElementById("logoutbut").style.display = 'none';

  if (sessionStorage.getItem("ulogovan"))
    turnoffLS();
   

}

function initReceipesPage() {
  getLanguage();
  if (!sessionStorage.getItem("ulogovan")){
    document.getElementById("logoutbut").style.display = 'none';
  }



  if (sessionStorage.getItem("ulogovan"))
  {
    turnoffLS();
  }

    loadAllRecipes(JSON.parse(localStorage.getItem("recipes")));


}

function initAboutPage(){
  getLanguage();
  if (!sessionStorage.getItem("ulogovan"))
    document.getElementById("logoutbut").style.display = 'none';

  if (sessionStorage.getItem("ulogovan"))
    turnoffLS();
}

function initLoginPage(){
  initAboutPage();
}

function initSignupPage(){
  initAboutPage();
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
    
  }
  document.getElementById("profileusername").innerText = JSON.parse(ulogovan).username;
  getLanguage();

  if (ulogovan)
    turnoffLS();
}




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


  if (!sessionStorage.getItem("ulogovan"))
    document.getElementById("logoutbut").style.display = 'none';

  if (sessionStorage.getItem("ulogovan"))
    turnoffLS();


}

function initReceipesPage() {
  getLanguage();
  if (!sessionStorage.getItem("ulogovan")) {
    document.getElementById("logoutbut").style.display = 'none';
  }

  if (sessionStorage.getItem("ulogovan")) {
    turnoffLS();
  }
 

  loadRecipes(JSON.parse(localStorage.getItem("recipes")));
  if (localStorage.getItem("group"))
  setBreadcrumb()


}

function initAboutPage() {
  getLanguage();
  if (!sessionStorage.getItem("ulogovan"))
    document.getElementById("logoutbut").style.display = 'none';

  if (sessionStorage.getItem("ulogovan"))
    turnoffLS();
}

function initLoginPage() {
  initAboutPage();
}

function initSignupPage() {
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

function loadProfileRecipes(rcp) {


  loadedRecipes = [];
  let recipes = rcp;
  let ulogovan = sessionStorage.getItem("ulogovan");

  recipes.forEach(recipe => {
    if (recipe.author == JSON.parse(ulogovan).username) {
      let div1 = document.createElement("div");
      div1.className = "single-blog-area mb-80";
      let div2 = document.createElement("div");
      div2.className = "blog-thumbnail";
      let img1 = document.createElement("img");
      img1.src = recipe.thumbnail;

      let div2_1 = document.createElement("div");
      div2_1.className = "post-date border border-white p-2";
      let div2_1_1 = document.createElement("div");
      div2_1_1.className = "receipe-ratings text-center";
      let div2_1_1_1 = document.createElement("div");

      for (let i = 1; i <= 5; ++i) {
        let star = document.createElement("i");
        if (i <= parseInt(recipe.rating))
          star.className = "fa fa-star";
        else
          star.className = "fa fa-star-o";
        star.setAttribute("aria-hidden", "true");
        div2_1_1_1.appendChild(star);
      }

      div2_1_1.appendChild(div2_1_1_1);
      div2_1.appendChild(div2_1_1);


      let div3 = document.createElement("div");
      div3.className = "blog-content";
      let a1 = document.createElement("a")
      a1.href = "receipe-post.html";
      a1.setAttribute("onclick", "localStorage.setItem('recipe-data', '" + JSON.stringify(recipe) + "')");
      a1.className = "post-title";
      a1.innerHTML = recipe.title;
      let div4 = document.createElement("div");
      div4.className = "meta-data";


      let p1 = document.createElement("p");
      p1.innerHTML = "Difficulty: " + recipe.difficulty;
      let a2 = document.createElement("a");


      let a3 = document.createElement("a");
      a3.href = "#";
      a3.onclick = function () { deleteRecipe(recipe.id) }
      a3.className = "btn delicious-btn m-1";
      a3.textContent = "Delete";
      a3.setAttribute("data-lang", "delete");




      div3.appendChild(a1);
      div3.appendChild(div4);
      div3.appendChild(p1);

      div3.appendChild(a3);

      div2.appendChild(div2_1);
      div2.appendChild(img1);

      div1.appendChild(div2);
      div1.appendChild(div3);

      document.getElementById("profilerecipes").appendChild(div1);

      loadedRecipes.push(recipe);
    }
  });
}

function deleteRecipe(id) {

  let recipess = JSON.parse(localStorage.getItem("recipes"));

  let newrecipes = recipess.filter(function (ele) {
    return ele.id != id;
  });


  localStorage.setItem("recipes", JSON.stringify(newrecipes));
  document.location.reload();



}

function addRecipe() {
  let ulogovan = sessionStorage.getItem("ulogovan");
  let author = JSON.parse(ulogovan).username;

  let idRec = JSON.parse(localStorage.getItem("recipes")).length;
  let title = document.getElementById('rectitle').value;
  let text = document.getElementById('rectext').value;

  let type = document.querySelector('input[name="groupp"]:checked').value;
  let instruction = document.getElementById('recinstr').value.split(",");
  let length = document.getElementById('rectime').value;
  let difficulty = document.querySelector('input[name="diffic"]:checked').value;
  let ingredients = document.getElementById('recingr').value.split(",");

  let today = new Date();
  let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()


  if (title == null || instruction == null || length == null) {
    return alert("Molimo popunite potrebna polja")
  }

  let rec = { type: type, thumbnail: "images/added.jpg", title: title, date: date, author: author, text: text, rating: null, difficulty: difficulty, id: idRec, preparation: instruction, ingredients: ingredients, cooking: length, reviews: [] }

  let recipess = JSON.parse(localStorage.getItem("recipes"));
  recipess.push(rec);

  localStorage.setItem("recipes", JSON.stringify(recipess));
  console.log(localStorage.getItem("recipes"));



  return alert("Uspesno ste dodali recept");




}

function initRecipePost() {
  ulogovan = JSON.parse(sessionStorage.getItem("ulogovan"));
  let data = JSON.parse(localStorage.getItem("recipe-data"));
  loadRecipeData(data);

  let recipess = JSON.parse(localStorage.getItem("recipes"));


  getLanguage();

  if (ulogovan)
    turnoffLS();
  else
    turnonLS()

  setBcRp();
}



function initMyprofile() {
  let ulogovan = sessionStorage.getItem("ulogovan");
  if (!ulogovan) {
    window.location.href = "login.html";

  }
  let recipess = JSON.parse(localStorage.getItem("recipes"));


  document.getElementById("profileusername").innerText = JSON.parse(ulogovan).username;
  getLanguage();

  if (ulogovan)
    turnoffLS();
  loadProfileRecipes(JSON.parse(localStorage.getItem("recipes")));
}

function initAddRecipePage() {
  getLanguage();
  let ulogovan = sessionStorage.getItem("ulogovan");
  if (!ulogovan) {
    window.location.href = "login.html";

  }
  if (ulogovan)
    turnoffLS();
}



let recipes = 
[
    {
        type : "appetizer",
        thumbnail : "images/przenice.jpg",
        title : "Prženice",
        text : "Prženice"
    },

    {
        type : "appetizer",
        thumbnail : "images/kacamak.jpg",
        title : "Kačamak",
        text : "Kačamak"
    },

    {
        type : "appetizer",
        thumbnail : "images/proja.jpg",
        title : "Proja",
        text : "Proja"
    },

    {
        type : "maincourse",
        thumbnail : "images/sushi.jpg",
        title : "Suši",
        text : "Suši"
    },

    {
        type : "maincourse",
        thumbnail : "images/gulas.jpg",
        title : "Gulaš",
        text : "Gulaš"
    },

    {
        type : "maincourse",
        thumbnail : "images/musaka.jpg",
        title : "Musaka",
        text : "Musaka"
    },

    {
        type : "dessert",
        thumbnail : "images/tulumba.jpg",
        title : "Tulumba",
        text : "Tulumba"
    },

    {
        type : "dessert",
        thumbnail : "images/baklava.jpg",
        title : "Baklava",
        text : "Baklava"
    },

    {
        type : "dessert",
        thumbnail : "images/bananasplit.jpg",
        title : "Banana Split",
        text : "Banana Split"
    },

    {
        type : "snack",
        thumbnail : "images/clubsandwich.jpg",
        title : "Club Sandwich",
        text : "Club Sandwich"
    },

    {
        type : "snack",
        thumbnail : "images/ceasarsalad.jpg",
        title : "Cezar salata",
        text : "Cezar salata"
    },

    {
        type : "snack",
        thumbnail : "images/fruitsalad.jpg",
        title : "Voćna salata",
        text : "Voćna salata"
    }
]

localStorage.setItem("recipes", JSON.stringify(recipes));

function removeRecipes()
{
    const divrec = document.getElementById("recipes");
    while (divrec.lastElementChild) {
        divrec.removeChild(divrec.lastElementChild);
  }
}

function loadRecipes(type)
{
    removeRecipes();

    let recipes = JSON.parse(localStorage.getItem("recipes"));

    recipes.forEach(recipe => {
        if (recipe.type == type)
        {
            let div1 = document.createElement("div");
            div1.className = "single-blog-area mb-80";
            let div2 = document.createElement("div");
            div2.className = "blog-thumbnail";
            let img1 = document.createElement("img");
            img1.src = recipe.thumbnail;
    
            let div3 = document.createElement("div");
            div3.className = "blog-content";
            let a1 = document.createElement("a")
            a1.href = "#";
            a1.className = "post-title";
            a1.innerHTML = recipe.title;
            let p1 = document.createElement("p");
            p1.innerHTML = recipe.text;
            let a2 = document.createElement("a");
            a2.href = "#";
            a2.className = "btn delicious-btn m-1";
            a2.innerHTML = "Read More";
 
            div3.appendChild(a1);
            div3.appendChild(p1);
            div3.appendChild(a2);
    
            div2.appendChild(img1);
    
            div1.appendChild(div2);
            div1.appendChild(div3);
    
            document.getElementById("recipes").appendChild(div1);
        }
    });
}
var recipes = 
[
    {
        type : "appetizer",
        thumbnail : "images/przenice.jpg",
        title : "Prženice",
        author : "MojRecept.rs",
        text : "Prženice",
        rating : "2",
        difficulty : "beginner"
    },

    {
        type : "appetizer",
        thumbnail : "images/kacamak.jpg",
        title : "Kačamak",
        author : "MojRecept.rs",
        text : "Kačamak",
        rating : "5",
        difficulty : "advanced"
    },

    {
        type : "appetizer",
        thumbnail : "images/proja.jpg",
        title : "Proja",
        author : "MojRecept.rs",
        text : "Proja",
        rating : "4",
        difficulty : "intermediate"
    },

    {
        type : "maincourse",
        thumbnail : "images/sushi.jpg",
        title : "Suši",
        author : "MojRecept.rs",
        text : "Suši",
        rating : "5",
        difficulty : "advanced"
    },

    {
        type : "maincourse",
        thumbnail : "images/gulas.jpg",
        title : "Gulaš",
        author : "MojRecept.rs",
        text : "Gulaš",
        rating : "3",
        difficulty : "beginner"
    },

    {
        type : "maincourse",
        thumbnail : "images/musaka.jpg",
        title : "Musaka",
        author : "MojRecept.rs",
        text : "Musaka",
        rating : "4",
        difficulty : "intermediate"
    },

    {
        type : "dessert",
        thumbnail : "images/tulumba.jpg",
        title : "Tulumba",
        author : "MojRecept.rs",
        text : "Tulumba",
        rating : "3",
        difficulty : "intermediate"
    },

    {
        type : "dessert",
        thumbnail : "images/baklava.jpg",
        title : "Baklava",
        author : "MojRecept.rs",
        text : "Baklava",
        rating : "1",
        difficulty : "beginner"
    },

    {
        type : "dessert",
        thumbnail : "images/bananasplit.jpg",
        title : "Banana Split",
        author : "MojRecept.rs",
        text : "Banana Split",
        rating : "5",
        difficulty : "advanced"
    },

    {
        type : "snack",
        thumbnail : "images/clubsandwich.jpg",
        title : "Club Sandwich",
        author : "MojRecept.rs",
        text : "Club Sandwich",
        rating : "5",
        difficulty : "intermediate"
    },

    {
        type : "snack",
        thumbnail : "images/ceasarsalad.jpg",
        title : "Cezar salata",
        author : "MojRecept.rs",
        text : "Cezar salata",
        rating : "2",
        difficulty : "advanced"
    },

    {
        type : "snack",
        thumbnail : "images/fruitsalad.jpg",
        title : "Voćna salata",
        author : "MojRecept.rs",
        text : "Voćna salata",
        rating : "1",
        difficulty : "beginner"
    }
]

var group = null;

localStorage.setItem("recipes", JSON.stringify(recipes));

function removeRecipes()
{
    const divrec = document.getElementById("recipes");
    while (divrec.lastElementChild) {
        divrec.removeChild(divrec.lastElementChild);
  }
}

function changeGroup(grp)
{
    group = grp;
    loadRecipes(JSON.parse(localStorage.getItem("recipes")));
}

function loadRecipes(rcp)
{
    removeRecipes();

    let recipes = rcp;

    recipes.forEach(recipe => {
        if (recipe.type == group)
        {
            let div1 = document.createElement("div");
            div1.className = "single-blog-area mb-80";
            let div2 = document.createElement("div");
            div2.className = "blog-thumbnail";
            let img1 = document.createElement("img");
            img1.src = recipe.thumbnail;

            let div2_1 = document.createElement("div");
            div2_1.className = "post-date w-25 border border-white";
            let div2_1_1 = document.createElement("div");
            div2_1_1.className = "receipe-ratings text-center my-5";
            let div2_1_1_1 = document.createElement("div");
            div2_1_1_1.className = "ratings";

            for (let i = 1; i <= 5; ++i)
            {
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
            a1.href = "#";
            a1.className = "post-title";
            a1.innerHTML = recipe.title;
            let div4 = document.createElement("div");
            div4.className = "meta-data";
            div4.innerHTML = "by ";
                let a1_1 = document.createElement("a");
                a1_1.href = "#";
                a1_1.innerHTML = recipe.author;
            let p1 = document.createElement("p");
            p1.innerHTML = recipe.text;
            let a2 = document.createElement("a");
            a2.href = "#";
            a2.className = "btn delicious-btn m-1";
            a2.innerHTML = recipe.difficulty;
 
            div4.appendChild(a1_1);

            div3.appendChild(a1);
            div3.appendChild(div4);
            div3.appendChild(p1);
            div3.appendChild(a2);
    
            div2.appendChild(div2_1);
            div2.appendChild(img1);
    
            div1.appendChild(div2);
            div1.appendChild(div3);
    
            document.getElementById("recipes").appendChild(div1);
        }
    });
}

function searchRecipes()
{
    let key = document.getElementById("search").value;

    let pool = [];
    recipes.forEach(recipe => {
        if (recipe.type == group)
            pool.push(recipe);
    });

    for (let i = 0; i < key.length; i++)
    {
        for (let j = 0; j < pool.length; j++)
        {
            if (pool[j] != null && key[i].toLowerCase() != pool[j].title[i].toLowerCase())
                pool[j] = null;
        }
    }

    let results = [];
    for (let i = 0; i < pool.length; i++)
    {
        if (pool[i] != null)
            results.push(pool[i]);
    }

    removeRecipes();
    loadRecipes(results);
}

/*function sortiraj(algorithm)
{
    let pool = [];
    let divrec = document.getElementById("recipes");
    while (divrec.lastElementChild) 
    {
        pool.push(divrec.lastElementChild);
        divrec.removeChild(divrec.lastElementChild);
        alert(pool[0]);
    }
}*/
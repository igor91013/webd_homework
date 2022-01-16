var recipes =
    [
        {
            type: "appetizer",
            data: "przenice.js",
            thumbnail: "images/przenice.jpg",
            title: "Prženice",
            author: "MojRecept.rs",
            text: "Prženice",
            rating: "2",
            difficulty: "1"
        },

        {
            type: "appetizer",
            data: "kacamak.js",
            thumbnail: "images/kacamak.jpg",
            title: "Kačamak",
            author: "MojRecept.rs",
            text: "Kačamak",
            rating: "5",
            difficulty: "3"
        },

        {
            type: "appetizer",
            thumbnail: "images/proja.jpg",
            title: "Proja",
            author: "MojRecept.rs",
            text: "Proja",
            rating: "4",
            difficulty: "2"
        },

        {
            type: "maincourse",
            thumbnail: "images/sushi.jpg",
            title: "Suši",
            author: "MojRecept.rs",
            text: "Suši",
            rating: "5",
            difficulty: "3"
        },

        {
            type: "maincourse",
            thumbnail: "images/gulas.jpg",
            title: "Gulaš",
            author: "MojRecept.rs",
            text: "Gulaš",
            rating: "3",
            difficulty: "1"
        },

        {
            type: "maincourse",
            thumbnail: "images/musaka.jpg",
            title: "Musaka",
            author: "MojRecept.rs",
            text: "Musaka",
            rating: "4",
            difficulty: "2"
        },

        {
            type: "dessert",
            thumbnail: "images/tulumba.jpg",
            title: "Tulumba",
            author: "MojRecept.rs",
            text: "Tulumba",
            rating: "3",
            difficulty: "2"
        },

        {
            type: "dessert",
            thumbnail: "images/baklava.jpg",
            title: "Baklava",
            author: "MojRecept.rs",
            text: "Baklava",
            rating: "1",
            difficulty: "1"
        },

        {
            type: "dessert",
            thumbnail: "images/bananasplit.jpg",
            title: "Banana Split",
            author: "MojRecept.rs",
            text: "Banana Split",
            rating: "5",
            difficulty: "3"
        },

        {
            type: "snack",
            thumbnail: "images/clubsandwich.jpg",
            title: "Club Sandwich",
            author: "MojRecept.rs",
            text: "Club Sandwich",
            rating: "5",
            difficulty: "2"
        },

        {
            type: "snack",
            thumbnail: "images/ceasarsalad.jpg",
            title: "Cezar salata",
            author: "MojRecept.rs",
            text: "Cezar salata",
            rating: "2",
            difficulty: "3"
        },

        {
            type: "snack",
            thumbnail: "images/fruitsalad.jpg",
            title: "Voćna salata",
            author: "MojRecept.rs",
            text: "Voćna salata",
            rating: "1",
            difficulty: "1"
        }
    ]

var group = null;
var loadedRecipes = [];

localStorage.setItem("recipes", JSON.stringify(recipes));

function removeRecipes() {
    const divrec = document.getElementById("recipes");
    while (divrec.lastElementChild) {
        divrec.removeChild(divrec.lastElementChild);
    }
}

function changeGroup(grp) {
    
    group = grp;
    if (grp == 'appetizer') {

    }
    loadRecipes(JSON.parse(localStorage.getItem("recipes")));
}

function setBreadcrumb(page) {
    let ul = document.createElement("ul");
    ul.className = "breadcrumbs";
    let li1 = document.createElement("li"); 
    li1.className="breadcrumbs__item";
    let li2 = document.createElement("li"); 
    li2.className="breadcrumbs__item";
    let li3 = document.createElement("li"); 
    li3.className="breadcrumbs__item";
    a1=document.createElement("a");
    a2=document.createElement("a");
    a3=document.createElement("a");

    a1.setAttribute("href","index.html");
    a2.setAttribute("href","#");
    a3.setAttribute("href","#");
    a1.setAttribute("data-lang","home");
    a2.setAttribute("data-lang","receipes");

    a1.className="breadcrumbs__link";
    a2.className="breadcrumbs__link";
    a3.className="breadcrumbs__link--active";
    
    a1.appendChild(document.createTextNode("Home"));
    a2.appendChild(document.createTextNode("Receipes"));
    
  
    li1.appendChild(a1);
    li2.appendChild(a2);
    
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    bc=document.getElementById("breadcrumbsplace");
    while (bc.firstChild) {
        bc.removeChild(bc.firstChild);
    }
    if(page=='appetizer')
    a3.appendChild(document.createTextNode("Appetizer"));
    a3.setAttribute("data-lang","appetizer")
    if(page=='maincourse')
    a3.appendChild(document.createTextNode("Main course"));
    a3.setAttribute("data-lang","maincourse")
    if(page=='dessert')
    a3.appendChild(document.createTextNode("Dessert"));
    a3.setAttribute("data-lang","dessert")
    if(page=='snack')
    a3.appendChild(document.createTextNode("Snack"));
    a3.setAttribute("data-lang","snack")
    li3.appendChild(a3);
    bc.appendChild(ul);


   /* <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
            <a data-lang="home" href="index.html" class="breadcrumbs__link">Home</a>
        </li>
        <li class="breadcrumbs__item">
            <a data-lang="receipes" href="receipes.html" class="breadcrumbs__link breadcrumbs__link--active">Receipes</a>
        </li>

    </ul>*/
}

function loadRecipes(rcp) {
    removeRecipes();

    loadedRecipes = [];
    let recipes = rcp;

    recipes.forEach(recipe => {
        if (recipe.type == group) {
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
            a1.setAttribute("onclick", "localStorage.setItem('recipe-data', '" + recipe.data + "')");
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
            switch (recipe.difficulty) {
                case "1": a2.innerHTML = "beginner";
                    break;
                case "2": a2.innerHTML = "intermediate";
                    break;
                case "3": a2.innerHTML = "advanced";
                    break;
                default: a2.innerHTML = "unknown";
            }

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

            loadedRecipes.push(recipe);
        }
    });
}

function searchRecipes() {
    let key = document.getElementById("search").value;

    let pool = [];
    recipes.forEach(recipe => {
        if (recipe.type == group)
            pool.push(recipe);
    });

    for (let i = 0; i < key.length; i++) {
        for (let j = 0; j < pool.length; j++) {
            if (pool[j] != null && key[i].toLowerCase() != pool[j].title[i].toLowerCase())
                pool[j] = null;
        }
    }

    let results = [];
    for (let i = 0; i < pool.length; i++) {
        if (pool[i] != null)
            results.push(pool[i]);
    }

    removeRecipes();
    loadRecipes(results);
}

function sortiraj(algorithm) {
    let button = document.getElementById(algorithm);

    if (algorithm == "rat") {
        if (button.name == "asc") {
            button.setAttribute("name", "desc");
            loadedRecipes.sort((a, b) => a.rating - b.rating);
        }
        else {
            button.setAttribute("name", "asc");
            loadedRecipes.sort((a, b) => b.rating - a.rating);
        }
    }
    else {
        if (button.name == "asc") {
            button.setAttribute("name", "desc");
            loadedRecipes.sort((a, b) => a.difficulty - b.difficulty);
        }
        else {
            button.setAttribute("name", "asc");
            loadedRecipes.sort((a, b) => b.difficulty - a.difficulty);
        }
    }

    loadRecipes(loadedRecipes);
}
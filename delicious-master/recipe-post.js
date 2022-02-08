$(document).ready(function () {

    var recipe = JSON.parse(localStorage.getItem("recipe-data"));


    // $("#recept").empty();

    /* var date = new Date(recipe.date);
     $("#recept").append("<p>Datum: " + date.toDateString() + "</p>");
     $("#recept").append("<h4>Ime recepta: " + recipe.title + "</h4>");
 
 
     $("#recept").append("<p>Trajanje: " + recipe.cooking + "</p>");*/



    $("#buttonPDF").click(function () {
        var pdf = new jsPDF('p', 'pt', 'letter');
        pdf.canvas.height = 72 * 11;
        pdf.canvas.width = 72 * 8.5;

        pdf.fromHTML($("#recept").html());

        pdf.save(recipe.title + '.pdf');

    });



});

function loadRecipeData(recipeData) {
    let language = localStorage.getItem("language");
    if (recipeData.pictures) {
        for(let i=0;i<recipeData.pictures.length;i++){
            
        document.getElementById("img"+JSON.stringify(i+1)).src = "images/" + recipeData.pictures[i];
        
        
        }

        // Pictures

        for (let i = 1; i <= 3; i++) {
            let picture = document.getElementById("img" + i);
            if (recipeData.pictures) {
                picture.src = "images/" + recipeData.pictures[i - 1];
            }

        }
    }
    else{
        document.getElementById("galerija").style.display = "none";

    }

    // Header
    document.getElementById("title").innerHTML = recipeData.title;
    document.getElementById("date").innerHTML = recipeData.date;

    // Rating
    let rating = document.getElementById("ratings").childNodes;
    let count = 0;
    rating.forEach(element => {
        a = 1;
        if (element.nodeName == "#text")
            return;

        if (count < recipeData.rating)
            element.setAttribute("class", "fa fa-star");
        else
            element.setAttribute("class", "fa fa-star-o");
        count++;
    });

    // Difficulty
    let difficulty = document.getElementById("difficulty");
    switch (recipeData.difficulty) {
        case "1":
            difficulty.innerHTML = "Beginner";
            difficulty.setAttribute("data-lang", "beginner")
            break;
        case "2":
            difficulty.innerHTML = "Intermediate";
            difficulty.setAttribute("data-lang", "intermediate")
            break;
        case "3":
            difficulty.innerHTML = "Advanced";
            difficulty.setAttribute("data-lang", "advanced")
            break;
        default:
            alert("ERROR: Unrecognized difficulty.");
    }

    //General info
    document.getElementById("cooking").innerHTML = recipeData.cooking;
    // document.getElementById("yields").innerHTML = recipeData.yields;

    //Preparation steps
    let steps = recipeData.preparation;
    count = 1;

    if (steps) {
        steps.forEach(element => {
            let div = document.createElement("div");
            div.className = "single-preparation-step d-flex";
            let h = document.createElement("h4");
            h.innerHTML = "0" + count + ".";
            div.appendChild(h);
            let p = document.createElement("p");
            p.innerHTML = element;
            div.appendChild(p);
            document.getElementById("preparation").appendChild(div);
            count++;
        });
    }


    //Ingredients
    let ingredients = recipeData.ingredients;
    count = 0;
    if (ingredients != null && ingredients.length > 0) {
        ingredients.forEach(element => {
            let div = document.createElement("div");
            div.className = "custom-control custom-checkbox";
            let input = document.createElement("input");
            input.type = "checkbox";
            input.className = "custom-control-input"
            input.id = "customCheck" + count;
            div.appendChild(input);
            let label = document.createElement("label");
            label.className = "custom-control-label";
            label.setAttribute("for", "customCheck" + count);
            label.innerHTML = element;
            div.appendChild(label);
            document.getElementById("ingredients").appendChild(div);
            count++;
        });
    }


    //Video

    if (recipeData.video != "") {
        let video = document.createElement("video");
        video.width = "320";
        video.height = "240";
        video.setAttribute("controls", "");
        let source = document.createElement("source");
        source.src = recipeData.video;
        source.type = "video/mp4";
        document.getElementById("video").appendChild(video);
    }

    //Reviews
    if (recipeData.reviews) {
        let reviews = recipeData.reviews;
        count = 0;
        let numElem = reviews.length;
        reviews.forEach(element => {

            let div_1 = document.createElement("div");
            div_1.className = "row";
            let div_1_1 = document.createElement("div");
            div_1_1.className = "col-8";
            let h4 = document.createElement("h4");
            h4.innerHTML = element.title;
            div_1_1.appendChild(h4);
            div_1.appendChild(div_1_1);
            let div_1_2 = document.createElement("div");
            div_1_2.className = "col-3 offset-1";
            let div_1_2_1 = document.createElement("div");
            div_1_2_1.className = "receipe-ratings text-left";
            let div_1_2_1_1 = document.createElement("div");
            div_1_2_1_1.className = "ratings";
            for (let count = 1; count <= 5; count++) {
                let i = document.createElement("i");
                i.className = (element.rating >= count) ? "fa fa-star" : "fa fa-star-o";
                i.setAttribute("aria-hidden", "true");
                div_1_2_1_1.appendChild(i);
            }
            div_1_2_1.appendChild(div_1_2_1_1);
            div_1_2.appendChild(div_1_2_1);
            div_1.appendChild(div_1_2);
            document.getElementById("reviews").appendChild(div_1);
            let div_2 = document.createElement("div");
            div_2.className = "row";
            let div_2_1 = document.createElement("p");
            div_2_1.className = "col-12";
            div_2_1.innerHTML = element.text;
            div_2.appendChild(div_2_1);
            document.getElementById("reviews").appendChild(div_2);
            let div_3 = document.createElement("div");
            div_3.className = "row";
            let div_3_1 = document.createElement("div");
            div_3_1.className = "col-2 font-italic";
            let div_3_1_1 = document.createElement("a");
            div_3_1_1.href = "#";
            div_3_1_1.innerText = "by " + element.user;
            div_3_1.appendChild(div_3_1_1)
            div_3.appendChild(div_3_1);
            let div_3_2 = document.createElement("div");
            div_3_2.className = "col-2 offset-8";
            let div_3_2_1 = document.createElement("p");
            div_3_2_1.innerHTML = element.date;
            div_3_2.appendChild(div_3_2_1);
            div_3.appendChild(div_3_2);
            document.getElementById("reviews").appendChild(div_3);
            count++;
            if (count < numElem) {
                let line = document.createElement("hr");
                document.getElementById("reviews").appendChild(line);
            }
        });
    }

}

const ratingStars = [...document.getElementsByClassName("rating__star")];

function executeRating(stars) {
    const starClassActive = "rating__star fa fa-star";
    const starClassUnactive = "rating__star fa fa-star-o";
    const starsLength = stars.length;
    let i;
    stars.map((star) => {
        star.onclick = () => {
            i = stars.indexOf(star);
            console.log(i + 1)
            document.getElementById("userStarRating").textContent = i + 1
            if (star.className.indexOf(starClassUnactive) !== -1) {
                for (i; i >= 0; --i) stars[i].className = starClassActive;
            } else {
                for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
            }
        };
    });
}

executeRating(ratingStars);



function addReview() {

    if (!sessionStorage.getItem("ulogovan"))
        return alert("Morate biti ulogovani");
    let idRec = JSON.parse(localStorage.getItem("recipe-data")).id;
    let text = document.getElementById("message").value;
    let rating = document.getElementById("userStarRating").textContent
    let today = new Date();
    let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()

    const review = {
        user: JSON.parse(sessionStorage.getItem("ulogovan")).username,
        date: date,
        rating,
        title: '',
        text
    }


    let recipes = JSON.parse(localStorage.getItem("recipes"));

    (recipes[idRec - 1].reviews).push(review);

    let helpArray = []

    recipes[idRec - 1].reviews.forEach(review => {
        helpArray.push(parseInt(review.rating))
    })
    let sum = 0
    helpArray.forEach(el => { sum += el })

    let middleRating = sum / (recipes[idRec - 1].reviews.length);
    recipes[idRec - 1].rating = middleRating.toFixed(2);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    localStorage.setItem("recipe-data", JSON.stringify(recipes[idRec - 1]));
    document.location.reload()
}

function setBcRp() {
    let ul = document.createElement("ul");
    ul.className = "breadcrumbs";
    let li1 = document.createElement("li");
    li1.className = "breadcrumbs__item";
    let li2 = document.createElement("li");
    li2.className = "breadcrumbs__item";
    let li3 = document.createElement("li");
    li3.className = "breadcrumbs__item";
    let li4 = document.createElement("li");
    li4.className = "breadcrumbs__item";
    a1 = document.createElement("a");
    a2 = document.createElement("a");
    a3 = document.createElement("a");
    a4 = document.createElement("a");

    let group = (JSON.parse(localStorage.getItem("recipe-data"))).type;

    a1.setAttribute("href", "index.html");
    a2.setAttribute("href", "receipes.html");
    a2.onclick = () => { localStorage.removeItem("group") }
    a3.setAttribute("href", "receipes.html");
    a3.onclick = () => { localStorage.setItem("group", group) }
    a1.setAttribute("data-lang", "home");
    a2.setAttribute("data-lang", "receipes");
    a4.setAttribute("href", "#");

    a1.className = "breadcrumbs__link";
    a2.className = "breadcrumbs__link";
    a3.className = "breadcrumbs__link";
    a4.className = "breadcrumbs__link--active"

    a1.appendChild(document.createTextNode("Home"));
    a2.appendChild(document.createTextNode("Receipes"));


    li1.appendChild(a1);
    li2.appendChild(a2);


    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    bc = document.getElementById("rp-breadcrumbsplace");






    a3.appendChild(document.createTextNode(group));
    a3.setAttribute("data-lang", group);

    let title = (JSON.parse(localStorage.getItem("recipe-data"))).title;
    a4.appendChild(document.createTextNode(title));

    li3.appendChild(a3);
    li4.appendChild(a4);

    bc.appendChild(ul);



}


function initReceipePostPage()
{
    let data = JSON.parse(localStorage.getItem("recipe-data"));
    loadRecipeData(data);
}

function loadRecipeData(recipeData)
{
    let language = localStorage.getItem("language");
    
    // Pictures

    for (let i = 1; i <=3 ; i++)
    {
        let picture = document.getElementById("img"+ i);
        picture.src = "images/" + recipeData.pictures[i-1];
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
    switch (recipeData.difficulty)
    {
        case "1":
            difficulty.innerHTML = "Beginner";
            break;
        case "2":
            difficulty.innerHTML = "Intermediate";
            break;
        case "3":
            difficulty.innerHTML = "Advanced";
            break;
        default:
            alert("ERROR: Unrecognized difficulty.");
    }

    //General info
    document.getElementById("cooking").innerHTML = recipeData.cooking;
    document.getElementById("yields").innerHTML = recipeData.yields;

    //Preparation steps
    let steps = recipeData.preparation;
    count = 1;
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

    //Ingredients
    let ingredients = recipeData.ingredients;
    count = 0;
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

    //Video

    if (recipeData.video != "")
    {
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
                    for (let count = 1; count <= 5; count ++)
                    {
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
                div_3_1_1.href="#";
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
        if (count < numElem)
        {
            let line = document.createElement("hr");
            document.getElementById("reviews").appendChild(line);
        }
    });
}

function showStars(num)
{
    let reviewStars = document.getElementById("reviewStars").childNodes;
    let count = 0;
    while (count < reviewStars.length)
    {
        if(reviewStars[count].nodeType != Node.TEXT_NODE)
        {
            if (num > 0)
            {
                reviewStars[count].className = "fa fa-star";
                num--;
            }
        }
        count++;
    }
}

function hideStars()
{
    let reviewStars = document.getElementById("reviewStars").childNodes;
    let count = 0;
    while (count < 5)
    {
        if(reviewStars[count].nodeType != Node.TEXT_NODE)
        {
            if (num > 0)
            {
                reviewStars[count].className = "fa fa-star-o";
                num--;
            }
        }
        count++;
    }
    alert("a");
}

function addReview()
{
    let title = document.getElementById("title");
    let message = document.getElementById("message");
}
function initReceipePostPage()
{
    let dataFilePath = localStorage.getItem("recipe-data");
    loadRecipeData(dataFilePath);
}

function loadRecipeData(path)
{
    let prevDataFile = document.getElementById("recipe-data");
    if (prevDataFile != null)
        prevDataFile.remove();

    let dataFilePath = document.createElement("script");
    dataFilePath.type = "text/javascript";
    dataFilePath.id = "recipe-data";
    dataFilePath.src = "recipes/" + path;
    dataFilePath.onload = function ()
    {
        let language = localStorage.getItem("language");
        
        // Header
        document.getElementById("title").innerHTML = recipeData[language].title;
        document.getElementById("date").innerHTML = recipeData[language].date;
        
        // Rating
        let rating = document.getElementById("ratings").childNodes;
        let count = 0;
        rating.forEach(element => {
            a = 1;
            if (element.nodeName == "#text")
                return;
            
            if (count < recipeData[language].rating)
                element.setAttribute("class", "fa fa-star");
            else
                element.setAttribute("class", "fa fa-star-o");
            count++;
        });

        // Difficulty
        let difficulty = document.getElementById("difficulty");
        switch (recipeData[language].difficulty)
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
        document.getElementById("cooking").innerHTML = recipeData[language].cooking;
        document.getElementById("yields").innerHTML = recipeData[language].yields;

        //Preparation steps
        let steps = recipeData[language].preparation;
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
        let ingredients = recipeData[language].ingredients;
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

        //Pictures - Ne radi
        let pictures = recipeData[language].pictures;
        count = 1;
        pictures.forEach(element => {
            document.getElementById("picture" + count).src = "images/" + element;
            count++;
            if (count == 4)
                return;
        });

        //Reviews
        let reviews = recipeData[language].reviews;
        count = 0;
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
                        div_1_2_1_1.appendChild("i");
                        }
                    div_1_2_1.appendChild(div_1_2_1_1);
                div_1_2.appendChild(div_1_2_1);
            div_1.appendChild(div_1_2);
            document.getElementById("reviews").appendChild(div_1);
            let div_2 = document.createElement("div");
            div_2.className = "row";
                let div_3 = document.createElement("")
            document.getElementById("reviews").appendChild(div_2);
            count++;
        });
    };
    document.getElementsByTagName("head")[0].appendChild(dataFilePath);
}
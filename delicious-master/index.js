function sortRating(a, b)
{
    return b.rating - a.rating;
}

function loadBestRecipes()
{
    let recipes = JSON.parse(localStorage.getItem("recipes"));
    for (let i = 0; i < recipes.length - 1; i++)
    {
        for (let j = i + 1; j < recipes.length; j++)
        {
            if (parseFloat(recipes[i].rating) < parseFloat(recipes[j].rating))
            {
                let temp = recipes[i];
                recipes[i] = recipes[j];
                recipes[j] = temp;
            }
        }
    }

    for (let i = 0; i < 3; i++)
    {
        document.getElementById("img" + i).src = recipes[i].thumbnail;
        document.getElementById("img" + i).style = "height: 200px;"
        document.getElementById("link" + i).setAttribute("onclick", "localStorage.setItem('recipe-data', '" + JSON.stringify(recipes[i]) + "')");
        document.getElementById("title" + i).innerText = recipes[i].title + " ("+recipes[i].rating+")";

        let ratings = document.getElementById("ratings" + i);

        for (let count = 0; count <= 4; count++) 
            document.getElementById("s" + i + count).className = (recipes[i].rating > count) ? "fa fa-star" : "fa fa-star-o";
    }
}
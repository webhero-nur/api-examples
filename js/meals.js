const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = ``;
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
            <a href=#detail-start style="text-decoration: none; color: black;">
            <div onclick="loadMealDetails('${meal.idMeal}')" class="card">
            <img src="${meal.strMealThumb
            }" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
            </div>
            </a>
        `;
        mealsContainer.appendChild(mealDiv);
        // console.log(meal);
    })
}

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    loadMeals(searchText);
}

const loadMealDetails = (idMeal) => {
    // console.log('get details of id:', idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetailes(data.meals[0]))
}

const displayMealDetailes = meal => {
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = ``;
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card');
    mealDiv.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
    `;
    detailContainer.appendChild(mealDiv);
    console.log(meal);
}

loadMeals('');
const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');

getMealBtn.addEventListener('click', () => {

    fetch ('https://www.the mealdb.com/api/json/v1/1/random.php')
 .then(res => res.json())
.then (res => }
    createMeal (res.meals[0])
});



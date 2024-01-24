/**
 * This section adds the event listener
 * to all food choices making them 
 * appear on the choiceMeal section
 */
document.addEventListener("DOMContentLoaded", function() {
   const foodButtons = document.getElementsByClassName("food-choice");
   const choicedMeal = document.getElementById("choice-meal");
   const foodChoices = document.getElementById("food-choices");
   foodChoices.style.display = "none"

   for (let button of foodButtons) {
       button.addEventListener("click", function() {
           let newButton = document.createElement('button');
           newButton.id = this.id;
           newButton.value = this.getAttribute('value');
           newButton.classList = this.getAttribute('class');
           newButton.addEventListener("click", function() {
               choicedMeal.removeChild(newButton);
               removeTotal(parseInt(this.getAttribute('value')));
           });

           choicedMeal.appendChild(newButton);

           mealCaloriesCounter(parseInt(this.getAttribute('value')));
       });
   }
});

/**
* Function to calculate the amounth of calories, 
* caloric deficit and calories per meal
*/
function calculateCalories() {
   const weight = parseInt(document.getElementById("weight").value);
   const height = parseInt(document.getElementById("height").value);
   const age = parseInt(document.getElementById("age").value);
   const sex = document.getElementById("sex").value;
   const dailyCalories = document.getElementById("daily-calories");
   const foodChoices = document.getElementById("food-choices");

   let manCalculation = (10 * weight) + (6.25 * height) - (5 * age) + 5;
   let womanCalculation = (10 * weight) + (6.25 * height) - (5 * age) - 161;


   if (sex === "man" && weight >= 10 && height >= 90 && age >= 7) {
       dailyCalories.innerHTML = manCalculation;
       calculateCaloricDeficit(dailyCalories.innerText);
       foodChoices.style.display = "flex"
   } else if (sex === "woman" && weight >= 10 && height >= 90 && age >= 7) {
       dailyCalories.innerHTML = womanCalculation;
       calculateCaloricDeficit(dailyCalories.innerText);
   } else {
       alert `Insert the right values to make the calculation. Weight has to be a minimum of 22 kilograms, minimum height 90 and minimum age of 7 years`
   }

}

/**
* Calculation of the caloric deficit
* by subtracting 20% of the daily calories
*/
function calculateCaloricDeficit(num) {
   const deficit = document.getElementById("caloric-deficit");
   let caloricDeficit = num - (num * 0.2);
   deficit.innerHTML = caloricDeficit;
   calculateCaloriesPerMeal(deficit.innerText)
}

/**
* This function calculates the amount of calories 
* per meal by calculating the 30% of the caloric benefit
*/
function calculateCaloriesPerMeal(num) {
   const mealCalories = document.getElementById("calories-per-meal");
   let caloriesPerMeal = num * 0.3;
   mealCalories.innerHTML = caloriesPerMeal;
}

/**
* mealCaloriesCounter is going to take the calorie value
* every time that a food is choice and then is going to 
* add the result to the in the total-meal-calories span and
* compare 
*/
function mealCaloriesCounter(num) {
   const totalMealCalories = parseInt(document.getElementById('total-meal-calories').innerText);
   const calories = document.getElementById('total-meal-calories')
   calories.innerHTML = totalMealCalories + num;
   compareCalories(calories)
}

/**
* This function compares the value of the 
* calories per meal with the meal choice 
* in case that surpasses it will give an alert
*/
function compareCalories(num) {
   const caloriesPerMeal = parseInt(document.getElementById("calories-per-meal").innerText);
   const caloriesInMeal = parseInt(num.innerText);

   let reduce = caloriesInMeal - caloriesPerMeal
   if (caloriesInMeal > caloriesPerMeal) {
       alert(`Is to much. You have to reduce ${reduce}`)
   }
}



/**
* This function will subtract the calories from the total 
* meal calories when the user removes the food selected from
* the meal chosen meal
*/
function removeTotal(num) {
   const totalMealCalories = parseInt(document.getElementById("total-meal-calories").innerText);
   document.getElementById("total-meal-calories").innerHTML = totalMealCalories - parseInt(num);
}
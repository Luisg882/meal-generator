/**
 * This section adds the event listener
 * to all food choices making them 
 * appear on the choiceMeal section
 */
document.addEventListener("DOMContentLoaded", function() {
   const foodButtons = document.getElementsByClassName("food-choice");
   const choicedMeal = document.getElementById("choice-meal");
   const foodChoices = document.getElementById("food-choices");
   const error = document.getElementById("error");
   const reduceCalories = document.getElementById("reduce-calories");
   foodChoices.style.display = "none";
   error.style.display = "none";
   reduceCalories.style.display = "none";


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
   const error = document.getElementById("error");
   const choicedMeal = document.getElementById("choice-meal");
   const caloricDeficit = document.getElementById("caloric-deficit");
   const reduceCalories = document.getElementById("reduce-calories");
   const mealCalories = document.getElementById("calories-per-meal");
   

   // Reset total-meal-calories and amount-of-calories-to-reduce
   const totalMealCaloriesElement = document.getElementById("total-meal-calories");
   totalMealCaloriesElement.innerHTML = '0';
 
   const reduceCaloriesElement = document.getElementById("amount-of-calories-to-reduce");
   reduceCaloriesElement.innerHTML = '0';

   let manCalculation = (10 * weight) + (6.25 * height) - (5 * age) + 5;
   let womanCalculation = (10 * weight) + (6.25 * height) - (5 * age) - 161;

   // Reset all sections
   choicedMeal.innerHTML = '';
   caloricDeficit.innerHTML = '0';
   dailyCalories.innerHTML = '0';
   mealCalories.innerHTML = '0';
   reduceCalories.style.display = 'none';

   if (sex === "man" && weight >= 10 && height >= 90 && age >= 7) {
      dailyCalories.innerHTML = manCalculation;
      calculateCaloricDeficit(dailyCalories.innerText);
      foodChoices.style.display = "flex";
      error.style.display = "none";
  } else if (sex === "woman" && weight >= 10 && height >= 90 && age >= 7) {
      dailyCalories.innerHTML = womanCalculation;
      calculateCaloricDeficit(dailyCalories.innerText);
      error.style.display = "none";
  } else {
      error.style.display = "block";
      removeReduceCalories(); // Hide reduce calories when error occurs
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
   const caloriesToReduce = document.getElementById("reduce-calories");
   const reduceCalories = document.getElementById("amount-of-calories-to-reduce");
   const amountOfCaloriesToReduce = parseInt(document.getElementById("amount-of-calories-to-reduce").innerText)

   let reduce = caloriesInMeal - caloriesPerMeal
   if (caloriesInMeal > caloriesPerMeal) {
      caloriesToReduce.style.display = "block";
      reduceCalories.innerHTML = amountOfCaloriesToReduce + reduce;
   } else {
      caloriesToReduce.style.display = "none";
   }
}



/**
* This function will subtract the calories from the total 
* meal calories when the user removes the food selected from
* the meal chosen meal and update the amount of calories that have
* to reduce
*/
function removeTotal(num) {
   const totalMealCaloriesElement = document.getElementById("total-meal-calories");
   const totalMealCalories = parseInt(totalMealCaloriesElement.innerText);
   const reduceCaloriesElement = document.getElementById("amount-of-calories-to-reduce");
   let amountOfCaloriesToReduce = parseInt(reduceCaloriesElement.innerText);

   amountOfCaloriesToReduce = Math.max(amountOfCaloriesToReduce - num, 0);

   totalMealCaloriesElement.innerHTML = totalMealCalories - num;
   reduceCaloriesElement.innerHTML = amountOfCaloriesToReduce;

   removeReduceCalories();
}

/**
 * This function is going to remove the Reduce calories
 * section wen he total meal calories doesn't pass the calories 
 * per meal
 */
function removeReduceCalories() {
   const totalMealCalories = parseInt(document.getElementById("total-meal-calories").innerText);
   const caloriesToReduce = document.getElementById("reduce-calories");
   const caloriesPerMeal = parseInt(document.getElementById("calories-per-meal").innerText);

   if (totalMealCalories < caloriesPerMeal) {
      caloriesToReduce.style.display = "none";
   }
}
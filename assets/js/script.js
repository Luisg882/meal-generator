/**
 * This section adds the event listener
 * to all food choices making them 
 * appear on the choiceMeal section
 */

document.addEventListener("DOMContentLoaded", function() {
   let foodButtons = document.getElementsByClassName('food-choise');
   let choicedMeal = document.getElementById('choiced-meal');

   for (let button of foodButtons) {
      button.addEventListener("click", function() {
         // Create a new button element
         let newButton = document.createElement('button');

         // Set the id for the new button (same as the clicked button)
         newButton.id = this.id;

         // Set other attributes for the new button
         newButton.value = this.getAttribute('value');
         newButton.src = this.getAttribute('src');

         // Add a click event listener to the new button
         newButton.addEventListener("click", function() {
            // Remove the clicked button from the choicedMeal
            choicedMeal.removeChild(newButton);
            removeTotal(parseInt(this.getAttribute('value')))
         });

         // Append the new button to the existing content
         choicedMeal.appendChild(newButton);


         // Log the value attribute of the clicked button
         console.log(parseInt(this.getAttribute('value')));

         // Call the mealCaloriesCounter function with the value attribute
         mealCaloriesCounter(parseInt(this.getAttribute('value')));
      })
   }
});

/**
 * Function to calculate the amounth of calories, 
 * caloric deficit and calories per meal
 */

function calculateCalories() {
   //Create variables for each element
   let weight = parseFloat(document.getElementById("weight").value);
   let height = parseFloat(document.getElementById("height").value);
   let age = parseInt(document.getElementById("age").value);
   let sex = document.getElementById("sex").value; 
   let dailyCalories = document.getElementById("daily-calories")
   
   //Calculation of the daily calories for man and woman
   let manCalculation = (10 * weight) + (6.25 * height) - (5 * age) + 5;
   let womanCalculation = (10 * weight) + (6.25 * height) - (5 * age) - 161;
   
   if (sex == "man") {
      dailyCalories.innerHTML = manCalculation
      console.log(dailyCalories.innerText)
      calculateCaloricDeficit(dailyCalories.innerText)
   } else {
      dailyCalories.innerHTML = womanCalculation
      calculateCaloricDeficit(dailyCalories.innerText)
   }
}

/**
 * Calculation of the caloric deficit
 */

function calculateCaloricDeficit(number) {
   let caloricDeficit = number - (number * 0.2);
   let deficit = document.getElementById("caloric-deficit");
   deficit.innerHTML = caloricDeficit;
   calculateCaloriesPerMeal(deficit.innerText)
}

/**
 * This function calculates the amount of calories 
 * per meal
 */

function calculateCaloriesPerMeal (number) {
   let caloriesPerMeal = number * 0.3;
   let mealCalores = document.getElementById("calories-per-meal");
   mealCalores.innerHTML = caloriesPerMeal;
}

/**
 * mealCaloriesCounter is going to take the calories value
 * everytime that a food is choiced and then is goin to 
 * add the result to the in the total-meal-calories span and
 * compare 
 */
function mealCaloriesCounter(num) {
   let totalMealCalories = parseInt(document.getElementById('total-meal-calories').innerText);
   let calories = document.getElementById('total-meal-calories');
   calories.innerHTML = totalMealCalories + num;
   compareCalories(calories)
}

/**
 * this function compares the value of the 
 * calories per meal with the meal choice 
 * in case that surpasses it will give an alert
 */
function compareCalories (num) {
   let caloresPerMeal = parseInt(document.getElementById("calories-per-meal").innerText);
   let caloriesInMeal = parseInt(num.innerText);
   let reduce = caloriesInMeal - caloresPerMeal
   console.log(parseInt(caloriesInMeal))
   console.log(parseInt(caloresPerMeal))
   console.log(reduce)
   if (parseInt(caloriesInMeal) > caloresPerMeal) {
      console.log("to much")
      alert (`is to much you have to reduce ${reduce}`)
   } else {
      console.log("is ok")
   }
}
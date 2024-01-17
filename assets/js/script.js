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
         // Create a new image element
         let newImage = document.createElement('img');
         newImage.src = this.getAttribute('src');

         // Append the new image to the existing content
         choicedMeal.appendChild(newImage);
         console.log(parseInt(this.getAttribute('value')));
         mealCaloriesCounter(parseInt(this.getAttribute('value')))
      })
   }

})

/**
 * mealCaloriesCounter is going to take the calories value
 * everytime that a food is choiced and then is goin to 
 * add the result to the in the total-meal-calories span
 */
function mealCaloriesCounter(num) {
   let totalMealCalories = parseInt(document.getElementById('total-meal-calories').innerText);
   document.getElementById('total-meal-calories').innerHTML = totalMealCalories + num

}

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
   let calculateCaloricDeficitMan = manCalculation - (manCalculation * 0.2);
   let calculateCaloricDeficitManMeal = calculateCaloricDeficitMan * 0.3;
   let calculateCaloricDeficitWoman = womanCalculation - (womanCalculation * 0.2);
   let calculateCaloricDeficitWomanMeal = calculateCaloricDeficitWoman * 0.3;

   if (sex == "man") {
      dailyCalories.innerHTML = manCalculation
      console.log(dailyCalories.innerText)
      calculateCaloricDeficit(dailyCalories.innerText)
   } else {
      dailyCalories = womanCalculation
      calculateCaloricDeficit(dailyCalories.innerText)
   }
}

/**
 * Calculation of the caloric deficit
 */

function calculateCaloricDeficit(num) {
   let calculate = num - (num * 0.2);
   document.getElementById("caloric-deficit").innerHTML = calculate;
}
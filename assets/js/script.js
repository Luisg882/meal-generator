function calculateCalories() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let age = parseInt(document.getElementById("age").value);
    let sex = document.getElementById("sex").value;
    let dailyCalories = document.getElementById("daily-calories");
    let caloricDeficit = document.getElementById("caloric-deficit");
    let caloriesPerMeal = document.getElementById("calories-per-meal")
    
    let manCalculation = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    let womanCalculation = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    let calculateCaloricDeficitMan = manCalculation - (manCalculation * 0.2);
    let calculateCaloricDeficitManMeal = calculateCaloricDeficitMan * 0.3;
    let calculateCaloricDeficitWoman = womanCalculation - (womanCalculation * 0.2);
    let calculateCaloricDeficitWomanMeal = calculateCaloricDeficitWoman * 0.3;

    if (sex == "man") {
       dailyCalories.innerHTML = `
       <p>${manCalculation}</p>
       `
       caloricDeficit.innerHTML = `
       <p>${calculateCaloricDeficitMan}</p>
       `
       caloriesPerMeal.innerHTML = `
       <p>${calculateCaloricDeficitManMeal}</p>
       `
    } else {
       dailyCalories.innerHTML = `
       <p>${womanCalculation}</p>
       `
       caloricDeficit.innerHTML = `
       <p>${calculateCaloricDeficitWoman}</p>
       `
       caloriesPerMeal.innerHTML = `
       <p>${calculateCaloricDeficitWomanMeal}</p>
       `
    }
}


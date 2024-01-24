# Meal Generator

One of the most difficult things about doing a diet is to make a meal that matches the calories needed and has the things that you like it's, or at least close to it. The purpose of this project is to create a web page that helps people create a meal for their diet given a selection of food choices like meat, rice, eggs and others so the user can choose what they want and it will calculate the caloric value and compare with the amount of calories they need checking if it's going to break the diet or not.

The page is going to be divided into two sections. The first one is a  that will ask the user their weight, height, physical activity and age so it can calculate the amount of calories needed daily, then calculate the amount of calories needed to generate caloric deficits making them lose weight and finally calculate the amount of calories per meal. The second section will be the meal generator, here there is going to be one section with the food choices, when clicked they will go to the meal section, underneath the meal section there is going to be a calorie calculator telling the user how many calories this meal will have. The calories of the meal are going to be compared with the result of the calories per meal, calculated previously, in the case that surpasses the calories per meal it's going to show a warning message to the user saying how many calories they need to take off from the selected meal. 

![picture of the web page in different screen sizes: mobile, tablet, laptop and desktop](/assets/images/multiple-screen.webp)

## Features

- **Header**
    - Is the first part of the website. Shows the name of the page and the logo 

    ![image of the header section showing the name of the page, Meal generator, and the logo on the side](/assets/images/header.webp)

- **Introduction**
    - A breave introduction on how to lose weight by controlling the number of calories we take
    - The purpose of this paragraph is to provide more information on what this website is about so they will know what to expect and follow up.
    
    ![image of the introduction section](/assets/images/introduction.webp)

- **Personal Information**
    - In this section, there is a series of inputs asking for information about weight, height, age and sex.
    - This information is used later to calculate the amount of daily calories, caloric deficit and how many calories they need per meal.
    - A submit button is going to trigger the JavaScript to make this calculation.
    - Each of the inputs will have a validation: Wight is a minimun of 10 kilograms, height a minimun of 90 centimeters and a minumun age of 7. All this values are standars for a 7 years girl

    ![image of the personal information section showing the weight, height, age, sex and the submit button](/assets/images/personal-information.webp)

- **Daily Calories**
    - In this section, we calculate the number of calories needed by following the basal metabolic rate (BMR), which is 10 * weight (kg) + 6.25 * height(cm) - 5 * age(y) + 5 for man and 10 * weight(kg) + 6.25 * height(cm) - 5 * age(y) - 161 for ​woman, with the personal information taking before.

    ![image of the daily calories before submitting the personal information, value of 0](/assets/images/daily-calories-0.webp)
    ![image of the daily calories after submitting the personal information, value of 1857.5](/assets/images/daily-calories.webp)

- **Caloric Deficit**
    - In this section, we calculate the caloric deficit by subtracting 20% of the daily calories.
    - This result is calculated after clicking the calculate button.
    - If the personal information doesn't past the validation an Alert message is going to appar advicing the user to modify the values and provide the minimun values, also the calculation is not going to happen.

    ![image of the caloric deficit before submitting the personal information, value of 0](/assets/images/caloric-deficit-0.webp)
    ![image of the caloric deficit after submitting the personal information, value of 1486](/assets/images/caloric-deficit.webp)

- **Calories per Meal**
    - In this section, we calculate the amount of calories per meal by subtracting 30% of the Caloric Deficit.
    - This result is calculated after clicking the calculate button.
    - The way that the diet is structured on this website is to have 3 meals of 30% value of the Caloric Deficit and snacks of 5%.

    ![image of the calories per meal before submitting the personal information, value of 0](/assets/images/calories-per-meal-0.webp)
    ![image of the calories per meal after submitting the personal information, value of 445.8](/assets/images/calories-per-meal.webp)

- **Meal Generator introduction**
    - This section provides a brief description of how it works the meal generator

    ![image of the Meal Generator introduction paragraph](/assets/images/meal-generator-introduction.webp)

- **Food Choices**
    - This section has all the food choices available, for this project, it was picked 10 food choices, 5 of them were proteins and the other 5 were carbohydrates to balance the diet.
    - When clicked they are going to appear on the Meal section.
    - This section is going to remain hidden until the user makes the calcualtion of his caloric needs.

    ![image of the food choices](/assets/images/food-selection.webp)

- **Meal Section**
    - Over here all the clicked food from the Food Choices going to be displayed.
    - Each food choice has a click event listener that removes them from the meal choice.

    ![image of the Meal section with no food added](/assets/images/choiced-meal-empty.webp)
    ![image of the Meal section with food being added to it](/assets/images/choiced-meal.webp)

- **Total Meal Calories**
    - In this section, we calculate the amount of calories between all the food choices on the meal section and display it.
    - In the case the user surpasses the calories per meal an alert message is going to appear telling the user that they pass the amount of calories per meal and advise them to reduce the food choices in the meal section and how many calories they need to take from the meal. 

    ![image of the Total calories without any meal chosen](/assets/images/total-calories-0.webp)
    ![image of the Total calories of a chosen meal, value of 435](/assets/images/total-calories.webp)

- **Footer**
    - It has links to social media and will open in a new tab. This is made to engage the user.

    ![image of the footer with the logos of the different social media pages](/assets/images/footer.webp)

## Features left to implement
   - A recipe generator to give selection of recipes for the choiced food.
   - A search option to fetch a food choice for an API and put it on the food choices.

## Technologies Used
**Languages Used**
- HTML5.
- CSS3.
- JavaScript ES6.

**Libraries and programs used**
- **Grammarly** - used to correct misspellings and grammar mistakes.
- **Font Awesome** - to get social media icons.
- **Google Fonts** - Oswald and Raleway fonts were used on the website.
- **Invision** - to make early sketches of the website.
- **Git** - used as IDE to control and track the project progression.
- **Python Tutor** - used to check the errors, understand and correct the functions.

## Testing
- Tested in Google Chrome, Firefox and Edge browsers.
- Website is responsive in all browsers.
- All Social Media icons open in a new tab.
- Food choices work porperlly.
- Calculation button works properlly.
- Food choices added to the Meal section work properlly.

**Functional Testing**
  - **Personal Information Buttons**
    - Try to put negative numbers in the personal information section and it shows the alert message to make the changes
    - If you try to use the up and down arrows on the inputs will begin with the minimun allowed and won't ler you go below it.
  - **Calculate Button**
    - Daily Calories, Caloric Deficit and Calories per Meal show the correct value for each section.
    - The food choices remind hiden until the calculation is completed.
  - **Food Choices Buttons**
    - All food choices are added to the choiced meal section Properlly after being clicked.
    - Adds the caloric value to the Total Meal Calories section.
    - The message alert shows every time the user surpass the limit, even if the pass it and press another food choice again it will show again with a higer value to reduce in the meal.
  - **Chosen Meal Buttons**
    - Clicking the chosen food in the meal section removes the option
    - Subtract the value on the total meal calories section.

## Bugs
**SolvedBugs**
  - It was allowed to add negative numbers in the personl information buttons calculating negative or to small meals per calories values making all the values of the food choices send the alert of surpassing the caloric needs. In the calculateCalories fucntion was added a several && operators in the if statement so it will compare the standard values of a 7 years old female (minimun wirght of 10 kilograms, minimun height of 90 centimeters, minimun age of 7), in case that the minimun requirements aren't acomplish it wont make the calculation and trow an alert message telling wich ones are and try it agains. Code added: 
   if (sex === "man" && weight >= 10 && height >= 90 && age >= 7) {
      dailyCalories.innerHTML = manCalculation;
      calculateCaloricDeficit(dailyCalories.innerText);
      foodChoices.style.display = "flex"
   } else if (sex === "woman" && weight >= 10 && height >= 90 && age >= 7) {
      dailyCalories.innerHTML = womanCalculation;
      calculateCaloricDeficit(dailyCalories.innerText);
   } else {
      alert "Insert right values to make the calculation. Weight have to be a minimun of 22 kilograms, minimun height 90 and minimun age of 7 years"
   }

  - The food choices didn't appear hidden wen the document was first loaded. Add the stily.display methos to the foodChoices with a value of "none" wen the page loades so it remain hidden like this: foodChoices.style.display = "none"
 **Validator Testing**
  - HTML
     - No errors were found on the W3C validator.
  - CSS
    - No errors found in W3C (Jigsaw) validator.
  - Accesibily
    - Perform a lighthouse test.
  - Java Script
    - ESLint was used and no errors were find.

**Unfixed Bugs**
 - No Unfixed bugs.

## Deployment ##
- The deployment was done on GitHub pages as follows:
    - Open the settings section on the repertory.
    - Click the option of pages on the left sidebar.
    - Select the master branch in the source section.


Live link [SuperPhysio](https://luisg882.github.io/Super-Physio-main/index.html).

## Credits ##
- The CSS basic structure and footer of the page were taken from [Love running](https://luisg882.github.io/Love-Run/)

## Media ##




## Credits

love math code to add the event listeners to the food choices wen the page loads and increment score
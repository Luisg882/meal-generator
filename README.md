# Meal Generator

One of the most difficult things about doing a diet is to make a meal that matches the calories needed and has the things you like or, at least, close to it. The purpose of this project is to create a web page that helps people create a meal for their diet given a selection of food choices like meat, rice, eggs, and others so the user can choose what they want and it will calculate the caloric value and compare with the amount of calories they need checking if it's going to break the diet or not.

The page is going to be divided into two sections. The first one is a  that will ask the user their weight, height, physical activity and age so it can calculate the amount of calories needed daily, then calculate the amount of calories needed to generate caloric deficits making them lose weight and finally calculate the amount of calories per meal. The second section will be the meal generator, here there is going to be one section with the food choices, when clicked they will go to the meal section, underneath the meal section there is going to be a calorie calculator telling the user how many calories this meal will have. The calories of the meal are going to be compared with the result of the calories per meal, calculated previously, in the case that surpasses the calories per meal it's going to show a warning message to the user saying how many calories they need to take off from the selected meal. 

![picture of the web page in different screen sizes: mobile, tablet, laptop and desktop](/assets/images/multiple-screen.webp)

## Features

- **Header**
    - Is the first part of the website. Shows the name of the page and the logo 

    ![image of the header section showing the name of the page, Meal generator, and the logo on the side](/assets/images/header.webp)

- **Introduction**
    - A brief introduction to how to lose weight by controlling the number of calories we take
    - The purpose of this paragraph is to provide more information on what this website is about so they will know what to expect and follow up.
    
    ![image of the introduction section](/assets/images/introduction.webp)

- **Personal Information**
    - In this section, there is a series of inputs asking for information about weight, height, age and sex.
    - This information is used later to calculate the amount of daily calories, caloric deficit and how many calories they need per meal.
    - A Calculate button is going to trigger the JavaScript to make this calculation.
    - Each of the inputs will have a validation: weight is a minimum of 10 kilograms, height a minimum of 90 centimeters and a minimum age of 7. All these values are standards for a 7-year girl.
    - In case the values are lesser than the minimum requirement the calculation is not going to happen an error div is going to appear indicating the minimum values accepted.
    
    ![image of the personal information section showing the weight, height, age, sex and the submit button](/assets/images/personal-information.webp)
    ![image of the error section saying: "Error. Insert the right values to make the calculation. Weight has to be a minimum of 22 kilograms, minimum height 90 and minimum age of 7 years"](/assets/images/error.webp)

- **Daily Calories**
    - In this section, we calculate the number of calories needed by following the basal metabolic rate (BMR), which is 10 * weight (kg) + 6.25 * height(cm) - 5 * age(y) + 5 for man and 10 * weight(kg) + 6.25 * height(cm) - 5 * age(y) - 161 for ​woman, with the personal information taking before.

    ![image of the daily calories before submitting the personal information, value of 0](/assets/images/daily-calories-0.webp)
    ![image of the daily calories after submitting the personal information, value of 1857.5](/assets/images/daily-calories.webp)

- **Caloric Deficit**
    - In this section, we calculate the caloric deficit by subtracting 20% of the daily calories.
    - This result is calculated after clicking the calculate button.
    - If the personal information doesn't pass the validation an Alert message is going to appear advising the user to modify the values and provide the minimum values, also the calculation is not going to happen.

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
    - This section is going to remain hidden until the user calculates his caloric needs.

    ![image of the food choices with the buttons hidden](/assets/images/hidden-food-choices.webp)
    ![image of the food choices](/assets/images/food-selection.webp)

- **Meal Section**
    - Over here all the clicked food from the Food Choices going to be displayed.
    - Each food choice has a click event listener that removes them from the meal choice.

    ![image of the Meal section with no food added](/assets/images/choiced-meal-empty.webp)
    ![image of the Meal section with food being added to it](/assets/images/choiced-meal.webp)

- **Total Meal Calories**
    - In this section, we calculate the amount of calories between all the food choices in the meal section and display it.
    - In the case the user surpasses the calories per meal an alert message is going to appear telling the user that they pass the amount of calories per meal and advise them to reduce the food choices in the meal section and how many calories they need to take from the meal. 
    - When the user surpasses the amount of Calories per meal the Reduce Calories div is going to appear telling the user how many calories they exceed it. Once the user removes enough food choices this div is going to disappear.

    ![image of the Total calories without any meal chosen](/assets/images/total-calories-0.webp)
    ![image of the Total calories of a chosen meal, value of 435](/assets/images/total-calories.webp)
    ![image of the Reduce Calories when it appears](/assets/images/reduce-calories.webp)
    ![image of the Reduce Calories when it disappears](/assets/images/reduce-calories-removed.webp) 

- **Footer**
    - It has links to social media and will open in a new tab. This is made to engage the user.

    ![image of the footer with the logos of the different social media pages](/assets/images/footer.webp)

## Features left to implement
   - A recipe generator to give a selection of recipes for the chosen food.
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
- **Python Tutor** - used to check the errors, and understand and correct the functions.

## Testing
- Tested in Google Chrome, Firefox and Edge browsers.
- Website is responsive in all browsers.
- All Social Media icons open in a new tab.
- Food choices work properly.
- The calculation button works properly.
- Food choices added to the Meal section work properly.

**Functional Testing**
  - **Personal Information Buttons**
    - Try to put negative numbers in the personal information section and it shows the alert message to make the changes
    - If you try to use the up and down arrows on the inputs will begin with the minimum allowed and won't let you go below it.
  - **Calculate Button**
    - Daily Calories, Caloric Deficit and Calories per Meal show the correct value for each section.
    - The food choices remain hidden until the calculation is completed.
  - **Food Choices Buttons**
    - All food choices are added to the chosen meal section Properly after being clicked.
    - Adds the caloric value to the Total Meal Calories section.
    - The message alert shows every time the user surpasses the limit, even if they pass it and press another food choice again it will show again with a higher value to reduce in the meal.
  - **Chosen Meal Buttons**
    - Clicking the chosen food in the meal section removes the option
    - Subtract the value on the total meal calories section.

## Bugs
**SolvedBugs**
  - It was allowed to add negative numbers in the personal information buttons calculating negative or small meals per calorie values making all the values of the food choices send the alert of surpassing the caloric needs. In the calculationCalories function was added several && operators were in the if statement so it will compare the standard values of a 7 years old female (minimum weight of 10 kilograms, minimum height of 90 centimeters, minimum age of 7), in case the minimum requirements aren't accomplished it won't make the calculation and throw an alert message telling which ones are and try it again. 
  
    Added code: 

    ![image of the code correction](/assets/images/code-correction.webp)

  - The food choices didn't appear hidden when the document was first loaded. Add the stily. display methods to the foodChoices with a value of "none" when the page loads so it remains hidden like this: foodChoices.style.display = "none"

  - After calculating and creating a meal if the user wanted to make a new one, the previous caloric calculations, meal and total meal calories didn't reset. To fix this in the CalculateCalories function I added variables for the Total Meal Counter and Amount of Calories to reduce and change the innerHTML to 0. Also, the Chosen meal Caloric Deficit, Daily Calories and Meal Calories innerHTML were modified.

    Added code:

    ![image of the code correction](/assets/images/correction-bug-calculate-calories.webp)


 **Validator Testing**
  - HTML
     - No errors were found on the W3C validator.
  - CSS
    - No errors were found in W3C (Jigsaw) validator.
  - Accessibility
    - Perform a lighthouse test.

    ![Image of lighthouse results: performance 99, accessibility 100, best practices 100, 80 SEO](/assets/images/lighthouse-results.webp)
  - Java Script
    - ESLint was used and no errors were found.

**Unfixed Bugs**
 - No Unfixed bugs.

## Deployment ##
- The deployment was done on GitHub pages as follows:
    - Open the settings section on the repertory.
    - Click the option of pages on the left sidebar.
    - Select the master branch in the source section.


Live link [Meal Generator](https://luisg882.github.io/meal-generator/).

## Credits

The code to add the event listeners in the food choices when the page loads and increment the Meal counter was adapted from the [Love Maths](https://luisg882.github.io/love-maths/)

Code from Love Math

![image of the love maths code](/assets/images/love-maths-loading-event-listener.png)

Code from Meal Generator

![image of the Meal Generator code](/assets/images/meal-generator-loading-event-listeners.png)

## Media 

- Logo image was taken from [pngtree](https://pngtree.com/so/italian-restaurant-logo-vector).
- Tuna Steak image [Meat Eating Military Man](https://meateatingmilitaryman.com/smoked-ahi-tuna-steak/).
- Pasta image [Class Bento](https://classbento.co.uk/tagliatelle-ravioli-and-tortellini-pasta-making-class-london).
- Meat Stake [Semana](https://www.semana.com/vida-moderna/articulo/por-que-la-gente-come-carne-aunque-afecte-al-planeta-y-tambien-a-la-salud/202241/).
- Boiled egg image [Diabetes Food Hub](https://www.diabetesfoodhub.org/recipes/hard-boiled-egg.html).
- Baby leaf salad [Roma o Matic](https://www.roma-o-matic.com/en/recipes/1611).
- Broccoli image [The Rascience](https://www.therascience.com/en_int/our-active-ingredients/plantes-et-champignons/brocoli).
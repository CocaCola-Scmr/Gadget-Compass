function closeQuiz(currentScreen) {
    let home = document.getElementById("home");
    currentScreen.style.display = "none";
    home.style.display = "block";
}

function startQuiz() {
    let home = document.getElementById("home");
    home.style.display = "none";
    brandSelection.style.display = "block";
}

function changeScreen(currentScreen, newScreen) {
    currentScreen.style.display = "none";
    newScreen.style.display = "block";
}

//device database

//creates a UI card for each phone
for (let phone of phones) {

    let container = document.getElementById("allDevicesContainer");

    container.innerHTML += '<div class="card">' + '<img src="' + phone.image + '">'
    +'<h3>' + phone.name + '</h3>'+'<a href ="' + phone.specifications + 
    '" target="_blank">Specifications</a>';

    container.innerHTML += '</div>'

}

//updates the style and label of the "next" button
function updateNextButton(currentScreen, state) {

    let nextButton = document.getElementById(currentScreen).children["nextScreenSkippable"];

    switch(state) {

        case "nextState":

            nextButton.style.color = "white";
            nextButton.style.backgroundColor = "#352DFF";
            nextButton.style.boxShadow = "0px 0px 50px 2px #9894ff";
            nextButton.innerHTML = "<b>Next</b>";
            break;

        case "skipState":

            nextButton.style.color = "#352DFF";
            nextButton.style.backgroundColor = "White";
            nextButton.style.boxShadow = "0px 0px 50px 2px white";
            nextButton.innerHTML = "<b>Skip</b>";
            break;

    }

}

//updates the style of a selection button
function updateSelectionButton(button, state) {

    switch(state) {

        case "selected":

            //makes the button blue
            button.style.backgroundColor = "#352DFF";
            button.style.borderColor = "#352DFF";
            button.style.color = "white";
            break;

        case "deselected":

            //makes the button white again
            button.style.backgroundColor = "white";
            button.style.color = "rgb(30, 30, 30)";
            button.style.borderColor = "rgb(30, 30, 30)";
            break;

    }

}

//brandPreferenceScreen
let brandPreferences = [];

function addBrandPreference(button) {

    let brandName = button.innerText;
    //if the button has not been selected
    //the background colour attribute is empty by default, hence the second condition
    if (button.style.backgroundColor == "white" || button.style.backgroundColor == "") {

        updateSelectionButton(button, "selected");
        updateNextButton("brandSelection", "nextState");
        brandPreferences.push(brandName);

    } else {

        //if the button is already selected
        updateSelectionButton(button, "deselected");

        if (brandPreferences.includes(brandName)) {
            let index = brandPreferences.indexOf(brandName);
            brandPreferences.splice(index, 1);   //removes the brand from brandPreferences array
        }

        if (brandPreferences.length == 0) {
            updateNextButton("brandSelection", "skipState");
        }
    } 

}

//if no brands were selected
function allBrandPreferences() {
    brandPreferences = ["Apple", "Samsung", "Google", "Oppo", "Nokia", "Other"];
}

//if no brands were selected intitially
function refreshBrandPreferences() {

    let buttonsContainer = document.getElementById("brandOptionsContainer");
    let buttons = buttonsContainer.getElementsByTagName("button");
    let i = 0;

    for (let button of buttons) {
        if (button.style.backgroundColor == "white" && button.style.backgroundColor == "white" || button.style.backgroundColor == "") {
            i++;
        }
    }

    if (i == 6) {
        brandPreferences = [];
    }
}

//For price selection screen

let maxPrice = 1500;
document.addEventListener('DOMContentLoaded', function() {

    let priceSlider = document.getElementById("priceSlider");
    let sliderThumbLabel = document.getElementById("priceSliderValue");

    //updates maxPrice and slider label when moved
    priceSlider.addEventListener('input', function() {

      maxPrice = priceSlider.value;
      priceSlider.value = maxPrice;
      sliderThumbLabel.textContent = '$' + maxPrice;
      let sliderPosition = (maxPrice - 300)/27 - 5.5;
      sliderThumbLabel.style.left = sliderPosition + '%';

      updateNextButton("priceSelection", "nextState");
      
    });

});

//Screen size preference screen

let screenSizePreferences = [];

//adds all screen sizes to screenSizePreferences
function refreshScreenSizePreferences() {

    screenSizePreferences = []; 
    for (i = 4.5; i < 7.5; i += 0.1) {
        screenSizePreferences.push(i.toFixed(1));
    }

}

refreshScreenSizePreferences();

function addScreenPreference(screenSize, selectionButton) {

    let buttonsContainer = document.getElementById("screenOptionsContainer")
    let buttons = buttonsContainer.getElementsByTagName('button');

    switch(screenSize) {
        case 'small':

            //if not already selected, add small screen sizes to suitableSizes array and update buttons
            if (!screenSizePreferences.includes('5.2')) {

                //update array - remove all other screen sizes and add suitable screen sizes
                screenSizePreferences = [];

                for (i = 4.5; i < 5.8; i += 0.1) {
                    screenSizePreferences.push(i.toFixed(1));
                }

                for (let button of buttons) {
                    updateSelectionButton(button, "deselected");
                }

                updateSelectionButton(selectionButton, "selected");
                updateNextButton("screenSizeSelection", "nextState");

            } else if (screenSizePreferences.includes('5.2')) {

                //else if already selected
                screenSizePreferences = [];
                updateSelectionButton(selectionButton, "deselected");

            }
            break;

        case 'medium':

            //if not already selected, add medium screen sizes to suitableSizes array and update buttons
            if (!screenSizePreferences.includes('6.0')) {

                //update array - remove all other screen sizes and add suitable screen sizes
                screenSizePreferences = [];
                for (i = 5.9; i < 6.4; i += 0.1) {
                    screenSizePreferences.push(i.toFixed(1));
                }

                for (let button of buttons) {
                    updateSelectionButton(button, "deselected");
                }

                updateSelectionButton(selectionButton, "selected");
                updateNextButton("screenSizeSelection", "nextState");
            } else if (screenSizePreferences.includes('6.0')) {
                //else if already selected
                screenSizePreferences = [];
                updateSelectionButton(selectionButton, "deselected");
            }

            break;

        case 'large':
            //if not already selected, add large screen sizes to suitableSizes array and update buttons
            if (!screenSizePreferences.includes('6.6')) {

                //update array - remove all other screen sizes and add suitable screen sizes
                screenSizePreferences = [];
                for (i = 6.5; i < 7.5; i += 0.1) {
                    screenSizePreferences.push(i.toFixed(1));
                }

                for (let button of buttons) {
                    updateSelectionButton(button, "deselected");
                }

                updateSelectionButton(selectionButton, "selected");
                updateNextButton("screenSizeSelection", "nextState");

            } else if (screenSizePreferences.includes('6.6')) {
                //else if already selected
                screenSizePreferences = [];
                updateSelectionButton(selectionButton, "deselected");
            }

            break;

    }

    //if nothing is selected at all, make sure the skip button is says "skip" not "next"
    if (screenSizePreferences.length == 0) {
        updateNextButton("screenSizeSelection", "skipState");
    }

}

//battery life selection screen

let batteryPreferences = [];

function updateBatteryPreference(preference, selectionButton) {

    //if the button has not been selected
    if (selectionButton.style.backgroundColor == "white" || selectionButton.style.backgroundColor == "") {

        //make every button in the container white
        let buttonsContainer = document.getElementById("batteryLifeOptionsContainer");
        let buttons = buttonsContainer.getElementsByTagName('button');

        for (let button of buttons) {
            updateSelectionButton(button, "deselected");
        }

        updateSelectionButton(selectionButton, "selected");
        updateNextButton("batteryLifeSelection", "nextState");

        //update batteryPreferences
        switch(preference) {
            case 'short':
                //a user who says they want short battery life would also be fine with long
                //since short is the minimum
                batteryPreferences = ["short", "moderate", "long"];
                break;
            case 'moderate':
                batteryPreferences = ["moderate", "long"];
                break;
            case 'long':
                batteryPreferences = ["long"];
                break;
        }

    } else {

        updateSelectionButton(selectionButton, "deselected");
        batteryPreferences = [];
        updateNextButton("batteryLifeSelection", "skipState");

    } 

}

function refreshBatteryPreferences() {
    batteryPreferences = ["short", "moderate", "long"];
}

//performance selection screen

let performancePreferences = [];

function updatePerformancePreference(preference, selectionButton) {

    //if the button has not been selected
    if (selectionButton.style.backgroundColor == "white" || selectionButton.style.backgroundColor == "") {

        //make every button in the container white
        let buttonsContainer = document.getElementById("performanceOptionsContainer")
        let buttons = buttonsContainer.getElementsByTagName('button');

        for (let button of buttons) {
            updateSelectionButton(button, "deselected");
        }

        updateSelectionButton(selectionButton, "selected");
        updateNextButton("performanceSelection", "nextState");

        //update performance preferences
        switch(preference) {
            case 'low':
                //a user who says they only need low performance would also be fine with high
                //since low is the minimum
                performancePreferences = ["low", "medium", "high"];
                break;
            case 'medium':
                performancePreferences = ["medium", "high"];
                break;
            case 'high':
                performancePreferences = ["high"];
                break;
        }

    } else {

        updateSelectionButton(selectionButton, "deselected");
        performancePreferences = [];
        updateNextButton("performanceSelection", "skipState");

    } 

}

function refreshPerformancePreferences() {
    performancePreferences = ["low", "medium", "high"];
}

//camera selection screen

let cameraPreferences = [];

function updateCameraPreference(preference, selectionButton) {

    //if the button has not been selected
    if (selectionButton.style.backgroundColor == "white" || selectionButton.style.backgroundColor == "") {

        //make every button in the container white
        let buttonsContainer = document.getElementById("cameraOptionsContainer")
        let buttons = buttonsContainer.getElementsByTagName('button');

        for (let button of buttons) {
            updateSelectionButton(button, "deselected");
        }

        updateSelectionButton(selectionButton, "selected");
        updateNextButton("cameraSelection", "nextState");

        //update performance preferences
        switch(preference) {
            case 'low':
                //a user who says they only need low camera quality would also be fine with high
                //since low is the minimum
                cameraPreferences = ["low", "medium", "high"];
                break;
            case 'medium':
                cameraPreferences = ["medium", "high"];
                break;
            case 'high':
                cameraPreferences = ["high"];
                break;
        }

    } else {

        updateSelectionButton(selectionButton, "deselected");
        cameraPreferences = [];
        updateNextButton("cameraSelection", "skipState");

    } 
}

function refreshCameraPreferences() {
    cameraPreferences = ["low", "medium", "high"];
}

//preferred features screen

let featurePreferences = [];

function addFeaturePreference(button) {
    
    let feature = button.innerText.replaceAll(' ', '');

    //if the button has not been selected
    if (button.style.backgroundColor == "white" || button.style.backgroundColor == "") {

        updateSelectionButton(button, "selected");
        updateNextButton("featuresSelection", "nextState");
        featurePreferences.push(feature);

    } else {

        //if the button is already selected
        updateSelectionButton(button, "deselected");
        let index = featurePreferences.indexOf(feature);
        featurePreferences.splice(index, 1);   //removes the feature from featurePreferences array

        if (featurePreferences.length == 0) {
            updateNextButton("featuresSelection", "skipState");
        }

    } 

}

//determining suitable devices

let suitablePhones = [];

function determineSuitableDevices() {

    suitablePhones = [];

    for (let phone of phones) {

        suitablePhones.push(phone);
        let isPhoneSuitable = true;

        function removeDeviceIf(condition) {

            if(isPhoneSuitable == true && condition == true) {
                isPhoneSuitable = false;
                suitablePhones.pop();
            }

        }

        //brand
        removeDeviceIf(!brandPreferences.includes(phone.brand));
        //price
        removeDeviceIf(phone.price > maxPrice);
        //screen
        removeDeviceIf(!screenSizePreferences.includes(phone.screenSize));
        //battery
        removeDeviceIf(!batteryPreferences.includes(phone.batteryLife));
        //performance
        removeDeviceIf(!performancePreferences.includes(phone.performance));
        //camera
        removeDeviceIf(!cameraPreferences.includes(phone.camera));
        //features
        for (let feature of featurePreferences) {
            removeDeviceIf(phone[feature] == false);
        }

    }

    //suitable devices screen

    let container = document.getElementById("suitableDevicesContainer");
    let cards = container.getElementsByClassName('card');
    let cardsArray = Array.from(cards);
    // Loop through the array and remove each card element
    cardsArray.forEach(card => card.remove());  

    if (suitablePhones.length != 0) {
        document.getElementById("noPhonesMessage").style.display = "none";
    } else {
        document.getElementById("noPhonesMessage").style.display = "block";
    }

    //creates a UI card for each suitable phone
    for (let phone of suitablePhones) {

        container.innerHTML += '<div class="card">' + '<img src="' + phone.image + '">'
        +'<h3>' + phone.name + '</h3>'+'<a href ="' + phone.specifications + 
        '" target="_blank" >Specifications</a></div>';

    }
        
}
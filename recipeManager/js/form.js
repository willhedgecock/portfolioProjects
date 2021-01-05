// FORM JS FILE
let userSubmittedRecipes = [];

let servingsSelect = document.querySelector("#servings");
let prepTimeHrMin = document.querySelector("#prep-time-measure");
let cookTimeHrMin = document.querySelector("#cook-time-measure");

let ingredientCount = 1;
let instructionCount = 1;

let UOMOptions = ["--Select UOM--", "Pinch", "Teaspoon", "Tablespoon", "Fluid Ounces", "Cup", "Can(s)", "Pint", "Gallon", '" " (eggs or bread)'];

function createRecipeInputField() {

    ingredientCount++;

    //FIRST INPUT FIELD

    let userIngredientsContainer = document.createElement("DIV");
    userIngredientsContainer.className= "ingredientSection";
    document.querySelector(".ingredients").appendChild(userIngredientsContainer);

    let ingredientInputLabel = document.createElement("label");
    ingredientInputLabel.htmlFor = "ingredient" + ingredientCount;
    ingredientInputLabel.innerHTML = "Ingredient " + ingredientCount;
    userIngredientsContainer.appendChild(ingredientInputLabel);

    let ingredientInput = document.createElement("input");
    ingredientInput.id = "ingredient" + ingredientCount;
    ingredientInput.type = "text";
    ingredientInput.name = "ingredient" + ingredientCount;
    userIngredientsContainer.appendChild(ingredientInput);

    //SECOND INPUT FIELD

    let ingredientInputUOMQuanLabel = document.createElement("label");
    ingredientInputUOMQuanLabel.htmlFor = "UOMQuantity" + ingredientCount;
    ingredientInputUOMQuanLabel.innerHTML = "Unit of measurement quantity  " + ingredientCount;
    userIngredientsContainer.appendChild(ingredientInputUOMQuanLabel);

    let ingredientInputUOMQuantity = document.createElement("input");
    ingredientInputUOMQuantity.id = "UOMQuantity" + ingredientCount;
    ingredientInputUOMQuantity.type = "number";
    ingredientInputUOMQuantity.name = "ingredient" + ingredientCount;
    userIngredientsContainer.appendChild(ingredientInputUOMQuantity);

    //DROP DOWN

    let UOMSelectLabel = document.createElement("label");
    UOMSelectLabel.htmlFor = "ingredientUOM " + ingredientCount;
    UOMSelectLabel.innerHTML = "Ingredient unit of measurement " + ingredientCount;
    userIngredientsContainer.appendChild(UOMSelectLabel);

    let ingredientInputUOM = document.createElement("select");
    ingredientInputUOM.id = "ingredientUOM" + ingredientCount;
    for(let x = 0; x < UOMOptions.length; x++) {
        let option = document.createElement("option");
        option.text = UOMOptions[x];
        ingredientInputUOM.appendChild(option);
    };

    userIngredientsContainer.appendChild(ingredientInputUOM);
}



function createInstructionField() {

    instructionCount++;

    let userInstructionsContainer = document.createElement("DIV");
    userInstructionsContainer.className= "instructionSection";
    document.querySelector(".instructions").appendChild(userInstructionsContainer);

    let instructionInputLabel = document.createElement("label");
    instructionInputLabel.htmlFor = "instruction" + instructionCount;
    instructionInputLabel.innerHTML = "Instruction " + instructionCount;
    userInstructionsContainer.appendChild(instructionInputLabel);

    let instructionInput = document.createElement("input");
    instructionInput.id = "instruction" + instructionCount;
    instructionInput.type = "text";
    instructionInput.name = "instruction" + instructionCount;
    userInstructionsContainer.appendChild(instructionInput);
}

document.querySelector("#addInstruction").addEventListener("click", createInstructionField);

function validateForm() {

    let validForm = true;
    let errMsg = " *Please fill out this field*";

    if(document.querySelector("#first-name").value == "") {
        document.querySelector("#firstNameErr").innerHTML = errMsg;
        validForm = false;
    } else {
        validForm = true;
        document.querySelector("#firstNameErr").style.display = "none";
    }  
    
    if(document.querySelector("#last-name").value == "") {
        document.querySelector("#lastNameErr").innerHTML = errMsg;
        validForm = false;
    } else {
        validForm = true;
        document.querySelector("#lastNameErr").style.display = "none";
    }

    if(document.querySelector("#recipe-title").value == "") {
        document.querySelector("#recipeTitleErr").innerHTML = errMsg;
        validForm = false;
    } else {
        validForm = true;
        document.querySelector("#recipeTitleErr").style.display = "none";
    }


    let servings = document.querySelector("#servings").value;
    //console.log(servings);

    if (servings == "default") {
        errMsg = " *Please select an option*"
        document.querySelector("#servingsErr").innerHTML = errMsg;
        validForm = false;
    } else {
        validForm = true;
        document.querySelector("#servingsErr").style.display = "none";
    }

    let prepTime = document.querySelector("#prep-time").value;
    //console.log(prepTime);

    if (prepTime == "") {
        errMsg = " *Please fill out this field*";
        document.querySelector("#prepTimeErr").innerHTML = errMsg;
        validForm = false;
    } else {
        validForm = true;
        document.querySelector("#prepTimeErr").style.display = "none";
    }

    let prepHrMin = document.querySelector("#prep-time-measure").value;
    //console.log(prepHrMin);

    if(prepHrMin == "default") {
        errMsg = " *Please select an option*";
        document.querySelector("#prepTimeMsrErr").innerHTML = errMsg;
        validForm = false;
    } else {
        validForm = true;
        document.querySelector("#prepTimeMsrErr").style.display = "none";
    }

    let cookTime = document.querySelector("#cook-time").value;
    //console.log(cookTime);

    if(cookTime == "") {
        errMsg = " *Please fill out this field*";
        document.querySelector("#cookTimeErr").innerHTML = errMsg;
        validForm = false;
    } else {
        validForm = true;
        document.querySelector("#cookTimeErr").style.display = "none";
    }

    let cookHrMin = document.querySelector("#cook-time-measure").value;
    //console.log(cookHrMin);

    if(cookHrMin == "default") {
        errMsg = " *Please select an option*";
        document.querySelector("#cookTimeMsrErr").innerHTML = errMsg;
        validForm = false;
    } else {
        validForm = true;
        document.querySelector("#cookTimeMsrErr").style.display = "none";
    }

    let ingredient = document.querySelector("#ingredient1").value;
    //console.log(ingredient);

    if(ingredient == "") {
        errMsg = " *Please fill out this field*";
        document.querySelector("#ingredientErr").innerHTML = errMsg;
        validForm = false;
    } else {
        validForm = true;
        document.querySelector("#ingredientErr").style.display = "none";
    }

    let UOMQuan = document.querySelector("#UOMQuantity1").value;
    //console.log(UOMQuan);

    if (UOMQuan == "") {
        document.querySelector("#measureQuanErr").innerHTML = errMsg;
        validForm = false;
    } else {
        validForm = true;
        document.querySelector("#measureQuanErr").style.display = "none";
    }

    let ingredientUOM = document.querySelector("#ingredientUOM1").value;
    //console.log(ingredientUOM);

    if(ingredientUOM == "default") {
        document.querySelector("#ingredientUOMErr").innerHTML = errMsg;
        validForm = false;
    } else {
        validForm = true;
        document.querySelector("#ingredientUOMErr").style.display = "none";
    }

    let instruction = document.querySelector("#instruction1").value;
    //console.log(instruction);

    if(instruction == "") {
        document.querySelector("#instructionErr").innerHTML = errMsg;
        validForm = false;
    } else {
        validForm = true;
        document.querySelector("#instructionErr").style.display = "none";
    }

    if (validForm == true) {
        return true;
    }

};

function processForm() {

    let userRecipe = {

        userFName: document.querySelector("#first-name").value,
        userLName: document.querySelector("#last-name").value,
        recipeTitle: document.querySelector("#recipe-title").value,
        servings: servingsSelect.options[servingsSelect.selectedIndex].value,
        prepTime: document.querySelector("#prep-time").value,
        prepTimeMeasure: prepTimeHrMin.options[prepTimeHrMin.selectedIndex].value,
        cookTime: document.querySelector("#cook-time").value,
        cookTimeMeasure: cookTimeHrMin.options[cookTimeHrMin.selectedIndex].value,
        recipeImg: document.querySelector("#recipe-img").value,
    
        ingredients: [
    
        ],
    
        instructions: [
    
        ]
    };

    if (validateForm()) {

    let x = 1;

    while(x <= ingredientCount) {

    let ingredientObj = {
        ingredient: document.querySelector("#ingredient" + x).value,
        ingredientUOMQuan: document.querySelector("#UOMQuantity" + x).value,
        ingredientUOM: document.querySelector("#ingredientUOM" + x).value
    };

    userRecipe.ingredients.push(ingredientObj);

    x++;

    } //END OF LOOP

    console.log(instructionCount);


    let y = 1;

    while (y <= instructionCount ) {

    let instructionObj = {
        
        instruction: document.querySelector("#instruction" + y).value
    }
    y++;

    userRecipe.instructions.push(instructionObj);

    };  //END OF LOOP

    alert("Form has been successfully submitted. Return to the homepage to see your recipe");
    

    let JSONUserRecipe = JSON.stringify(userRecipe);

    console.log(JSONUserRecipe);

    localStorage.setItem("userRecipe", JSONUserRecipe);    

}

};
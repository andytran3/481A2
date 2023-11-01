document.addEventListener("DOMContentLoaded", function() {
    var addIngredientButton = document.getElementById("addIngredientButton");
    
    addIngredientButton.addEventListener("click", function () {
        generateIngredientRow();
    });

    generateIngredientRow("Flour");
    generateIngredientRow("Salt");
    generateIngredientRow("Sugar");
    generateIngredientRow("Oil");
    generateIngredientRow("Yeast");
    generateIngredientRow("Water");

    ///

    var step1 = "Proof the yeast: In a large bowl or stand mixer add the yeast, water and a pinch of the sugar or honey. Allow to rest for 5-10 minutes until foaming and bubbly. (This is called “proofing” the yeast, to make sure it is active. If it doesn’t foam, the yeast is no good, and you need to start over with fresh yeast).";
    var step2 = "Prepare the dough: Add remaining sugar or honey, salt, oil, and 3 cups of flour. Mix to combine. Add another cup of flour and mix to combine. With the mixer running add more flour, ½ cup at a time, until the dough begins to pull away from the sides of the bowl.";
    var step3 = "Knead the dough: Mix the dough for 5 minutes on medium speed (or knead with your hands on a lightly floured surface, for 5-8 minutes). The dough should be smooth and elastic, and slightly stick to a clean finger, but not be overly sticky.";
    var step4 = "First Rise: Grease a large bowl with oil or cooking spray and place the dough inside. Cover with a dish towel or plastic wrap and allow to rise in a warm place* until doubled in size (about 1 ½ hours).";
    var step5 = "Punch the dough down really well to remove air bubbles."
    var step6 = "Divide into two equal portions. Shape each ball into long logs and place into greased loaf pans."
    var step7 = "Second rise: Spray two pieces of plastic wrap with cooking spray and lay them gently over the pans. Allow dough to rise again for about 45 minutes to one hour, or until risen 1 inch above the loaf pans."
    var step8 = "Adjust oven racks to lower/middle position. Preheat the oven to 350 F. Bake bread for about 30-33 minutes, or until golden brown on top. Give the top of a loaf a gentle tap; it should sound hollow."

    var addInstructionButton = document.getElementById("addInstructionButton");

    addInstructionButton.addEventListener("click", function () {
        generateIngredientRow();
    });

    generateInstructionRow(step1, 10);
    generateInstructionRow(step2, 10);
    generateInstructionRow(step3, 10);
    generateInstructionRow(step4, 10);
    generateInstructionRow(step5, 10);
    generateInstructionRow(step6, 10);
    generateInstructionRow(step7, 10);
    generateInstructionRow(step8, 10);

});

function generateIngredientRow(ingredientText, canWrite) {
    var ingredientContainer = document.getElementById("ingredientsContainer");

    var ingredientRow = document.createElement("div");

    var newLabel = document.createElement("label");
    newLabel.textContent = "Ingredients:";

    var newTextarea = document.createElement("textarea");
    newTextarea.name = "ingredients"; // Use name instead of id
    newTextarea.rows = 1;
    newTextarea.cols = 33;
    newTextarea.value = ingredientText || "";
    if (canWrite == true) {
        newTextarea.readOnly = false;
        console.log(canWrite);
    } else {
        newTextarea.readOnly = true;
    }
    ingredientRow.appendChild(newTextarea);
    ingredientRow.appendChild(document.createElement("br"));

    var editButton = document.createElement("button");
    editButton.textContent = "Edit Ingredient";
    ingredientRow.appendChild(editButton);

    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove Ingredient";
    ingredientRow.appendChild(removeButton);
    
    var lineBreak = document.createElement("br");

    ingredientContainer.appendChild(ingredientRow);
    ingredientContainer.appendChild(lineBreak);

    editButton.addEventListener("click", function () {
        newTextarea.readOnly = !newTextarea.readOnly;
    });

    removeButton.addEventListener("click", function () {
        ingredientContainer.removeChild(ingredientRow);
        ingredientContainer.removeChild(lineBreak);
    });
}

function generateInstructionRow(instructionText, size, canWrite) {
    var instructionContainer = document.getElementById("instructionsContainer");
    var instructionRow = document.createElement("div");

    var newLabel = document.createElement("label");
    newLabel.textContent = "Instructions:";
    instructionRow.appendChild(newLabel);
    instructionRow.appendChild(document.createElement("br"));

    var newTextarea = document.createElement("textarea");
    newTextarea.name = "instructions"; // Use name instead of id
    newTextarea.rows = size || 1;
    newTextarea.cols = 33;
    newTextarea.value = instructionText || "";
    if (canWrite == true) {
        newTextarea.readOnly = false;
        console.log(canWrite);
    } else {
        newTextarea.readOnly = true;
    }
    instructionRow.appendChild(newTextarea);
    instructionRow.appendChild(document.createElement("br"));

    var editButton = document.createElement("button");
    editButton.textContent = "Edit Instruction";
    instructionRow.appendChild(editButton);

    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove Instruction";
    instructionRow.appendChild(removeButton);
    
    var lineBreak = document.createElement("br");

    instructionContainer.appendChild(instructionRow);
    instructionContainer.appendChild(lineBreak);

    editButton.addEventListener("click", function () {
        newTextarea.readOnly = !newTextarea.readOnly;
    });

    removeButton.addEventListener("click", function () {
        instructionContainer.removeChild(instructionRow);
        instructionContainer.removeChild(lineBreak);
    });
}

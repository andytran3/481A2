document.addEventListener("DOMContentLoaded", function() {
    var addInstructionButton = document.getElementById("addInstructionButton");
    var instructionsContainer = document.getElementById("instructionsContainer");

    addInstructionButton.addEventListener("click", function () {
        var newLabel = document.createElement("label");
        newLabel.setAttribute("for", "instructions");
        newLabel.textContent = "Instructions:";
        newLabel.appendChild(document.createElement("br"));

        var newTextarea = document.createElement("textarea");
        newTextarea.id = "instructions";
        newTextarea.name = "instructions";
        newTextarea.rows = 1;
        newTextarea.cols = 33;
        newTextarea.value = "";
        newTextarea.appendChild(document.createElement("br"));

        var editButton = document.createElement("button");
        editButton.textContent = "Edit Instruction";

        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove Instruction";
        
        var lineBreak = document.createElement("br");

        instructionsContainer.appendChild(newTextarea);
        instructionsContainer.appendChild(editButton);
        instructionsContainer.appendChild(removeButton);
        instructionsContainer.appendChild(lineBreak);

        editButton.addEventListener("click", function () {
            newTextarea.readOnly = !newTextarea.readOnly;
        });

        removeButton.addEventListener("click", function () {
            var elements = instructionsContainer.getElementsByClassName("<br>");
            var lastElem = elements[elements.length - 1];
            if (lastElem) {
                lastElem.parentNode.removeChild(lastElem);
            }
            newTextarea.remove();
            editButton.remove();
            removeButton.remove();
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var addIngredientButton = document.getElementById("addIngredientButton");
    var ingredientContainer = document.getElementById("ingredientsContainer");

    addIngredientButton.addEventListener("click", function () {
        var newLabel = document.createElement("label");
        newLabel.setAttribute("for", "ingredients");
        newLabel.textContent = "Ingredients:";
        newLabel.appendChild(document.createElement("br"));

        var newTextarea = document.createElement("textarea");
        newTextarea.id = "ingredients";
        newTextarea.name = "ingredients";
        newTextarea.rows = 1;
        newTextarea.cols = 33;
        newTextarea.value = "";
        newTextarea.appendChild(document.createElement("br"));

        var editButton = document.createElement("button");
        editButton.textContent = "Edit Ingredient";

        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove Ingredient";
        
        var lineBreak = document.createElement("br");

        ingredientContainer.appendChild(newTextarea);
        ingredientContainer.appendChild(editButton);
        ingredientContainer.appendChild(removeButton);
        ingredientContainer.appendChild(lineBreak);

        editButton.addEventListener("click", function () {
            newTextarea.readOnly = !newTextarea.readOnly;
        });

        removeButton.addEventListener("click", function () {
            var elements = newTextarea.getElementsByClassName("<br>");
            var lastElem = elements[elements.length - 1];
            if (lastElem) {
                lastElem.parentNode.removeChild(lastElem);
            }
            newTextarea.remove();
            editButton.remove();
            removeButton.remove();
        });
    });
});
functions.maximizeFields();

functions.updateOutput();

buttons.forEach(function(currentButton) {
  functions.buttonClick(currentButton);
});

inputFields.forEach(function(currentInputField) {
  currentInputField.addEventListener("focus", function(event) {
    functions.toggleInactiveField(currentInputField);
  });
});

$(".field").on("change keyup paste", function() {
  functions.updateOutput();
});

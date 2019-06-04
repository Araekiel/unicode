//Giving the fields that are maximized by default the right width
functions.maximizeFields();

//Updating the default html and css in iframe
functions.updateOutput();

//Adding click event listener to buttons on sidebar
buttons.forEach(function(currentButton) {
  functions.buttonClick(currentButton);
});

//Adding focus event listener to fields
inputFields.forEach(function(currentInputField) {
  currentInputField.addEventListener("focus", function(event) {
    functions.toggleInactiveField(currentInputField);
  });
});

//On change keyup and paste event associated with and of the fields the output will be updated in the iframe
$(".field").on("change keyup paste", function() {
  functions.updateOutput();
});

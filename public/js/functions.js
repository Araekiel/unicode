const functions = {
  buttonClick: function(currentButton) {
    maximiseFields = this.maximizeFields;
    currentButton.addEventListener("click", function(event) {
      currentButton.classList.toggle("active-btn");
      fields.forEach(function(currentField) {
        if (
          currentButton.getAttribute("data-field") ===
          currentField.getAttribute("data-field")
        ) {
          currentField.classList.toggle("maximized-field");
        }
      });
      functions.maximizeFields();
    });
  },
  maximizeFields: function() {
    let numberOfMaximizedFields = Array.from(
      document.getElementsByClassName("maximized-field")
    ).length;
    //Each textarea has extra 4px in width but the iframe does not
    let extraPixels = fields[3].classList.contains("maximized-field")
      ? 4 * (numberOfMaximizedFields - 1)
      : 4 * numberOfMaximizedFields;
    fields.forEach(function(currentField) {
      //If the field is maximized it is given the right width
      if (currentField.classList.contains("maximized-field")) {
        currentField.style.width =
          (window.innerWidth - (50 + extraPixels)) / numberOfMaximizedFields +
          "px";
      }
    });
  },
  toggleInactiveField: function(mainInputField) {
    inputFields.forEach(function(curInputField) {
      if (curInputField === mainInputField) {
        curInputField.classList.remove("inactive-field");
      } else {
        if (!curInputField.classList.contains("inactive")) {
          curInputField.classList.add("inactive-field");
        }
      }
    });
  },
  updateOutput: function() {
    //Updating html and css in iframe
    $("#output-field")
      .contents()
      .find("html")
      .html(
        `<html><head><style>${fields[1].value}</style></head><body>${
          fields[0].value
        }</body></html>`
      );
    //Evaluating js in iframe with .eval method in JQuery
    document
      .getElementById("output-field")
      .contentWindow.eval($("#js-field").val());
  }
};

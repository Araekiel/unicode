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
    let extraPixels = fields[3].classList.contains("maximized-field")
      ? 4 * (numberOfMaximizedFields - 1)
      : 4 * numberOfMaximizedFields;
    fields.forEach(function(currentField) {
      if (currentField.classList.contains("maximized-field")) {
        currentField.style.width =
          (window.innerWidth - (50 + extraPixels)) / numberOfMaximizedFields +
          "px";
      }
    });
  },
  toggleInactiveField: function(currentInputField) {
    inputFields.forEach(function(curInputField) {
      if (curInputField === currentInputField) {
        curInputField.classList.remove("inactive-field");
      } else {
        if (!curInputField.classList.contains("inactive")) {
          curInputField.classList.add("inactive-field");
        }
      }
    });
  },
  updateOutput: function() {
    $("#output-field")
      .contents()
      .find("html")
      .html(
        `<html><head><style>${fields[1].value}</style></head><body>${
          fields[0].value
        }</body></html>`
      );
    document
      .getElementById("output-field")
      .contentWindow.eval($("#js-field").val());
  }
};

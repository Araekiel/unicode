//Elements
const fields = Array.from(document.getElementsByClassName("field"));
const inputFields = Array.from(document.getElementsByClassName("input-f"));
const buttons = Array.from(document.getElementsByClassName("btn"));

maximizeFields();

$("#output-field")
  .contents()
  .find("html")
  .html("<html><head></head><body>Output</body></html>");

buttons.forEach(function(currentButton) {
  buttonClick(currentButton);
});

inputFields.forEach(function(currentInputField) {
  currentInputField.addEventListener("focus", function(event) {
    toggleInactiveField(currentInputField);
  });
});

function buttonClick(currentButton) {
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
    maximizeFields();
  });
}

function maximizeFields() {
  let numberOfMaximizedFields = Array.from(
    document.getElementsByClassName("maximized-field")
  ).length;
  let extraPixels = document
    .getElementById("output-field")
    .classList.contains("maximized-field")
    ? 4 * (numberOfMaximizedFields - 1)
    : 4 * numberOfMaximizedFields;
  fields.forEach(function(currentField) {
    if (currentField.classList.contains("maximized-field")) {
      currentField.style.width =
        (window.innerWidth - (50 + extraPixels)) / numberOfMaximizedFields +
        "px";
    }
  });
}

function toggleInactiveField(currentInputField) {
  inputFields.forEach(function(curInputField) {
    if (curInputField === currentInputField) {
      curInputField.classList.remove("inactive-field");
    } else {
      if (!curInputField.classList.contains("inactive")) {
        curInputField.classList.add("inactive-field");
      }
    }
  });
}

// function updateOutput() {
//   $("#output-field")
//     .contents()
//     .find("html")
//     .html(
//       "<html></head><style>" +
//         $("#css-field").val() +
//         "</style></head><body>" +
//         $("#html-field").val() +
//         "</body></html>"
//     );

//   document
//     .getElementById("output-field")
//     .contentWindow.eval($("#js-field").val());
// }

// updateOutput();

// fields = Array.from(document.querySelectorAll(".field"));

// $("#elements").mousedown(function(event) {
//   console.log(event.target.id);
//   $(`#${event.target.id}`).toggleClass("active");
//   $(`#${event.target.id}-field`).toggleClass("invis");

//   numActiveFields =
//     4 - Array.from(document.getElementsByClassName("invis")).length;

//   for (var i = 0; i < 4; i++) {
//     if (!fields[i].classList.contains("invis")) {
//       $(`#${fields[i].id}`).css(
//         "width",
//         `${String($(window).width() / numActiveFields - 1)}px`
//       );
//       console.log(`#${fields[i].id}`);
//       console.log($(window).width());
//     }
//   }
// });

// console.log(fields);
// $(".fields").click(function(event) {
//   if (event.target.classList.contains("field")) {
//     for (var i = 0; i < 4; i++) {
//       if (fields[i].id !== event.target.id && fields[i].id !== "output-field") {
//         fields[i].classList.add("inac");
//       } else {
//         fields[i].classList.remove("inac");
//       }
//     }
//   }
// });

// $(".field").on("change keyup paste", function() {
//   updateOutput();
// });

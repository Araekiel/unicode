//Elements
const fields = Array.from(document.getElementsByClassName("field"));
const buttons = Array.from(document.getElementsByClassName("btn"));

maximizeField();

$("#output-field")
  .contents()
  .find("html")
  .html("<html><head></head><body>Output</body></html>");

buttons.forEach(function(currentButton) {
  buttonClick(currentButton);
});

function buttonClick(currentButton) {
  currentButton.addEventListener("click", function(event) {
    fields.forEach(function(currentField) {
      if (
        currentButton.getAttribute("data-field") ===
        currentField.getAttribute("data-field")
      ) {
        currentField.classList.toggle("min");
        currentField.classList.toggle("max");
      }
    });
    maximizeField();
  });
}

function maximizeField() {
  let numberMaxFields = Array.from(document.getElementsByClassName("max"))
    .length;
  let num = document.getElementById("output-field").classList.contains("max")
    ? 4 * (numberMaxFields - 1)
    : 4 * numberMaxFields;
  console.log(numberMaxFields + ", " + num);
  fields.forEach(function(currentField) {
    console.log(numberMaxFields);
    if (currentField.classList.contains("max")) {
      console.log(currentField);
      currentField.style.width =
        (window.innerWidth - (50 + num)) / numberMaxFields + "px";
      console.log((window.innerWidth - (50 + num)) / numberMaxFields);
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

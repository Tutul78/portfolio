const text = [
  "Network Engineer",
  " IT Support & Network Specialist",
  "MATLAB User",
  "CSE Student"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = text[i];
  let display = document.getElementById("typing");

  if (!isDeleting) {
    display.innerHTML = currentText.substring(0, j++);
    if (j > currentText.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    display.innerHTML = currentText.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }

  setTimeout(type, 100);
}

type();
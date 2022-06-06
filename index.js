const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outPutBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outPutBox.innerText = "your birthday is lucky🥳";
  } else {
    outPutBox.innerText = "your birthday is not lucky😞";
  }
}

function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if (sum && luckyNumber.value)
   compareValues(sum, luckyNumber.value);
  else outPutBox.innerText = "please enter the both fields😡";
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

checkNumberButton.addEventListener("click", checkBirthDateIsLucky);

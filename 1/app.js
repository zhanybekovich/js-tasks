const taskText =
  "Даны два целых числа. Проверьте, что первое число без остатка делится на второе.";

const h1 = document.getElementById("task");

h1.innerText = taskText;

const button = document.getElementById("submitBtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {
  const num1 = Number(document.getElementById("number1").value);
  const num2 = Number(document.getElementById("number2").value);

  if (num1 % num2 === 0) {
    result.innerText = "Делится";
  } else {
    result.innerText = "Не делится";
  }
});

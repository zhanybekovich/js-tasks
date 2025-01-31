const button = document.getElementById("submitBtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {
  const number1 = Number(document.getElementById("number1").value);

  const number2 = Number(document.getElementById("number2").value);
  result.innerText = `${number1 % number2}`;
});

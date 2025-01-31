const button = document.getElementById("submitBtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {
  const input = Number(document.getElementById("number1").value);
  result.innerText = "Result:";

  for (let i = 1; i <= input; i++) {
    result.innerText += ` ${i}`;
  }
});

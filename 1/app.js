const button = document.getElementById("submitBtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {
  const input = Number(document.getElementById("number1").value);
  result.innerText = "Result:";

  for (let i = input; i <= 20; i++) {
    result.innerText += ` ${i}`;
  }
});

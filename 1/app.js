const button = document.getElementById("submitBtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {
  const input = Number(document.getElementById("number1").value);
  result.innerText = "Result:";
  let summ = 0;
  for (let i = 1; i <= input; i++) {
    if (i % 2 === 0) {
      summ += i;
    }
  }
  result.innerText = summ;
});

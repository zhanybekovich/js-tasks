const taskText =
  "Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.";

const h1 = document.getElementById("task");

h1.innerText = taskText;

const label = document.getElementById("input-label");

label.innerText = "Введите строку";

const button = document.getElementById("submitBtn");

button.addEventListener("click", function () {
  const input = document.getElementById("user-input").value;
  const result = document.getElementById("result");

  if (input.length > 1) {
    result.innerText = input.slice(-2, -1);
  } else {
    result.innerText = "Ошибка введите нормальный текст";
  }
});

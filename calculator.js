let result = document.getElementById("result");

function getResult(num) {
  result.value += num;
}

function clearResult() {
  result.value = "";
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (err) {
    result.value = "Error";
  }
}

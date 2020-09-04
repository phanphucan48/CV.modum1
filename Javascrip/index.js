function doitien() {
  let money = document.getElementById("amount");
  let area = document.getElementById("area");
  if (area.value == 1) {
    document.getElementById("resuft").innerHTML =
      "resuft : " + money.value / 23000 + "USD";
  }
  if (area.value == 2) {
    document.getElementById("resuft").innerHTML =
      "resuft : " + money.value * 23000 + "VND";
  }
}

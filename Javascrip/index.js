function doitien() {
  let money = document.getElementById("amount");
  let area = document.getElementById("area");
  let menhgia = document.getElementById("denominations");

  if (area.value == 1 && menhgia.value == 3) {
    document.getElementById("resuft").innerHTML =
      "resuft : " + money.value / 23000 + " USD";
  } else if (area.value == 1 && menhgia.value == 4) {
    document.getElementById("resuft").innerHTML =
      "resuft : " + money.value * 1 + " VND";
  }

  if (area.value == 2 && menhgia.value == 4) {
    document.getElementById("resuft").innerHTML =
      "resuft : " + money.value * 23000 + " VND";
  } else if (area.value == 2 && menhgia.value == 3) {
    document.getElementById("resuft").innerHTML =
      "resuft : " + money.value * 1 + " USD";
  }
}

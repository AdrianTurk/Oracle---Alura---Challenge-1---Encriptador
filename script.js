const inText = document.getElementById("inTextBox");
const outText = document.getElementById("outTextBox");
const btnCopy = document.getElementById("copyBtn");

function encrypt() {
  if (inText.value.match(/^[a-z]*$/)) {
    var out = inText.value
      .replaceAll("a", "ai")
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat");
    outText.value = out;
    if (btnCopy) btnCopy.innerText = "Copiar";
  } else {
    alert(
      "Solo se puede ingresar texto en minúsculas, y sin acentos ni caracteres especiales. \n Intente nuevamente"
    );
  }
}

function decrypt() {
  if (inText.value.match(/^[a-z,ñ,¿,?,¡,! ]*$/)) {
    var out = inText.value
      .replaceAll("ufat", "u")
      .replaceAll("ober", "o")
      .replaceAll("imes", "i")
      .replaceAll("enter", "e")
      .replaceAll("ai", "a");
    outText.value = out;
    if (btnCopy) btnCopy.innerText = "Copiar";
  } else {
    alert(
      "El texto ingresado no debe contener ni caracteres especiales ni acentos. \n Intente nuevamente"
    );
  }
}

function clipboardCopy() {
  console.log("clipboard copy called");
  var mensaje = inText.value;
  navigator.clipboard.writeText(outText.value);
  if (btnCopy) btnCopy.innerText = "Copiado";
}

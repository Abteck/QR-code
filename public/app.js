const initApp = () => {
  const qrText = document.getElementById("qrText");
  const imgDiv = document.getElementById("imgDiv");
  const qrImg = document.getElementById("qrImg");
  const button = document.getElementById("button");

  button.onclick = function () {
    if (qrText.value.length > 0) {
      qrImg.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
        qrText.value;
      imgDiv.classList.add("show-img");
    } else {
      qrText.classList.add("error");
      setTimeout(() => {
        qrText.classList.remove("error");
      }, 1000);
    }
  };
};

document.addEventListener("DOMContentLoaded", initApp);

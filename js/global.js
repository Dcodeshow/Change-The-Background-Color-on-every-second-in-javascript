//Ref: https://youtu.be/efrW5-IYoCU?si=7EJyKdg5b76U6mjr

function ChangeBg() {
  let hex = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
let colorinterval;
function start() {
  // if this variable is not null
  if (!colorinterval) {
    colorinterval = setInterval(randomColor, 1000);
  }

  function randomColor() {
    document.body.style.backgroundColor = ChangeBg();
  }
}

function stop() {
  clearInterval(colorinterval);
  // clean variable after stop function is called
  colorinterval = null;
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);

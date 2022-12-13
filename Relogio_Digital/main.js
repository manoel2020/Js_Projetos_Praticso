const hora = document.querySelector("#hora");
const min = document.querySelector("#min");
const seg = document.querySelector("#seg");

setInterval(() => {
  let date = new Date();
  let dHora = date.getHours();
  let dMinutos = date.getMinutes();
  let dSegundos = date.getSeconds();

  hora.innerHTML = `${formatTime(dHora)}`;
  min.innerHTML = `${formatTime(dMinutos)}`;
  seg.innerHTML = `${formatTime(dSegundos)}`;
}, 1000);

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

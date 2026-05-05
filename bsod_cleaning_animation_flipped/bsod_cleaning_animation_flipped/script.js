const scene = document.getElementById("scene");
const btn = document.getElementById("playBtn");

let timers = [];

function reset() {
  timers.forEach(clearTimeout);
  timers = [];
  for (let i = 1; i <= 6; i++) {
    scene.classList.remove("run" + i);
  }
}

function play() {
  reset();
  btn.textContent = "إعادة التشغيل";

  const delays = [100, 1400, 2600, 4300, 6200, 8200];

  delays.forEach((delay, index) => {
    timers.push(
      setTimeout(() => {
        for (let i = 1; i <= index + 1; i++) {
          scene.classList.add("run" + i);
        }
      }, delay)
    );
  });
}

btn.addEventListener("click", play);

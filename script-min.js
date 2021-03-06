const AIGUILLEHR = document.querySelector(".hour-hand"),
      AIGUILLEMIN = document.querySelector(".min-hand"),
     AIGUILLESEC = document.querySelector(".second-hand");

function demarrerLaMontre() {
    const e = new Date,
        t = e.getSeconds(),
        r = t / 60 * 360 + 90;
    AIGUILLESEC.style.transform = `rotate(${r}deg)`;
    const n = e.getMinutes(),
        o = n / 60 * 360 + t / 60 * 6 + 90;
    AIGUILLEMIN.style.transform = `rotate(${o}deg)`;
    const a = e.getHours() / 12 * 360 + n / 60 * 30 + 90;
    AIGUILLEHR.style.transform = `rotate(${a}deg)`
}
var interval = setInterval(demarrerLaMontre, 1000);
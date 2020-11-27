document.querySelectorAll(".burger-btn").forEach((element) => {
  element.onclick = function () {
    document.querySelector(".burger-menu").classList.toggle("active");
  };
});

document.querySelectorAll("button").forEach((element) => {
  element.onmousedown = function () {
    element.classList.add("clicked");
  };
  element.onmouseup = function () {
    element.classList.remove("clicked");
  };
});

document.querySelector(".file").onchange = function (event) {
  document.querySelector(".fileText").innerHTML = event.target.files[0].name;
};

document.querySelectorAll(".order").forEach((element) => {
  element.onclick = function (event) {
    event.preventDefault();
    document.querySelector(".dialogue").classList.toggle("active");
  };
});

document.querySelectorAll(".call-menu-btn-o").forEach((element) => {
  element.onclick = function (event) {
    event.preventDefault();
    document.querySelector(".call-menu").classList.add("active");
  };
});

document.querySelector(".call-menu-btn-c").onclick = function (event) {
  event.preventDefault();
  document.querySelector(".call-menu").classList.remove("active");
  document.querySelector(".sendWord").style.display = "block";
  document.querySelector(".readyWord").style.display = "none";
};

document.querySelector(".sendCall").onclick = function (event) {
  event.preventDefault();
  document.querySelector(".readyWord").style.display = "block";
  document.querySelector(".sendWord").style.display = "none";
};

var linkNav = document.querySelectorAll("a"), //выбираем все ссылки к якорю на странице
  V = 0.25; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener(
    "click",
    function (e) {
      //по клику на ссылку
      e.preventDefault(); //отменяем стандартное поведение
      var w = window.pageYOffset, // производим прокрутка прокрутка
        hash = this.href.replace(/[^#]*(.*)/, "$1"); // к id элемента, к которому нужно перейти
      (t = document.querySelector(hash).getBoundingClientRect().top), // отступ от окна браузера до id
        (start = null);
      requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
      function step(time) {
        if (start === null) start = time;
        var progress = time - start,
          r =
            t < 0
              ? Math.max(w - progress / V, w + t)
              : Math.min(w + progress / V, w + t);
        window.scrollTo(0, r);
        if (r != w + t) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash; // URL с хэшем
        }
      }
    },
    false
  );
}

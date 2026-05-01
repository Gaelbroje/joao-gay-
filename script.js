alert("JS carregou");
document.addEventListener("DOMContentLoaded", function () {

  console.log("JS funcionando");

  // Fade ao aparecer no scroll
  const elementos = document.querySelectorAll(".fade");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, {
      threshold: 0.2
    });

    elementos.forEach(function (el) {
      observer.observe(el);
    });

  } else {
    // Fallback para navegadores antigos
    elementos.forEach(function (el) {
      el.classList.add("show");
    });
  }

  // Interação com o título
  const titulo = document.getElementById("titulo");

  if (titulo) {
    titulo.addEventListener("mouseover", function () {
      titulo.innerText = "QUE ISSO?!";
    });

    titulo.addEventListener("mouseout", function () {
      titulo.innerText = "BATALHA ÉPICA";
    });
  }

  // Efeito ao clicar nas imagens
  const imagens = document.querySelectorAll(".boxe");

  imagens.forEach(function (img) {
    img.addEventListener("click", function () {

      const efeitos = [
        "rotate(20deg)",
        "scale(1.3)",
        "translateY(-30px)",
        "skew(10deg)"
      ];

      const efeito = efeitos[Math.floor(Math.random() * efeitos.length)];

      img.style.transform = efeito;

      setTimeout(function () {
        img.style.transform = "none";
      }, 500);

    });
  });

});
document.addEventListener("DOMContentLoaded", function () {
  const titulo = document.getElementById("titulo");

  if (titulo) {
    titulo.style.color = "red";
  }
});
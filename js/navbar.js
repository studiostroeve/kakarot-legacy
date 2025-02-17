const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

// Toggle menu functionality
menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    const auras = document.querySelectorAll(".navbar__item");
    const template = document.querySelector("#aura-template").content.firstElementChild;

    auras.forEach(aura => {
      let svgInstance = null;
      let seedInterval;

      aura.addEventListener("mouseenter", () => {
        // Clone and append the SVG if it doesn't already exist
        if (!svgInstance) {
          svgInstance = template.cloneNode(true);
          aura.appendChild(svgInstance);
        }
        let counter = 0
        seedInterval = setInterval(() => {
          const turbulence = svgInstance.querySelector("#turbulence");
          if (turbulence) {
            counter += 1
            turbulence.setAttribute("seed", counter);
          }
          if (counter === 3) {counter = 0}
        }, 80);
      });

      aura.addEventListener("mouseleave", () => {
        // Remove the SVG instance and clear the interval when mouse leaves
        if (svgInstance) {
          svgInstance.remove();
          svgInstance = null;
        }
        clearInterval(seedInterval);
      });
    });
  });
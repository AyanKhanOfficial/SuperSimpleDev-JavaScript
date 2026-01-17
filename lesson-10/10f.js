 const buttons = document.querySelectorAll(".js-button");

      buttons.forEach(function (button) {
        button.addEventListener("click", function () {
          button.classList.toggle("toggle-button");
        });
      });
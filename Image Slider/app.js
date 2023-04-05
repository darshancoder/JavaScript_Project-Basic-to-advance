(function () {
    const picture = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
  
    const buttons = document.querySelectorAll(".btn");
    const imageDiv = document.querySelector(".img-container");
  
    let counter = 0;
  
    buttons.forEach(function (button) {
      button.addEventListener("click", function (e) {
        if (button.classList.contains("btn-left")) {
          counter--;
          if (counter < 0) {
            counter = picture.length - 1;
          }
        }
        if (button.classList.contains("btn-right")) {
          counter++;
          if (counter > picture.length - 1) {
            counter = 0;
          } 
        }
        
        // Set the background image of the img-container element to the current image
        imageDiv.style.background = `url('image/${picture[counter]}.jpg') center/cover fixed no-repeat`;
      });
    });
  })();
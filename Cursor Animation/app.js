const cursor = document.querySelector(".cursor");
var timeOut;

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  function mouseStopped() {
    cursor.style.display = "none";
  }
  // Hide our animation
  clearTimeout(timeOut);
  timeOut = setTimeout(mouseStopped, 1000);
});

// /Stop animation off the screen
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});

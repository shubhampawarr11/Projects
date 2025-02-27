const colorPicker = document.getElementById("colorPicker");
const colorValue = document.getElementById("colorValue");

// adds an event listener to color picker
// event is triggered when value of color input changes
colorPicker.addEventListener("input", (event) => {
  const selectedColor = event.target.value;
  // event.target it trigers the event in color picker
  // .value gets the current value of the color picker
  colorValue.textContent = selectedColor;
  // it updates the text inside the Selected Color in hex code
  document.body.style.backgroundColor = selectedColor;
  // changes the background color of entire page
});

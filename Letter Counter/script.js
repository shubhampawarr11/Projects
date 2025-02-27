function countLetters() {
  const text = document.getElementById("inputText").value;
  const letterCount = text.replace(/[^a-zA-Z]/g, "").length; // Remove non-letter characters and count letters
  document.getElementById("letterCount").textContent = letterCount;
}

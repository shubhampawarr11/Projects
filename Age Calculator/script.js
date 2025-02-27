document.getElementById("ageForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the user's input (Date of Birth)
  const dob = document.getElementById("dob").value;

  if (!dob) {
    alert("Please select your date of birth.");
    return;
  }

  // Calculate the age
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  // Adjust age if the birthday hasn't occurred yet this year
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  // Show the result
  const result = document.getElementById("result");
  result.textContent = `You are ${age} years old.`;
});

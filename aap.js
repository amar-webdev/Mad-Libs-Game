const generateMadLibBtn = document.getElementById("generate-madlib-btn");
const madlibResult = document.getElementById("madlib-result");

generateMadLibBtn.addEventListener("click", () => {
  const person = document.getElementById("people-dropdown").value;
  const verb = document.getElementById("verbs-dropdown").value;
  const location = document.getElementById("location-dropdown").value;
  const food = document.getElementById("food-dropdown").value;

  if (!person || !verb || !location || !food) {
    alert("Please fill out all fields!");
    return;
  }

  const madlib = `<p>${person} ${verb} on ${location} and eat ${food}.</p>`;
  madlibResult.innerHTML = madlib;

});
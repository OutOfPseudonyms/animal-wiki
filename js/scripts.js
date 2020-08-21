$(document).ready(function () {
  $("#formOne").submit(function (event) {
    const animalInput = $("input#animal").val().toLowerCase();

    if (animalInput === "turtle" || animalInput === "turtles") {
      $('#turtles').show();
    } else if (animalInput === "snake" || animalInput === "snakes") {
      $('#snakes').show();
    } else if (animalInput === "insect" || animalInput === "insects") {
      $('#insects').show();
    }
  })
  $("#formTwo").click()
})
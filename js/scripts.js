$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    // saving the value of the input for further use in the code
    const animalInput = $("input#animal").val().toLowerCase();
    console.log(animalInput);
    if (animalInput === "turtle" || animalInput === "turtles") {
      $('#turtles').show();
      $('#snakes').hide();
      $('#insects').hide();
    } else if (animalInput === "snake" || animalInput === "snakes") {
      $('#snakes').show();
      $('#turtles').hide();
      $('#insects').hide();
    } else if (animalInput === "insect" || animalInput === "insects") {
      $('#insects').show();
      $('#turtles').hide();
      $('#snakes').hide();
    }
  })
  // function that handles a click on images
  $("#green-sea-turtle").click(function () {
    $("#green-turtle-text").toggle();
  });
  $("#african-spurred-tortoise").click(function () {
    $("#spurred-turtle-text").toggle();
  });
  $("#red-eared-slider-terrapin").click(function () {
    $("#terrapin-text").toggle();
  });
  $("#corn-snake").click(function () {
    $("#corn-text").toggle();
  });
  $("#green-tree-python").click(function () {
    $("#python-text").toggle();
  });
  $("#golden-lancehead").click(function () {
    $("#golden-text").toggle();
  });
  $("#fire-ants").click(function () {
    $("#fire-text").toggle();
  });
  $("#monarch-butterfly").click(function () {
    $("#monarch-text").toggle();
  });
  $("#honey-bee").click(function () {
    $("#honey-text").toggle();
  });
})
$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    // saving the value of the input for further use in the code
    const animalInput = $("input#animal").val().toLowerCase();
    console.log(animalInput);
    if (animalInput === "turtle" || animalInput === "turtles") {
      $('#turtles').show();
    } else if (animalInput === "snake" || animalInput === "snakes") {
      $('#snakes').show();
    } else if (animalInput === "insect" || animalInput === "insects") {
      $('#insects').show();
    }
  })
  // function that handles a click on images
  $("#green-sea-turtle").click(function () {
    alert("Handler for .click() called.");
  });
  $("#african-spurred-tortoise").click(function () {
    alert("Handler for .click() called.");
  });
  $("#red-eared-slider-terrapin").click(function () {
    alert("Handler for .click() called.");
  });
  $("#corn-snake").click(function () {
    alert("Handler for .click() called.");
  });
  $("#green-tree-python").click(function () {
    alert("Handler for .click() called.");
  });
  $("#golden-lancehead").click(function () {
    alert("Handler for .click() called.");
  });
  $("#fire-ants").click(function () {
    alert("Handler for .click() called.");
  });
  $("#monarch-butterfly").click(function () {
    alert("Handler for .click() called.");
  });
  $("#honey-bee").click(function () {
    alert("Handler for .click() called.");
  });
})
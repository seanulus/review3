$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    //debugger
    var total = 0;
    var userNumber = parseInt($("input#userInput").val());
    var numberArray = [];

    for (index = 1; index <= userNumber; index += 1) {
      if (index % 3 === 0) {
        numberArray.push("ping");
      } else if (index % 5 === 0) {
        numberArray.push("pong");
      } else {
        numberArray.push(index);
      }
    }
    numberArray.map(function(list) {
      $(".result").append("<li>" + list + "<li>")
    });

  });
});

$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    //debugger
    var total = 0;
    var userNumber = parseInt($("input#userInput").val());
    var numberArray = [];
    var li = $("<li>").appendTo("#result");
    var json = { numbers: numberArray}
    //var $resultContainer = $("#result");

    for (index = 1; index <= userNumber; index += 1) {
      if (index % 3 === 0 && index % 5 === 0) {
        numberArray.push("pingpong");
      } else if (index % 5 === 0) {
        numberArray.push("pong");
      } else if (index % 3 === 0) {
        numberArray.push("ping");
      } else {
        numberArray.push(index);
      }
    }

    $(json.numbers).map(function(index, item) {
      li.append($(document.createElement("li")).text(item));
    });

    // $.map(numberArray, function(index, value) {
    //   var $li = $("<li/>").html(value).appendTo($resultContainer).hide();
    // });
    //
    // $("li", $resultContainer).slideDown(1500);
    // numberArray.map(function(list) {
    //   $(".result").append('<li>' + list +'<li>');
    // });

  });
});

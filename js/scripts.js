var counter = function(userNumber) {

  var numberArray = [];
  for (i = 1; i <= userNumber; i += 1) {
    if (i % 15 === 0) {
      numberArray.push("pingpong");
    } else if (i % 5 === 0) {
      numberArray.push("pong");
    } else if (i % 3 === 0) {
      numberArray.push("ping");
    } else {
      numberArray.push(i);
    }
  }
  return numberArray;
};


$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    
    $("#result").empty();
    var userNumber = parseInt($("input#userInput").val());
    var result = counter(userNumber);
    var li = $("<li>").appendTo("#result");
    var json = { numbers: result}
    //var $resultContainer = $("#result");




    $(json.numbers).map(function(index, item) {
      li.append($(document.createElement("li")).text(item));
    });

    // $.map(numberArray, function(index, value) {
    //   var $li = $("<li/>").html(value).appendTo($resultContainer).hide();
    // });
    //
    // $("li", $resultContainer).slideDown(1500);
    // result.map(function(list) {
    //   $("#result").append('<li>' + list +'<li>');
    // });

  });
});

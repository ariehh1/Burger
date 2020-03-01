$(function devourIt() {
  // button click to set devoured status
  $(".devour-it").on("click", function() {
    console.log("devour-it clicked");

    var burger_id = $(this).val();
    console.log("burger_id = " + burger_id);

    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(function(data) {
      location.reload();
    });
  });

  // button click to capture new burger data
  $("#submit-button").on("click", function(event) {
    event.preventDefault();
    console.log("submit-button clicked!");

    var newBurger = {
      burger_name: $("#burger-input")
        .val()
        .trim(),
      devoured: false
    };

    console.log("newBurger = " + JSON.stringify(newBurger));

    // // Send the POST request

    $.ajax("/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger!");

      location.reload();
    });
  });
});

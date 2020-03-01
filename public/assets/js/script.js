"use strict";

$(function() {
  $(".devour-it").on("click", function(event) {
    console.log("devour-it clicked");

    const burger_id = $(this).val();
    console.log("burger_id" + burger_id);

    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(function(data) {
      location.reload();
    });
  });

  $("#submit-button").on("click", function(event) {
    event.preventDefault();
    console.log("submit-button clicked");

    const newBurger = {
      burger_name: $("#burger-input")
        .val()
        .trim(),
      devoured: false
    };

    console.log("newBurger = " + JSON.stringify(newBurger));

    $.ajax("/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      location.reload();
    });
  });
});

$(".burgerBtn").on("click", function () {
    var queryURL = "/api/burgers/" + $(this).data("id");

    var newDevouredState = {
        devoured: true
    }

    $.ajax(queryURL, {
        type: "PUT",
        data: newDevouredState
    }).then(
        function () {
            location.reload();
        }
    );
});

$("#addBurger").on("click", function () {
    $('#burgerModal').modal(focus);
});

$("#newBurger").on("submit", function (e) {
    e.preventDefault();

    if ($("#burgerName").val()) {
        var newBurger = {
            burger_name: $("#burgerName").val(),
            devoured: 0
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    } else {
        $("#error").text("Please enter a valid burger name.");
    }
});


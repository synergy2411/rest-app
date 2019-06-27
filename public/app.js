$("#getUsers").on("click", function (event) {
    event.preventDefault();
    $.ajax({
        method: "GET",
        url: "/users",
        success: function (response) {
            console.log(response);
            response.forEach(user => {
                let div = document.createElement("div");
                div.innerHTML = "<h3>" +user.email+"</h3>";
                div.setAttribute("class", "container well");
                $("#main").append(div);
            })

        },
        error: function (err) { console.log(err) }
    })
})
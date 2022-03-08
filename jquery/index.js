// console.log($("h1").css("font-size")); // single property will get the value
// console.log($("h1").css("font-size", "72px")); // two properties will set the value

$("h1").addClass("big-title margin-50"); // Add classes
// $("h1").removeClass("big-title"); // Remove classes
// $("h1").hasClass("margin-50"); // Checks to see if a class is added

// $("h1").text("Bye");
// $("button").html("<em>Hey</em>")

// console.log($("img").attr("src"));
// $("a").attr("href", "https://www.yahoo.com");

// $("h1").click(function() {
//     $("h1").css("color", "purple");
// })

// $(document).keydown(function(event) {
//     $("h1").text(event.key);
// });

// $("h1").on("mouseover", function() {
//     $("h1").css("color", "purple");
// });

// $("h1").before("<button>New</button>"); // Adds before opening tag of selected element
// $("h1").after("<button>New1</button>"); // Adds after opening tag of selected element
// $("h1").prepend("<button>New1</button>"); // Adds just before the content of h1
// $("h1").append("<button>New1</button>"); // Adds after the content of h1
// $("button").remove(); // Removed all buttons

$("button").on("click", function() {
    // $("h1").hide(); // Adds display: none to selected element
    // $("h1").fadeToggle(); // Toggles fade
    // $("h1").slideToggle(); // Toggles slide
    $("h1").animate({opacity: 0.5});
});
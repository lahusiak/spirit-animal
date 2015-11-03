console.log("I'm an animal!");
var values = {};

$(document).ready(function(){

    $('#search').submit(function(event){
        event.preventDefault();
        $.each($(this).serializeArray(), function(i, field){
            values[field.name] = field.value;
        });

        $.ajax({
            type: "GET",
            url: "/data",
            data: values,
            success: function(data){
                console.log("Meow", data);
            appendDom(data);

            }

        });
        document.getElementById("search").reset();
    });

});

function appendDom(data) {
    clear();
    console.log("I'm appending");
    for (var i = 0; i < data.length; i++) {
        $("#showAnimal").append("<div class = 'person'>" + "<p>"+ "Name: " + data[i].name + "</p>" +
            "<p>" + "Spirit Animal: " + data[i].spiritAnimal + "</p>" + "</div>");
        }
};

function clear(){
    $("#showAnimal").empty();
}
console.log("connect");


//the array for the gifs to get connected to.

var animals = ["dog","cat","lizard","fish"]

for (var i=0; i<animals.length; i++) {
var x =$("<button>");
x.addClass('animal');
//console.log(x)
x.attr("data-type",animals[i]);
x.text(animals[i]);
$("#animals").append(x);

};

//When clicked 

$(document).on('click', '.animal', function(){
    console.log("aniumal was clicked");
    var name = $(this).attr("data-type")
    var query = "http://api.giphy.com/v1/gifs/search?q=" + name + 
    "&api_key=F23l80vzJW7GhUpjNIbByxNhXsv2pZe3"
    //<img src="googhle.com">

    $.ajax({
        url:query,
        method:"GET"
    }).then(function(response){
        console.log(response)
        var results = response.data;

        for (var i=0; i<results.length; i++) {
            var animalImg = $("<img>");
            animalImg.attr("src", results[i].images.fixed_width.url)
            console.log(results[i].url)
            // drag id in html .append animalimG
            $("#gifs").append(animalImg);

        }
    })
})


$(document).ready(function() {

window.addEventListener("keydown", function(keypressed){
    console.log("you alive?");
	if([37, 39].indexOf(keypressed.keyCode) > -1){
		keypressed.preventDefault();

		if(keypressed.keyCode == 37){
            $("body").css({"background-color" : "#F4EAD3" });
		} else if(keypressed.keyCode == 39){
            $("body").css({"background-color" : "white" });
		}
	}
})

});
$(document).ready(function(event) {
    $("form#pingpong").submit(function(event) {
    $('#output').text("");
    event.preventDefault();

        var value;

    		function pingPong(){

    			for (var i = 1; i <= $('#input1').val(); i++) {
    				if (i % 15 == 0) {
    					value = 'PingPong'
    				}
    				else if (i % 3 == 0) {
    					value = 'Ping'
    				}
    				else if (i % 5 == 0) {
    					value = 'Pong'
    				}
    				else {
    					value = i
    				}

    				$('#output').append('<li>' + value + '</li>')
    			}
    		}

    		$(document).ready(function(){
    			pingPong();
    		})
  });
});

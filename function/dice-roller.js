	var number = process.argv.slice(2);
	var string = "";
		var randomd;
	for (i = 0; i < number; i++) { 
	  function random(min, max) {
		min = Math.ceil(min)
		max = Math.floor(max);
		return Math.floor(Math.random()*(max - min + 1)) + min; }
	 	randomd = random(1,6); 
    	if (i<number-1) {
  	string=string+randomd + ', '; 
	}
	 else string=string+randomd; }
	console.log("Rolled " + number + " dice " + string );








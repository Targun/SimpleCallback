
//Step 1: 

//Create a fuction add

function add(first, second) {
	console.log(first+second);
}

add(2,3);
//Result will return 5 in the console






//Step 2: 

//Add a callback argument

function add(first, second, callback) {
	console.log(first+second);
	callback();
}

add(2,3, function(){
	console.log('Bam!');
});
//Result will return 5 and Bam!






// Step 3: 

// Clean Up the Callback

function add(first, second, callback) {
	console.log(first+second);
	//Add and if statement so that the callback is only called if it there
	if (callback) {
		callback();
	}
}

//Create a fuction for logBam to pass into the callback argument
function logBam() {
	console.log('Bam!');	
}

add(2,3, logBam);





//PS

//Relating to jQuery

function greatClick() {
	//Do Something Great
}

$('#exampleDiv').click(greatClick);

























// Node package request
const request = require('request');
request('http://www.google.com', function (error, response, body) {
  	//console.error('error:', error); // Print the error if one occurred
  	//console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  	//console.log('body:', body); // Print the HTML for the Google homepage.

	//if( !error && response.statusCode == 200){
	// console.log(body);
	//}
	
	
	if( error){
		console.log("SOMETHING WENT WRONG!");
		console.log(error);
	}else{
		if(response.statusCode == 200){
			// Things worked
			console.log(body);
		}
	}
});
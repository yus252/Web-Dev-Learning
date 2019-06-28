const request = require('request');
request('https://jsonplaceholder.typicode.com/users/1', (error, response, body) => {
	//eval(require('locus'));
	if( !error && response.statusCode == 200){
		var parseData = JSON.parse(body);
		console.log(parseData['name'] + "'s company is " + parseData['company']['name']);
		console.log(parseData.name + '\'s email is '+ parseData.email );
	}
});
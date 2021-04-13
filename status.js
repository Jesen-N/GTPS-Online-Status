//Made By Jesen N#9071
//Gabut doang xixixi

const fs = require('fs');
const file = 'playeronline.txt';

setInterval(function() {
	fs.readFile(file, (err, on) => {
		if (err) console.log(err);

		console.clear();
		console.log('Players Online: ' + on);
	});
}, 5000);

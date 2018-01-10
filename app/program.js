var OSinfo = require('../modules/OSInfo');
var changeTime = require('../modules/OSInfo');


process.stdin.setEncoding("utf-8");
console.log("To check the current verion, type: version. To check the language, type: language. To exit, type: exit");

process.stdin.on("readable", function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		switch (instruction) {
			case "exit":
				process.stdout.write("Quiting\n");
				process.exit();
			
			case "version":
				console.log(process.versions);
				break;

			case "language":
				console.log(process.env);
				break;

			case "/getOSinfo":
				OSinfo.print();
				
				break;

			case "time":
				changeTime.time();
				break;

			default:
				process.stderr.write("Wrong instruction!!!\n");
		}
			
	}
});


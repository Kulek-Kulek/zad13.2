var os = require("os");

function getOSinfo() {
	var type = os.type();		
		if(type === 'Darwin') {
    		type = 'OSX';
		} else if(type === 'Windows_NT') {
    		type = 'Windows';
		}
		var release = os.release();
		var cpu = os.cpus()[0].model;
		var uptime = os.uptime();
		var userInfo = os.userInfo(); 
		console.log('System:', type);
		console.log('Release:', release);
		console.log('CPU model:', cpu);
    	console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
    	console.log('User name:', userInfo.username);
    	console.log('Home dir:', userInfo.homedir);
}

function time() {
	var uptime = os.uptime();
	var hour = uptime / 3600;
	var minute = uptime / 60;
	if (uptime >= 60 && uptime < 3600) {
		console.log('Uptime: ~', minute.toFixed(0), 'min');
	} if (uptime >= 3600)  {
		console.log('Uptime: ~', hour,'h');
	}
}

exports.print = getOSinfo;
exports.time = time;



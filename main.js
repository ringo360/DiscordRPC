const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const rpcfunc = require('./internal/rpcfunc.js');

console.log("Welcome to DiscordRPC Maker!")
console.log("")
rl.question('[1] Create RPC\n' + '[2] Edit RPC\n' + '[3] Delete RPC\n' + '[4] Settings\n' + '[5] Exit\n' + 'Please Enter >> ', (ans) => {
	const number = parseInt(ans);

	if (isNaN(number)) {
		console.log('Invalid input. Please enter a number(1~5)!')
	} else if (number >= 1 && number <= 5) {
		switch (number) {
			case 1:
				console.log("1");
				rpcfunc.create('test');
				break;
			case 2:
				console.log("2");
				rpcfunc.edit('test2')
				break;
			case 3:
				console.log("3");
				rpcfunc.del('test3')
				break;
			case 4:
				console.log("4");
				rpcfunc.settings('test4')
				break;
			case 5:
				console.log("(5)Exit");
				process.exit()

			default:
				console.log(`detect ${number}`);
		}
	} else {
		console.log('Invalid input. Please enter a number(1~5)!')
	}
})
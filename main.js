const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log("Welcome to DiscordRPC Maker!")
console.log("")
rl.question('[1] Create RPC\n' + '[2] Edit RPC\n' + '[3] Delete RPC\n' + '[4] Settings\n' + '[5] Exit\n' + 'Please Enter >> ', (ans) => {
	const number = parseInt(ans);

	if (isNaN(number)) {
		console.log('Invalid input! Please enter a number(1~5)!')
	} else if (number >= 1 && number <= 9) {
		switch (number) {
			case 1:
				console.log("1");
				break;
			//TODO: 書け
		}
	}
})
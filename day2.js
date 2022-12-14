const fs = require("fs");

fs.readFile("inputData.txt", "utf-8", (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	const elfRPS_options = ["A", "B", "C"];
	const playerRPS_options = ["Y", "X", "Z"];
	const elfRPS = [];
	const playerRPS = [];
	let playerScore = 0;

	for (let i = 0; i < data.length; i++) {
		if (elfRPS_options.includes(data[i])) {
			elfRPS.push(data[i]);
		}
		if (playerRPS_options.includes(data[i])) {
			playerRPS.push(data[i]);
		}
	}

	for (let i = 0; i < elfRPS.length; i++) {
		if (playerRPS[i] === "Y") {
			playerScore += 3;
			if (elfRPS[i] === "A") {
				playerScore += 1;
			} else if (elfRPS[i] === "B") {
				playerScore += 2;
			} else {
				playerScore += 3;
			}
		}
		if (playerRPS[i] === "X") {
			playerScore += 0;
			if (elfRPS[i] === "C") {
				playerScore += 2;
			} else if (elfRPS[i] === "A") {
				playerScore += 3;
			} else {
				playerScore++;
			}
		}
		if (playerRPS[i] === "Z") {
			playerScore += 6;
			if (elfRPS[i] === "B") {
				playerScore += 3;
			} else if (elfRPS[i] === "C") {
				playerScore++;
			} else {
				playerScore += 2;
			}
		}
	}
	console.log(playerScore);
});

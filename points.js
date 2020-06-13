let button1 = document.getElementById('team1add');
let button2 = document.getElementById('team2add');
let team1points = document.getElementById('team1points');
let team2points = document.getElementById('team2points');
let gameover = false;
let winningScore = 5;
let p1score = 0;
let p2score = 0;

button1.addEventListener('click', function() {
	if (!gameover) {
		p1score++;
		if (p1score === winningScore) {
			team1points.classList.add('winner');
			gameover = true;
		}
		team1points.textContent = p1score;
	}
});

button2.addEventListener('click', function() {
	if (!gameover) {
		p2score++;
		if (p2score === winningScore) {
			team2points.classList.add('winner');
			gameover = true;
		}
		team2points.textContent = p2score;
	}
});

// when the user has reached that number of points, turns green

// function to reset

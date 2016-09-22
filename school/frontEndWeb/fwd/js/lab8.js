function quiz() {
	var score = 0;
	var num;
	var question;
	var answer;
	var quiz_questions = [
		"How many moons does Earth have?",
		"How many moons does Saturn have?",
		"How many moons does Venus have?"];
	
	var quiz_answers=[1, 31, 1];

//get total number of questions
	var totalQuestion=quiz_questions.length;

//generate random number for question
	num = Math.floor(Math.random()*3);
	
	for(count = 0; count < totalQuestion; count++){
		
		question = quiz_questions[num];
		answer = prompt(question);
		
		if (answer == quiz_answers[num]){
			score = score + 1;
			alert("Correct!");
		}
		else {
			alert("Wrong");
		}
		num = num + 1;
		if (num == totalQuestion){
			num = 0;
		}
	}

	alert('You got ' + score + ' out of ' + totalQuestion + ' questions correct.');
}
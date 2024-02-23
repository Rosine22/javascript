const readline = require('readline');

// Quiz Object
const quiz = {
  questions: [
    {
      question: 'What is the capital of Japan?',
      options: ['A. Beijing', 'B. Seoul', 'C. Tokyo', 'D. Bangkok'],
      correctAnswer: 'C'
    },
    {
      question: 'Which programming language is known for building web pages?',
      options: ['A. Java', 'B. Python', 'C. HTML', 'D. Ruby'],
      correctAnswer: 'C'
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['A. Mars', 'B. Jupiter', 'C. Saturn', 'D. Earth'],
      correctAnswer: 'B'
    }
    // Add more questions as needed
  ],

  // Variables to track the user's score
  score: 0,

  // Function to display a random quiz question along with multiple-choice answers
  displayRandomQuestion: function() {
    const randomIndex = Math.floor(Math.random() * this.questions.length);
    const randomQuestion = this.questions[randomIndex];

    console.log(randomQuestion.question);
    randomQuestion.options.forEach((option) => {
      console.log(option);
    });

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Enter the letter of your answer (A, B, C, or D): ', (userAnswer) => {
      this.checkAnswer(userAnswer ? userAnswer.toUpperCase() : '', randomQuestion.correctAnswer);
      rl.close();
    });
  },

  // Function to check if the user's answer is correct
  checkAnswer: function(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      this.score++;
    } else {
      console.log(`Incorrect! The correct answer is: ${correctAnswer}`);
    }

    // Continue to the next question or end the quiz
    if (this.questions.length > 0) {
      this.questions.splice(this.questions.indexOf(correctAnswer), 1);
      this.displayRandomQuestion();
    } else {
      this.displayFinalScore();
    }
  },

  // Function to display the final score at the end of the quiz
  displayFinalScore: function() {
    console.log('Quiz Completed!');
    console.log(`Your final score: ${this.score} out of ${this.questions.length + this.score}`);
  }
};

// Example Usage
quiz.displayRandomQuestion();

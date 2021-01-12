var readlineSync = require("readline-sync");
const chalk = require('chalk');

var score=0;
var highScores=[{
  name:"Brand",
  hscore:6
},
{
  name:"Murph",
  hscore:7
}];
var questions=[{
    question:"1. First name of Cooper in the movie? \n:  ", 
    answer: "joseph"
  },

  {
    question:"2. Full name of antagonist of the movie? \n:  ",
    answer:"hugh mann"
  },

  {
    question: "3. What was the only viable food for humanity in the movie? \n:  ",
    answer: "corn"
  },

  {
    question: "4. Did Wolf Edmunds survive in interstellar? \n:  ",
    answer: "no"
  },

  {
    question: "5. How old was Murph when Cooper left? \n:  ",
    answer: "10"
  },

  {
    question: "6. Who was killed in an explosion caused by Dr. Mann while accessing KIPP's archive? \n:  ",
    answer: "romilly"
  },

  {
    question: "7. How many years on earth were equal to an hour on Miller's planet? \n:  ",
    answer: "7"
  },

  {
    question: "8. What was the name of space colony made in the end of the movie? \n:  ",
    answer: "Cooper station"
  },

  {
    question: "9. Space colony was named after? \n:  ",
    answer: "Murph"
  },

  {
    question: "10. Which robot contained the true data about Mann's planet? \n:  ",
    answer: "Kipp"
  }
];

function Welcome(){
  console.log(chalk.cyan("We’ve Always Defined Ourselves By The Ability To Overcome The Impossible.\n~Cooper"));
  console.log("You've watched "+ chalk.bold("Interstellar")+"?\nTry answering this quiz.");
  var UserName= readlineSync.question("Enter you name: ");
  console.log("Welcome "+ chalk.blue(UserName.toUpperCase()) + ", Get ready to test your knowledge\n");
}

function play(question, answer){
  var userAnswer= readlineSync.question(question);

  if(userAnswer.toUpperCase()=== answer.toUpperCase()){
    console.log(chalk.black.bgGreen(" Right! "));
    score++;
    console.log("Current score: ", chalk.green(score));
    console.log("_____________\n");
  }
  else{
    console.log(chalk.white.bgRed(" Wrong! "));
    console.log("Current score: ", chalk.red(score));
    console.log("_____________\n");
  }
}

function game(){
  for(var i=0; i < 5; i++){
    var currentQues=questions[i];
    play(currentQues.question, currentQues.answer);
    if(i===3){
      console.log("\nLove Is The One Thing We're Capable Of Perceiving That Transcends Dimensions Of Time And Space. ~Amelia Brand\n\n")
    }
  }
  if(score>3){
    console.log(chalk.green("Congratulations! You have entered in level 2."));
    for(var i=5; i < 10; i++){
      var currentQues=questions[i];
      play(currentQues.question, currentQues.answer);
    }
    console.log(chalk.yellow("YAY! You completed the quiz. Your score is: ")+ chalk.green(score));
  }
  else{
    console.log(chalk.red("You did not reach level 2. Your score is: ")+ chalk.green(score) );
  }
}

function showScores(){
  for(var i=0; i<highScores.length; i++){
    var currentScore=highScores[i];
    if(score> currentScore.hscore){
      console.log(chalk.green("\nHURRAY! You have beaten the highest score."));
      break;
    }
  }

  console.log("\nCheck out others' scores, if you should be there ping me and I'll update it.\n");
  highScores.map(score => console.log(score.name, " : ", score.hscore));
}

Welcome();
game();
showScores();
console.log(chalk.cyan.bold("\n\nWhatever Can Happen Will Happen :)"))
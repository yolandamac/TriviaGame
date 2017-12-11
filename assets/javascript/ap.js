
setTimeout(oneMinuteMark, 1000 * 60);
setTimeout(timeUp, 1000 * 120);

function oneMinuteMark() {
  $("#time-left").append("<div>One Minute Left!</h2>");
}

function timeUp() {
  $("#time-left").append("<h2>Time's Up!</h2>");
}

var pos = 0, quiz, quiz_status, questionSection, choice, choices, answerA, answerB, answerC, answerD, correct = 0;


var questions = [
  ["How many movies did Elvis Presley make as an actor?", "9", "20", "31", "50", "C"],
  ["What is Elvis Presley's most commercially successful movie?", "Love Me Tender", "Jailhouse Rock", "G.I. Blues", "Blue Hawaii", "D"],
  ["What happened to Dolores Hart, Elvis' co-star in 'Loving You' and 'King Creole'?", "Won an Oscar", "Became a Nun", "Became a Web Developer", "Directed the Rest of His Movies", "B"],
  ["What part of his image did Elivs lose after returning to films from his army service?", "His Sideburns", "Wearing Glasses", "Wearing a Watch", "His Moustache", "A"],
  ["What did Elvis do to keep in shape while making movies?", "Kick Boxing", "Weight Lifting", "Karate", "Jogging", "C"]
  ];

function get(x){
  return document.getElementById(x);
}

function renderQuestion(){
  quiz = get("questionSection");
    if(pos >= questions.length){
        quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";

     pos = 0;
      correct = 0;
      return false;
  }

  question = questions[pos][0];
  answerA = questions[pos][1];
  answerB = questions[pos][2];
  answerC = questions[pos][3];
  answerD = questions[pos][4];
  quiz.innerHTML = "<h3>"+question+"</h3>";



  quiz.innerHTML += "<input type='radio' name='choices' value='A'> "+answerA+"<br>";
  quiz.innerHTML += "<input type='radio' name='choices' value='B'> "+answerB+"<br>";
  quiz.innerHTML += "<input type='radio' name='choices' value='C'> "+answerC+"<br>";
  quiz.innerHTML += "<input type='radio' name='choices' value='D'> "+answerD+"<br><br>";
  quiz.innerHTML += "<button class='button'onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer(){

  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;

    }
  }


  if(choice == questions[pos][5]){

    correct++;
  }



  pos++;

  renderQuestion();
}

window.addEventListener("load", renderQuestion, false);







// How well do you know me?

var readlinesync = require('readline-sync')
var yourName = readlinesync.question('what is your name?')

var welcomeMsg = "Welcome"+" "+yourName;

console.log(welcomeMsg);

console.log("lets Play How well do you know Me!!")

var score = 0;
var homeTown = "kolkata";
var phNumber = "9038812811";
var age = 24;
var food = "kadhiChawal"
var homeTown_Question = readlinesync.question('What is my homeTown?');
if(homeTown_Question === homeTown){
  score++;
}else{
  score--;
}



var agee = readlinesync.question("Please enter my age..");
if(agee === age){
  score++;
}else{
  score--;
}

var phoneNumber = readlinesync.question('What is your my number?');

if(phNumber === phoneNumber){
  score++;
}else{
  score--;
}

var fav_food = readlinesync.question('What is my fav food?');
if(fav_food === food){
  score++;
}else{
  score--;
}


if(checkScore(score) > 1){
console.log('yay!! you know me well your score is '+checkScore(score));
}else{
  console.log("Sorry ")
}

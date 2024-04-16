const prompt = require("prompt-sync")();
 for (let i=0; i<3; i++){
    allNames = prompt("Enter Your Name: ");
    var mark1 = parseFloat(prompt("Enter your first mark: "));
    var mark2 = parseFloat(prompt("Enter your Second mark: "));
    var mark3 = parseFloat(prompt("Enter your Third mark: "));
    sum = mark1 + mark2 + mark3;
    average = sum / 3;

    if(average < 50 && average > 50){
        Status=("You have fail the exam");
      }else if(average > 50 && average < 75){
        Status=("You have pass the exam");
      }else if(average  >= 75 && average <= 100){
          Status=("You have pass with distiction");
      }else{
          Status=("Check your inputs");
       }
console.log(`${allNames},Your final mark is ${average} and your have obtain ${Status}`)
}




var playerAnswers = ["", "", ""];
var correctAnswers = ["a", "b", "c"];
var correctCount = 0;




//call from click event
var answerQuestion = function(event) {

    playerAnswers[event.currentTarget.id] = event.currentTarget.value;

    //click button add add it's value to the playerAnswer array
    //some how record button's question number, to use as index.
}


//call when finish button is clicked
//or time runs out
var finish = function() {
    for(var i = 0; i<correctAnswers.length; i++){
        if(correctAnswers[i] === playerAnswers[i]){
            correctCount++;
        }
    }
    console.log(correctCount);

     
}


$('#buttons1').on ('click','button', function(event){
    answerQuestion(event);
   console.log(this.value)
  });  

  $('#buttons2').on ('click','button', function(event){
    answerQuestion(event);
   console.log(this.value)
  });  

  $('#finishButton').on ('click','button', function(event){
    finish();
//    console.log(this.value)
  });  

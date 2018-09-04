
var playerAnswers = [""];
var correctAnswers = ["a"];



//call from click event
var answerQuestion = function(event) {


    console.log(event.currentTarget.value);

    playerAnswers[event.currentTarget.id] = event.currentTarget.value;

    console.log(playerAnswers)

    //click button add add it's value to the playerAnswer array
    //some how record button's question number, to use as index.
}


//call when finish button is clicked
//or time runs out
var finish = function() {
     
}

//
var checkAnswers = function(){
    //compare correctAnswers array vs playerAnswers array

}


$('#buttons1').on ('click','button', function(event){
    answerQuestion(event);
   console.log(this.value)
  });  

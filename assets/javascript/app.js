
var playerAnswers = ["", "", ""];
var correctAnswers = ["a", "b", "c"];
var correctCount = 0;

var clockRunning = false;



var stopwatch = {

    time: 30,
  
    reset: function() {
  
      stopwatch.time = 0;
  
      // DONE: Change the "display" div to "00:00."
      $("#display").text("00:00");
  
      // DONE: Empty the "laps" div.
      $("#laps").text("");
    },
    start: function() {
  
      // DONE: Use setInterval to start the count here and set the clock to running.
      if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
      }
    },
    stop: function() {
  
      // DONE: Use clearInterval to stop the count here and set the clock to not be running.
      clearInterval(intervalId);
      clockRunning = false;
    },
    
    count: function() {
  
      // DONE: increment time by 1, remember we cant use "this" here.
      stopwatch.time--;
  
      // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
      //       and save the result in a variable.
      var converted = stopwatch.timeConverter(stopwatch.time);
      console.log(converted);
  
      // DONE: Use the variable we just created to show the converted time in the "display" div.
      $("#display").text(converted);
    },
    timeConverter: function(t) {
  
      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);
  
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
  
      if (minutes === 0) {
        minutes = "00";
      }
      else if (minutes < 10) {
        minutes = "0" + minutes;
      }
  
      return minutes + ":" + seconds;
    }
  };
  
  window.onload = function(){
      stopwatch.start();
  }



//call from click event
var answerQuestion = function(event) {

    playerAnswers[event.currentTarget.id] = event.currentTarget.value;
    console.log
    //click button add add it's value to the playerAnswer array
    //some how record button's question number, to use as index.
}


//call when finish button is clicked
//or time runs out
var finish = function() {
    clearTimeout(intervalId);
    for(var i = 0; i<correctAnswers.length; i++){
        if(correctAnswers[i] === playerAnswers[i]){
            correctCount++;
        }
    }
    var p = $('<p>');
    p.text("You got " + correctCount + "/" + correctAnswers.length + " correct")
    console.log(correctCount);
    $("#correctAnswers").append(p);

}



$('#buttons1').on ('click','button', function(event){
    answerQuestion(event);
   console.log(this.value)
  });  

  $('#buttons2').on ('click','button', function(event){
    answerQuestion(event);
   console.log(this.value)
  });  

  $('#buttons3').on ('click','button', function(event){
    answerQuestion(event);
   console.log(this.value)
  });  

  $('#finishButton').on ('click','button', function(event){
    finish();
//    console.log(this.value)
  });  

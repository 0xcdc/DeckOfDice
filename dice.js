var dice = {
  randomValues: [],
  shuffle: function() {
    
    //populate the values
    var values = [];
    for(var h=0;h<2;h++) {
      for(var i=1;i<7;i++) {
        for(var j=1;j<7;j++) {
          values.push(i+j);
        }
      }      
    }
  
    //pick values at random
    while(values.length > 0) {
      var randomIndex = Math.floor(Math.random() * values.length);
      var randomNumber = values.splice(randomIndex, 1)[0];
      this.randomValues.push(randomNumber);
    }
    console.log(this.randomValues)
    
  },

  roll: function () {
    if(this.randomValues.length == 0) {
      this.shuffle();
    }
  
    return this.randomValues.pop();
  }
}



//Prints dice roll to the page

function printNumber(number) {
  $('#placeholder')
    .text(number)
    .animate({
    transform: rotate(+=1)
  });
    
  
}

function doRoll() {
  var result = dice.roll();
  printNumber(result);
}

document.onkeypress = doRoll;
document.onclick = doRoll;


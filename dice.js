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
      dice.randomValues.push(randomNumber);
    }
    console.log(dice.randomValues)

    $("#dice").fadeOut(400, () => {
      $("#shuffling").fadeIn(400, function () {
        $("#shuffling").fadeOut(400, function () {
          $("#dice").fadeIn(400);
          $("#dicetext").show();
        })
      })
    })
  },

  roll: function () {
    if(dice.randomValues.length == 0) {
      dice.shuffle();
    }

    return dice.randomValues.pop();
  }
}



//Prints dice roll to the page

function printNumber(number) {
  $('#dicetext').fadeOut(400, function () {
    $({deg: 0}).animate({deg: 360}, {
        duration: 500,
        step: function(now) {
            // in the step-callback (that is fired each step of the animation),
            // you can use the `now` paramter which contains the current
            // animation-position (`0` up to `angle`)
            console.log({now});
            $('#dice').css({
                transform: 'rotate(' + now + 'deg)'
            });
            rotation = now;
        },
        complete: function() {
          $('#dicetext')
            .text(number)
            .fadeIn(400);
        }
    });
  })
}


function doRoll() {
  var result = dice.roll();
  printNumber(result);
}

document.onkeypress = doRoll;
document.onclick = doRoll;

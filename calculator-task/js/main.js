var keys = document.querySelectorAll(".btn")
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

for(i = 0; i < keys.length; i++){
  keys[i].onclick = function(e){
    var screen = document.querySelector(".screen");
    var inputValue = screen.value;
    var buttonValue = this.value;

    // If clear key is pressed, erase everything 
    if(buttonValue == "C"){
      screen.value = "";
      decimalAdded = false;

      console.log("screen cleared!")
    }

    else if(buttonValue == "="){
      var equation = inputValue;
      var lastChar = inputValue[inputValue.length - 1];

      equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

      if(equation){
        screen.value = eval(equation);
        decimalAdded = false;
      }
    }
		
    else if(operators.indexOf(buttonValue) > -1){
      // Get the last character from the equation
      var lastChar = inputValue[inputValue.length - 1];

      // Only add operator if input is not empty and there is no operator at the last
      if(inputValue != "" && operators.indexOf(lastChar) == -1){
        screen.value += buttonValue;
      }

      // Allow minus if the string is empty
      else if(inputValue == "" && buttonValue == "-"){
        screen.value += buttonValue;
      }

        // Replace the last operator (if exists) with the newly pressed operator
        if(operators.indexOf(lastChar) > -1 && inputValue.length > 1){
          screen.value = inputValue.replace(/.$/, buttonValue);
        }
        decimalAdded = false;
    }

    else if(buttonValue == "."){
      if(!decimalAdded){
        screen.value += buttonValue;
        decimalAdded = true;
      }
    }

    else{
      screen.value += buttonValue;
      console.log(buttonValue, "clicked");
    }
  
  }
}

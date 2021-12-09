// module pattern basic structure
// standard module pattern
// which will be UI Controller

const UIController = (function(){
    // declare private variables and functions
let text = 'Hello World'
   const changeText = function(){
    const element = document.querySelector('h1')
       element.textContent = text
   }

    return {
        // declare public variables and functions
        callChangeText: function(){
            changeText()
            console.log(text)
        }
    }
})();

UIController.callChangeText()
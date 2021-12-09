// module pattern basic structure
// standard module pattern
// which will be UI Controller
/*
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

 */

//revealing module pattern
//it will be Item controller

const ItemController = (function() {
    let data = []

    function add(item){
        data.push(item)
        console.log('item is added')
    }

    function get(id){
        return data.find(item=> {
            return item.id === id
        })
    }
 // siit tuleb alles avalik osa

    return {
        add: add,
        get: get
    }

})();

//testimiseks lisan:

ItemController.add({id: 1, name: 'Alice'})
//konsoolis sisu kontrollimiseks
console.log(ItemController.get(1))
const readline = require('readline');
const { todos } = require('./data.js');

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = `
Your options are:

1. Add a todo.
2. Remove a todo.
3. Remove all completed todos.
4. Toggle a todo's completion status.
5. Toggle a todo's priority.
6. Quit.

`;

const toDoApp = (userInput) => { 
  for (const todo of todos) {
    console.log('* '+ todo.text)
  }
} 

toDoApp()

const handleMenu = function(userInput) {
  if (userInput === '6') {
    console.clear();
    console.log('Quitting!')
    interface.close();
  } else if(userInput === `5`){
    console.clear();
    console.log('That is not available yet...')
    console.log('Please enter "6" to quit')
    interface.question(menu, handleMenu)
  } else if(userInput === `4`){
    console.clear();
    console.log('That is not available yet...')
    console.log('Please enter "6" to quit')
    interface.question(menu, handleMenu)
  } else if(userInput === `3`){
    console.clear();
    console.log('That is not available yet...')
    console.log('Please enter "6" to quit')
    interface.question(menu, handleMenu)
  } else if(userInput === `2`){
    console.clear();
    console.log('That is not available yet...')
    console.log('Please enter "6" to quit')
    interface.question(menu, handleMenu)
  } else if(userInput === `1`){
    console.clear();
    interface.question('What should go on your list?', add)
    // console.log('Please enter "6" to quit')
    // interface.question(menu, handleMenu)
  } else {
    console.clear();
    console.log('Type 6 to quit!');
    interface.question(menu, handleMenu);
  }
};

const add = function(userInput) {
  const toDo = {
    isComplete: false,
    priority: 2,
    text: userInput
  }
    todos.push(toDo)
  for (const todo of todos) {
    console.log('* ' + todo.text)
  }
  interface.question(menu, handleMenu);
}

console.clear();
interface.question(menu, handleMenu);

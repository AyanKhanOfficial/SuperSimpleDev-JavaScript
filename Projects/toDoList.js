const toDoList = [];
function addToDo(){
  const inputElement = document.querySelector('.js-input-field');
  const name = inputElement.value;
 toDoList.push(name);
 inputElement.value = '';
 
 console.log(toDoList);

}
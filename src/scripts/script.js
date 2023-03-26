let todoInput, errorInfo, addBtn, ulList, newTodo
let popup, popupInfo, todoToEdit, popupInput, popupAddBtn, popupCloseBtn

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
    dltBtn = document.querySelector('.delete')
    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTask)
    ulList.addEventListener('click', checkClick)
    popupCloseBtn.addEventListener('click', closePopup)
    popupAddBtn.addEventListener('click', changeTodoText)
    

}

const addNewTask = () => {
    if(todoInput.value !== ''){
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        ulList.append(newTodo)
        createToolsArea()
  
        todoInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'wpisz treść zadania!'
    }
}

const createToolsArea = () => {
    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    newTodo.append(toolsPanel)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'
    const removeBtn = document.createElement('button')
    removeBtn.classList.add('remove')
    removeBtn.innerHTML = '<i class="fas fa-times"></i>'

    toolsPanel.append(completeBtn, editBtn, removeBtn)

}

const checkClick = e => {
   if(e.target.matches('.complete')){
    e.target.closest('li').classList.toggle('completed')
    e.target.classList.toogle('completed')
   } else if(e.target.matches('.edit')){
        editTodo(e)
   } else if(e.target.matches('.delete')){
    deleteTodo(e)
   }
    
}

const editTodo = e => {
    todoToEdit = e.target.closest('li')

    popupInput.value = todoToEdit.firstChild.textContent
    console.log(todoToEdit.firstChild);
    popup.style.display = 'flex'
}

const closePopup = () => {
    popup.style.display = 'none'
    popupInfo.textContent = ''
}

const deleteTodo = (e) => {
    e.target.closest('li').remove()

    const allTodos = ulList.querySelectorAll('li')

    if(allTodos.length === 0) {
        errorInfo.textContent = 'Brak zadań na liście'
    }
}

const changeTodoText = () => {
    if(popupInput.value !== '') {
        todoToEdit.firstChild.textContent = popupInput.value
        popup.style.display = 'none'
        popupInfo.textContent = ''
    } else{
        popupInfo.textContent = 'You need to write sth'
    }
}

document.addEventListener('DOMContentLoaded', main) 

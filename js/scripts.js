//get the element container, create data attribute
const listsContainer = document.querySelector('[data-lists]');
//select list items select elements
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');


//create variable to hold list
let lists = [{
    id: 1,
    name: 'name'
}, {
    id: 2,
    name: 'todo'
}]

//setup eventlistener for new list form
newListForm.addEventListener('submit', e => {
    e.preventDefault()
    const listName = newListInput.value 
    if (listName == null || listName ==='') return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    render()
})

function createList(name) {
    return { id: Date.now().toString(), name: name, tasks:[]}
}

//create render function and clear element function toclear list
function render() {
    clearElement(listsContainer)
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.dataset.listId = list.id
        listElement.classList.add("list-name")
        listElement.innerText = list.name
        listsContainer.appendChild(listElement)
    })
}

//setup while loop
function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render()
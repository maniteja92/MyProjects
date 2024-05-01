const form = document.getElementById('item-form');
  const iteminput = document.getElementById('item-input');
  const itemList = document.getElementById('item-list');
  const filter = document.getElementById('filter');
  const clearBtn = document.getElementById('clear');

function addItem(event) {
  event.preventDefault()
  let newItem = iteminput.value
  console.log(newItem);
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(newItem))
  const button = createButton('remove-item btn-link text-red')
  li.appendChild(button)
  itemList.appendChild(li)
  iteminput.value=""
  // console.log(li);
}
function createButton(classes){
  const btn=document.createElement('button')
  btn.classList=classes
  const icon=createIcon('fa-solid fa-xmark')
  btn.appendChild(icon)
  return btn
}
function createIcon(classes){
  const icon=document.createElement('i')
  icon.classList=classes
  return icon
}
function removeitem(event){
  console.log(event.target.parentElement.classList.contains('remove-item'))
}
form.addEventListener('submit', addItem)
itemList.addEventListener('click',removeitem)
// document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('item-form');
  const iteminput = document.getElementById('item-input');
  const itemList = document.getElementById('item-list');
  const filterInput = document.getElementById('filter');
  const clearBtn = document.getElementById('clear');

function addItem(event) {
  event.preventDefault()
  let newItem = iteminput.value
  if(newItem===""){
    alert("Enter any item.")
    return;
  }
  // console.log(newItem);
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(newItem))
  const button = createButton('remove-item btn-link text-red')
  li.appendChild(button)
  itemList.appendChild(li)
  iteminput.value=""
  // console.log(li);
  checkui()
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
  if(event.target.parentElement.classList.contains('remove-item')){
    event.target.parentElement.parentElement.remove();
  }
  checkui()
}
function removeall(){
  while(itemList.firstChild){
    itemList.removeChild(itemList.firstChild)
  }
  checkui()
}
function checkui(){
  const item =itemList.querySelectorAll('li')
  if(item.length==0){
    clearBtn.style.display = 'none';
    filterInput.style.display = 'none';
  }
    else {
      clearBtn.style.display = 'block';
      filterInput.style.display = 'block';
  }
}
function filterItems(event) {
  const item = itemList.querySelectorAll('li')
  let text = event.target.value;
  item.forEach((items) => {
    let searchItem = items.firstChild.textContent.toLowerCase();
    if (searchItem.indexOf(text) === -1) {
      items.style.display = 'none';
    } else {
      items.style.display = 'block';
    }
  })
}


checkui()
form.addEventListener('submit', addItem)
itemList.addEventListener('click',removeitem)
clearBtn.addEventListener('click',removeall)
filterInput.addEventListener('input',filterItems)
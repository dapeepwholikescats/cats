let getFactButton = document.getElementById('add-fact')
getFactButton.addEventListener('click', function() {
  let facts = document.getElementById('facts')
  let newFact = prompt('Enter a new fact:')
  let createListItem = document.createElement('li')
  createListItem.textContent = newFact
  facts.appendChild(createListItem)
})



let images = ['images/calico.webp', 'images/tabby.jpg', 'images/gray.jpg']
let currentIndex = 0

function changeImage(direction) { // Tool to use to complete a specific task
if (direction == 'next') {
  currentIndex = (currentIndex + 1) % images.length
}

if (direction == 'prev') {
     currentIndex = (currentIndex - 1 + images.length) % images.length
   }
  let picture = document.getElementById('picture')
  picture.src = images[currentIndex]
}

document.getElementById('left').addEventListener('click', function() {
  changeImage('prev')
})

// Write the right arrow's code
document.getElementById('right').addEventListener('click', function() {
  changeImage('next')
})

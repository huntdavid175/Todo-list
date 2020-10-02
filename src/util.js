const todoItems = document.querySelectorAll(".todo-item");
const projectItems = document.querySelectorAll(".project-item")
const colorSelector = document.querySelector('#color-selector');
const ul = document.getElementById('pageSubmenu');
const todoDiv = document.querySelector('.list-group');



todoDiv.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('todo-item')) {
        const todoSpans = document.querySelectorAll('.options');
                     clearAllItems(todoSpans);
                     e.target.children[1].style.visibility = 'visible'

    }
})

todoDiv.addEventListener('mouseleave', (e) => {
    const todoSpans = document.querySelectorAll('.options');
    clearAllItems(todoSpans);
})

// todoItems.forEach((item) => {
//     item.addEventListener('mouseover', function(e) {
//         if(e.target.tagName == "A") {
//             clearAllItems(todoSpans)
//             e.target.children[1].style.visibility = "visible"
//         }
       
//     })
// })

// todoItems.forEach((item) => {
//     item.addEventListener('mouseleave', function() {
//         clearAllItems(todoSpans)
//     })
// });

ul.addEventListener('mouseover', (e) => {
    if (e.target.parentNode.classList.contains("project-item")) {
        const projectSpans = document.querySelectorAll('.project-options');

        clearAllItems(projectSpans)
            e.target.children[0].style.visibility = "visible"
    }
})

ul.addEventListener('mouseleave', (e) => {
    const projectSpans = document.querySelectorAll('.project-options');
    clearAllItems(projectSpans);
})



// function to clear options icons after hover 
function clearAllItems(items) {
    items.forEach((item) => {
        item.style.visibility = "hidden"
    })
}

const listGroup = document.querySelector('.list-group');
listGroup.addEventListener('click', (e) => {
    if(e.target.tagName == 'A') {
        e.target.setAttribute('data-target', '#showTaskModal');
        e.target.setAttribute('data-toggle', 'modal');  
    }
})


const colors = ['red','blue','black','green'];
const colorCodes = {
    red : "#e60000",
    black: "#000",
}

colors.forEach((color) => {
    const option = document.createElement('option');
    option.textContent = color;
    colorSelector.appendChild(option)
})

function pickColorCode(color) {
    return colorCodes[color]
}





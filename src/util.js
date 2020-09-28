const todoItems = document.querySelectorAll(".list-item");
const todoSpans = document.querySelectorAll('.options');
const projectItems = document.querySelectorAll(".project-item")
const projectSpans = document.querySelectorAll('.project-options');
const colorSelector = document.querySelector('#color-selector');
const ul = document.getElementById('pageSubmenu');



todoItems.forEach((item) => {
    item.addEventListener('mouseover', function(e) {
        if(e.target.tagName == "A") {
            clearAllItems(todoSpans)
            e.target.children[1].style.visibility = "visible"
        }
       
    })
})

todoItems.forEach((item) => {
    item.addEventListener('mouseleave', function() {
        clearAllItems(todoSpans)
    })
});

ul.addEventListener('mouseover', (e) => {
    if (e.target.parentNode.classList.contains("project-item")) {
        clearAllItems(projectSpans)
            e.target.children[0].style.visibility = "visible"
    }
})

ul.addEventListener('mouseleave', (e) => {
    clearAllItems(projectSpans)
})

// projectItems.forEach((item) => {
//     item.addEventListener('mouseover', function(e) {
//         if(e.target.tagName == "A"){
//             clearAllItems(projectSpans)
//             e.target.children[0].style.visibility = "visible"
//         }
//         // console.log(e.target)
//     })
// })

// projectItems.forEach((item) => {
//     item.addEventListener("mouseleave", () => {
//         clearAllItems(projectSpans)
//     })
// })


// function to clear options icons after hover 
function clearAllItems(items) {
    items.forEach((item) => {
        item.style.visibility = "hidden"
    })
}


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





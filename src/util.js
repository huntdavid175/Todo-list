const todoItems = document.querySelectorAll(".list-item");
const spans = document.querySelectorAll('.options');


todoItems.forEach((item) => {
    item.addEventListener('mouseover', function(e) {
        if(e.target.tagName == "A") {
            clearAllSpans()
            e.target.children[1].style.visibility = "visible"
        }
       
    })
})

todoItems.forEach((item) => {
    item.addEventListener('mouseleave', clearAllSpans)
})

function clearAllSpans() {
    spans.forEach((span) => {
        span.style.visibility = "hidden"
    })
}
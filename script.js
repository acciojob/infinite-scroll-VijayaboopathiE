const list = document.getElementById("list");

let itemCount = 0;


// Function to add items
function addItems(count) {

    for (let i = 0; i < count; i++) {

        itemCount++;

        const li = document.createElement("li");

        li.textContent = "Item " + itemCount;

        list.appendChild(li);
    }
}


// Add 10 items initially
addItems(10);


// Detect when user reaches the bottom
const container = document.getElementById("list-container");

container.addEventListener("scroll", function () {

    if (container.scrollTop + container.clientHeight >= container.scrollHeight - 5) {

        addItems(2);

    }

});
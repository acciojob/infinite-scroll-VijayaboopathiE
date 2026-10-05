//your code here!

const list = document.getElementById("list");

let itemCount = 0;


function addItems(count) {

    for (let i = 0; i < count; i++) {

        itemCount++;

        const li = document.createElement("li");

        li.textContent = "Item " + itemCount;

        list.appendChild(li);
    }
}


addItems(10);



list.addEventListener("scroll", function () {

    const reachedBottom =
        list.scrollTop + list.clientHeight >= list.scrollHeight - 5;

    if (reachedBottom) {

        // Add 2 more items
        addItems(2);
    }

});
var listContainer = document.getElementById("listContainer");

function newItem() {
var itemContainer = document.createElement("div");
itemContainer.classList.add("test");
listContainer.appendChild(itemContainer);

var undo = document.createElement("button");
var text = document.createTextNode("X");
undo.appendChild(text);
undo.classList.add("button");
itemContainer.appendChild(undo);
undo.onclick = function(){removeItem(itemContainer)};

var listItem = document.getElementById("listItem").value;
var list = document.createElement("div");
list.classList.add("item");
list.classList.add("style");
itemContainer.appendChild(list);
list.innerHTML = listItem;
document.getElementById("listItem").value = "";

var done = document.createElement("button");
var t = document.createTextNode("Y");
done.appendChild(t);
done.classList.add("button");
done.onclick = function(){itemComplete(itemContainer)};
itemContainer.appendChild(done);
}

function removeItem(el) {
    el.remove()
}

function itemComplete(list) {
    list.style.cssText = 'text-decoration: line-through';
}
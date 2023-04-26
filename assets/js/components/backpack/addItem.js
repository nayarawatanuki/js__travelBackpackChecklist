import { list } from "../../base/variables.js";

import { btnDelete } from "./btnDelete.js";

export function addItem(item) {

    const newItem = document.createElement("li");
    newItem.classList.add("item");

    const numberItem = document.createElement("strong");
    numberItem.innerHTML = item.quantity;
    numberItem.dataset.id = item.id;

    newItem.appendChild(numberItem);
    newItem.innerHTML += item.name;

    newItem.appendChild(btnDelete(item.id));

    list.appendChild(newItem);
}
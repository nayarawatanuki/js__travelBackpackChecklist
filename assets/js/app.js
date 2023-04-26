import { form, items } from "./base/variables.js";

import { addItem } from "./components/backpack/addItem.js";
import { updateItems } from "./components/backpack/updateItems.js";

items.forEach( element => {
    addItem(element);
})

form.addEventListener("submit", event => {
    event.preventDefault();

    const name = event.target.elements["name"].value;
    const quantity = event.target.elements["quantity"].value;
    
    const itemExists = items.find( element => element.name === name );
    const itemAtual = {
        "name": name,
        "quantity": quantity
    }

    if(itemExists) {

        itemAtual.id = itemExists.id;
        updateItems(itemAtual);

        items[items.findIndex(element => element.id === itemExists.id)] = itemAtual;
    } else {

        itemAtual.id = items[items.length - 1] ? (items[items.length - 1]).id + 1 : 0;

        addItem(itemAtual);
        items.push(itemAtual);
    }

    localStorage.setItem("items", JSON.stringify(items));

    form.reset();
})


import { items } from "../../base/variables.js";

export function deleteItem(tag, id) {

    tag.remove();

    items.splice(items.findIndex( element => element.id === id), 1);

    localStorage.setItem("items", JSON.stringify(items));
}
import { deleteItem } from "./deleteItem.js";

export function btnDelete(id) {
    
    const btnDelete = document.createElement("button");
    btnDelete.innerHTML = "X";

    btnDelete.addEventListener("click", function() {
        deleteItem(this.parentNode, id);
    })

    return btnDelete;
}
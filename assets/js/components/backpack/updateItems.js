export function updateItems(item) {

    document.querySelector(`[data-id="${item.id}"]`).innerHTML = item.quantity;
}
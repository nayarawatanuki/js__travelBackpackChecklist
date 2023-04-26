const form = document.getElementById("form-newItem");
const list = document.getElementById("list");
const items = JSON.parse(localStorage.getItem("items")) || [];

export { form, list, items }
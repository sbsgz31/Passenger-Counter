let countEl = document.getElementById("count-el");

let count = 0

function increment() {
  count++
  countEl.textContent = count;
}

let saveEl = document.getElementById("save-el");


function save() {
  let content = count + ' - '
  saveEl.textContent +=  content;
  count = 0
  countEl.textContent = 0;
}

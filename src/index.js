document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()
    tasklisting(e.target["new-task-description"].value)

  })
});
function tasklisting(captureText){
  let list = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click',delFunc)
  btn .textContent = 'X'
  list.textContent = `${captureText} `
  list.appendChild(btn)
  document.querySelector("#tasks").appendChild(list)
}
function delFunc(e){
  e.target.parentNode.remove()
}

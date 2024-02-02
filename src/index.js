document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form')
  const description = document.querySelector('#new-task-description')
  const ul = document.querySelector('#tasks')

  const handleSubmit = (e) =>{
    e.preventDefault()
    const task = description.value;
    const li = document.createElement('li')
    li.innerText = task
    ul.appendChild(li)
    const button = document.createElement('button')
    button.innerText = 'x'
    button.addEventListener('click', (e) => li.remove())
    li.appendChild(button)
    form.reset()
  }
 
  form.addEventListener('submit', handleSubmit)
});

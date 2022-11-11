let taskInput = $('#task-input')
let taskList = $('#task-list')

updateOnClick()

$('#add-task').on('click', function (e) {
  e.preventDefault()
  
  let task = taskInput.val()
  
  taskList.append(`<li id="task-${$('li').length + 1}">${task}</li>`)

  updateOnClick()
})

function updateOnClick() {
  $('li').on('click', function () {
    if ($(this).css('text-decoration') === 'line-through') {
      $(this).css('text-decoration', 'none')
    } else {
      $(this).css('text-decoration', 'line-through')
    }
  })
}


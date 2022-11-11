let taskInput = $('#task-input')
let taskList = $('#task-list')

updateOnClick()

$('#add-task').on('click', function (e) {
  e.preventDefault()

  taskList.append(`<li>${taskInput.val()}</li>`)
  updateOnClick()
  taskInput.val('')
})

function updateOnClick() {
  $('li').on('click', function () {
    $(this).css('text-decoration', 'line-through')
  })
}


/* eslint-disable no-unused-vars */
var $taskList = document.querySelector('.task-list');
var $button = document.querySelector('button');
var $taskListItem = document.querySelector('.task-list-item');
var $buttonClosestTaskListItem = $button.closest('.task-list-item');
var buttonClosestLi = $button.closest('.task-list-item');
//
function taskListEventFunction(event) {
  console.log('Event Target:', event.target);
  console.log('Event.target.tagName:', event.target.tagName);

  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  var $taskListItem = event.target.closest('.task-list-item');
  console.log('closest, task-list-item', $taskListItem);
  $taskListItem.remove();
}

$taskList.addEventListener('click', taskListEventFunction);

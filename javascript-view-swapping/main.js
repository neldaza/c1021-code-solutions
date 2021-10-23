var $tabContainer = document.querySelector('.tab-container');
var $tabSelectorAll = document.querySelectorAll('.tab');
var $viewSelectorAll = document.querySelectorAll('.view');

// 1, define function that checks to see that event.target matches .tab
// 2. if the target of the event has the class name .tab,
// 3. the entirety of the tab class node list is looped to check
// 4. that if the element in the tab class equals the event target
// 5. the event target has its class name changed to tab active
// 6. while all others are made to not be active
function matchesTab(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabSelectorAll.length; i++) {
      if ($tabSelectorAll[i] === event.target) {
        event.target.className = 'tab active';
      } else {
        $tabSelectorAll[i].className = 'tab';
      }
    }
  }
  // 1. only if the event target's tab was clicked (.tab active)
  // // declare variable for value of data.view attribute of the event.target
  // 2. loop through the node list for elements with the .view class
  // // query elements with data view attribute
  // 3. if the event targets data value does NOT equal the data value of the selector already clicked
  // 4. then the already clicked selectors class name is charnged to view hidden
  // 5. otherwise if the event targets data value DOES match, change that element in the node list's class to view

  if (event.target.className === 'tab active') {
    var eventTargetDataViewValue = event.target.getAttribute('data-view');
    for (i = 0; i < $viewSelectorAll.length; i++) {
      if (eventTargetDataViewValue !== $viewSelectorAll[i].getAttribute('data-view')) {

        $viewSelectorAll[i].className = 'view hidden';

      } else {
        $viewSelectorAll[i].className = 'view';

      }
    }
  }
}

$tabContainer.addEventListener('click', matchesTab);

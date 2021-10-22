var $tabContainer = document.querySelector('.tab-container');
var $tabSelectorAll = document.querySelectorAll('.tab');
var $viewSelectorAll = document.querySelectorAll('.view');

// 1, define function that checks to see that event.target matches .tab
// 2. if the target of the event has the class name .tab,
// 3. the entirety of the node list is looped,
// 4. and if the loop confirms that index i at $tavSelectorAll is equal to event.target,
// 5. then the event target is set to class tab active
// 6. otherwise the event target is set to class tab inactive
function matchesTab (event) {
  if (event.target.matches('.tab') {
    for (let i = 0; i < $tabSelectorAll.length; i++) {
      if ($tabSelectorAll[i] === event.target) {
      event.target.className = 'tab active'
      }
      else {
        event.target.className ='tab'
      }
    }
  }

}



$tabContainer.addEventListener('click', matchesTab);

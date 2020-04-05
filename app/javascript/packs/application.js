require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

require("trix")
require("@rails/actiontext")

// Dropdown
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});

// Modals
openModal = function (route) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("card-modal").innerHTML = this.responseText;
      document.getElementById("card-modal").className = 'modal is-active'
    }
  };
  xhttp.open("GET", route, true);
  xhttp.send();
}
closeModal = function() {
  document.getElementById("card-modal").innerHTML = ''
  document.getElementById('card-modal').className = 'modal'
}

function pollDOM () {
  try {
    if ($ != undefined) {
      $(document).on('click', '.card', function(e) {
        e.stopPropagation()
        openModal($(this).attr('href'))
      })
    }
  } catch {
    setTimeout(pollDOM, 300);
  }
}

pollDOM();
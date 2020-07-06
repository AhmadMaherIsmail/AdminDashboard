$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
})

const sidebarItems = document.querySelectorAll('.navbar-nav .nav-item a');

sidebarItems.forEach(item => {
  item.addEventListener('click', function () {
    sidebarItems.forEach(item => { item.classList.remove('current') });
    this.classList.add('current');
  })
})
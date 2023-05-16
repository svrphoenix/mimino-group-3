// document.addEventListener('DOMContentLoaded', function() {
//     var modalButtons = document.querySelectorAll('.js-open-modal'),
//         overlay      = document.querySelector('#overlay-modal'),
//         closeButtons = document.querySelector('.js-modal-close');

//     modalButtons.forEach(function(item){

//        item.addEventListener('click', function(e) {

//           e.preventDefault();
//           var modalId = this.getAttribute('data-modal'),
//               modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

//           modalElem.classList.add('active');
//           overlay.classList.add('active');
//        }); // end click
//     }); // end foreach
//  }); // end ready

//  closeButtons.forEach(function(item){
//     item.addEventListener('click', function(e) {
//        var parentModal = this.closest('.modal');
//        parentModal.classList.remove('active');
//        overlay.classList.remove('active');
//     });
//  }); // end foreach

document.addEventListener('DOMContentLoaded', function () {
  const linkArray = document.querySelectorAll('.js-open-modal');
  const overlay = document.querySelector('.js-modal-overlay');
  const crossArray = document.querySelectorAll('.js-modal-close');

  linkArray.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      let modalName = this.getAttribute('data-modal');
      let modal = document.querySelector(
        '.js-modal[data-modal="' + modalName + '"]'
      );
      modal.classList.add('is-show');
      overlay.classList.add('is-show');
    });
  });

  crossArray.forEach(function (cross) {
    cross.addEventListener('click', function () {
      let parent = this.parentNode;

      parent.classList.remove('is-show');
      overlay.classList.remove('is-show');
    });
  });
});

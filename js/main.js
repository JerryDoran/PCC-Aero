const modals = document.querySelectorAll('.modal');
const modalButtons = document.querySelectorAll('#modalButton');
const closeButtons = document.querySelectorAll('.close-button');

window.addEventListener('click', () => {
  modals.forEach(modal => {
    modal.addEventListener('click', () => {
      let id = modal.dataset.id;
      clickOutside(id);
    });
  });
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    let id = button.dataset.id;
    closeModal(id);
  });
});

modalButtons.forEach(button => {
  button.addEventListener('click', () => {
    let id = button.dataset.id;
    openModal(id);
  });
});

function openModal(id) {
  modals.forEach(modal => {
    if (modal.dataset.id === id) {
      modal.style.display = 'block';
    }
  });
}

function closeModal(id) {
  modals.forEach(modal => {
    if (modal.dataset.id === id) {
      modal.style.display = 'none';
    }
  });
}

function clickOutside(id) {
  modals.forEach(modal => {
    if (modal.dataset.id === id) {
      modal.style.display = 'none';
    }
  });
}

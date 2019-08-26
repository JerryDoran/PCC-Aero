// TODO: Refactor this code to set up arrays to handle button click events

const modal = document.getElementById('simpleModal');
const modal2 = document.getElementById('simpleModal2');
const modal3 = document.getElementById('simpleModal3');
const modal4 = document.getElementById('simpleModal4');
const modalButton = document.getElementById('modalButton');
const modalButton2 = document.getElementById('modalButton2');
const modalButton3 = document.getElementById('modalButton3');
const modalButton4 = document.getElementById('modalButton4');
const closeBtn = document.querySelector('.close-btn');
const closeBtn2 = document.querySelector('.close-btn2');
const closeBtn3 = document.querySelector('.close-btn3');
const closeBtn4 = document.querySelector('.close-btn4');

modalButton.addEventListener('click', openModal);
modalButton2.addEventListener('click', openModal2);
modalButton3.addEventListener('click', openModal3);
modalButton4.addEventListener('click', openModal4);

closeBtn.addEventListener('click', closeModal);
closeBtn2.addEventListener('click', closeModal2);
closeBtn3.addEventListener('click', closeModal3);
closeBtn4.addEventListener('click', closeModal4);

window.addEventListener('click', clickOutside);
window.addEventListener('click', clickOutside2);
window.addEventListener('click', clickOutside3);
window.addEventListener('click', clickOutside4);

function openModal() {
  modal.style.display = 'block';
}
function openModal2() {
  modal2.style.display = 'block';
}
function openModal3() {
  modal3.style.display = 'block';
}
function openModal4() {
  modal4.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}
function closeModal2() {
  modal2.style.display = 'none';
}
function closeModal3() {
  modal3.style.display = 'none';
}
function closeModal4() {
  modal4.style.display = 'none';
}

function clickOutside(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}
function clickOutside2(e) {
  if (e.target === modal2) {
    modal2.style.display = 'none';
  }
}
function clickOutside3(e) {
  if (e.target === modal3) {
    modal3.style.display = 'none';
  }
}
function clickOutside4(e) {
  if (e.target === modal4) {
    modal4.style.display = 'none';
  }
}

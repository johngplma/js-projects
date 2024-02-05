'use strict';

console.log('Welcome to JS Projects.');

/**
 *  1. TASKS
 *  ===================================================
 */
const addBtn = document.querySelector('.btn-add');
const input = document.querySelector('#input');
const tasksContainer = document.querySelector('#tasks');

// get input value
let task = input.value;

const tasks = [];

const renderListToPage = function () {
  // clear list
  tasksContainer.innerHTML = '';

  // render list
  tasks.map(function (task) {
    const html = `
      <li class="task">
        ${task}
      </li>`;
    tasksContainer.insertAdjacentHTML('beforeend', html);
  });
};

const addToList = function () {
  if (!task) return;

  // save task
  const taskArr = task.split(',');
  taskArr.map((task) => tasks.push(task.trim()));

  // render list to page
  renderListToPage();

  // clear input field
  input.value = '';
};

// add to list event listeners
addBtn.addEventListener('click', addToList);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addToList();
});

// listen for input value change
input.addEventListener('input', updateValue);
function updateValue(e) {
  task = e.target.value;
}

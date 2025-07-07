// Get the display input field
const display = document.querySelector('#display');

// Get all calculator buttons
const buttons = document.querySelectorAll('.btn');

// Get the equal (=) button
const equalBtn = document.querySelector('#equal');

// Loop through each button
buttons.forEach(button => {
  const value = button.dataset.value;
  const action = button.dataset.action;

  // Handle Clear (AC) button
  if (action === 'clear') {
    button.addEventListener('click', () => {
      display.value = '';
    });
  }

  // Handle Delete (DE) button
  else if (action === 'delete') {
    button.addEventListener('click', () => {
      display.value = display.value.toString().slice(0, -1);
    });
  }

  // Handle number/operator buttons
  else if (value !== undefined) {
    button.addEventListener('click', () => {
      display.value += value;
    });
  }
});

// Handle Equal (=) button
equalBtn.addEventListener('click', () => {
  try {
    if (display.value.trim() !== '') {
      display.value = eval(display.value);
    }
  } catch (err) {
    display.value = 'Error';
  }
});

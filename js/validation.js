let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let phoneRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

let errors = []

function toggleSubmitDisabled(is_disabled) {
  let submit = document.getElementById('submit');
  submit.disabled = is_disabled;
  if (is_disabled) {
    submit.style = 'border-color: #ce537a;';
  } else {
    submit.style = 'border-color: white;';
  }
}

function renderRemoveError(id) {
  let error = document.getElementById(`${id}_error`);
  error.style = 'display: none;';
  error.innerHTML = ''

  let input = document.getElementsByName(id)[0];
  console.log(input);
  input.style = 'border-color: white;';
}

function renderError(id, message) {
  let error = document.getElementById(`${id}_error`);
  error.style = 'display: block;';
  error.innerHTML = `^ ${message}`

  let input = document.getElementsByName(id)[0];
  input.style = 'border-color: #ce537a;';
}

function removeError(id) {
  for (let i=0; i < errors.length; i++) {
    if (errors[i].id == id) {
      errors.splice(i);
      break;
    }
  }
  renderRemoveError(id);

  if (errors.length == 0) {
    toggleSubmitDisabled(false);
  }
}
function addError(id, message) {
  let id_exists = false;
  for (let i=0; i < errors.length; i++) {
    if (errors[i].id == id) {
      id_exists = true;
      errors[i].message = message;
      break;
    }
  }

  if (!id_exists) {
    errors.push({id: id, message: message});
  }
  renderError(id, message);
  toggleSubmitDisabled(true);
}

function formOnChange(e) {
  let value = e.target.value;
  let name = e.target.name;
  switch (name) {
    case 'body':
      if (value.length == 0) {
        addError(e.target.name, 'Text can\'t be blank')
      } else {
        removeError(name);
      }
      break;
    case 'topic':
      if (value.length == 0) {
        addError(e.target.name, 'Topic can\'t be blank')
      } else if (value.length > 255) {
        addError(e.target.name, 'Topic can\'t be longer than 255 characters')
      } else {
        removeError(name);
      }
      break;
    case 'email':
      if (value.length == 0) {
        addError(e.target.name, 'Email can\'t be blank')
      } else if (value.length > 255) {
        addError(e.target.name, 'Email can\'t be longer than 255 characters')
      } else if (!emailRegEx.test(value)) {
        addError(e.target.name, 'Email is invalid')
      } else {
        removeError(name);
      }
      break;
    case 'phone':
      if (value.length == 0) {
        addError(e.target.name, 'Phone number can\'t be blank')
      } else if (value.length > 255) {
        addError(e.target.name, 'Phone number can\'t be longer than 255 characters')
      } else if (!phoneRegEx.test(value)) {
        addError(e.target.name, 'Phone number is invalid')
      } else {
        removeError(name);
      }
      break;
  }
}

let inputs = document.getElementsByClassName('input');
for (let i=0; i < inputs.length; i++) {
  inputs[i].oninput = formOnChange;
}

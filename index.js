function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }
  function myFunction() {
    var x = document.getElementById("welcome");
    if (x.className === "welcome") {
      x.className += " responsive";
    } else {
      x.className = "welcome";
    }
  }




// Create hidden input element for access key
let accessKeyInput = document.createElement('input');
accessKeyInput.type = 'hidden';
accessKeyInput.name = 'access_key';
accessKeyInput.value = '6c7fa178-b105-49dc-83c9-f64df9f44975';

// Create text input element for name
let nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.name = 'name';
nameInput.placeholder = 'Your Name';
nameInput.className = 'contact-inputs';
nameInput.required = true;

// Create email input element
let emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.name = 'email';
emailInput.placeholder = 'Your Email';
emailInput.className = 'contact-inputs';
emailInput.required = true;

// Create textarea element for message
let messageTextarea = document.createElement('textarea');
messageTextarea.name = 'message';
messageTextarea.placeholder = 'Your Message';
messageTextarea.className = 'contact-inputs';
messageTextarea.required = true;

// Get a container element where these inputs will be appended
let formContainer = document.getElementById('formContainer'); // Replace 'formContainer' with the actual ID of your container element

// Append all created elements to the container
formContainer.appendChild(accessKeyInput);
formContainer.appendChild(nameInput);
formContainer.appendChild(emailInput);
formContainer.appendChild(messageTextarea);


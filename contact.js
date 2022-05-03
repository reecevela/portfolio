let formElement = document.createElement('iframe');
let width = window.innerWidth * 0.8;
const formLocation = document.querySelector('.form-goes-here');

createForm(formElement);

function createForm(form) {
  form.src = "https://docs.google.com/forms/d/e/1FAIpQLSfZW6OA7v506QnXCQlu0JEHv8nkpSy1oPZ2cwQsZqA68vMJ6w/viewform?embedded=true";
  form.width = width;
  form.height = 994;
  form.frameBorder = 0;
  form.marginHeight = 0;
  form.marginWidth = 0;
  form.textContent = 'Loading...';
  console.log("aaaaaaa")
  formLocation.appendChild(form);
}
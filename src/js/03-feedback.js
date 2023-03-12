import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";

const feedbackState = localStorage.getItem(LOCALSTORAGE_KEY);
if (feedbackState) {
  const feedback = JSON.parse(feedbackState);
  form.email.value = feedback.email;
  form.message.value = feedback.message;
}

const formData = {
    email: '',
    message: ''
  };

form.addEventListener('input', throttle((event) => {
    const { name, value } = event.target;
    formData[name] = value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData))
  }, 500));

 

form.addEventListener('submit',(event) => {
    event.preventDefault(); 
  
    const feedback = {
      email: form.email.value,
      message: form.message.value
    };
  
    console.log(feedback);
  
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset(); 
  })
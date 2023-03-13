import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";

const formData = {
  email: '',
  message: '',
};

try {
  const feedbackState = localStorage.getItem(LOCALSTORAGE_KEY);
if (feedbackState) {
  const feedback = JSON.parse(feedbackState);
  Object.entries(formData).forEach(([key, value]) => {
    const inputField = form[key];
    inputField.value = feedback[key];
  });
}
} catch (error) {
  console.log(error.name);
}


form.addEventListener('input', throttle((event) => {
    const { name, value } = event.target;
    formData[name] = value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData))
  }, 500));

 

form.addEventListener('submit',(event) => {
    event.preventDefault(); 
  
    console.log(formData);

    localStorage.removeItem(LOCALSTORAGE_KEY);
    event.target.reset() ;
  })
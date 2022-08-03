import Throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', Throttle(onForm, 500));
form.addEventListener('submit', onSubmitButton);

dataFromLocalStorage();

let feedbackForm = {};

function onForm() {
    feedbackForm = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackForm));
};

// function onForm(event) {
//     const { name, value } = event.target;
//     feedbackForm[name] = value;
//     localStorage.setItem('feedback-form-state', JSON.stringify(feedbackForm));
// };   

function onSubmitButton(event) {
    event.preventDefault();
    console.log(feedbackForm);

    form.reset();
    localStorage.removeItem('feedback-form-state');
    
};

function dataFromLocalStorage() {
    const dataLocalStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
 
    if (dataLocalStorage) {
        form.elements.email.value = dataLocalStorage.email;
        form.elements.message.value = dataLocalStorage.message;
    };

};



import Throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', Throttle(onForm, 500));
form.addEventListener('submit', onSubmitButton);

const feedbackForm = {};

function onForm(event) {
    const { name, value } = event.target;
    feedbackForm[name] = value;
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackForm));
};

function onSubmitButton(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    form.reset();
    localStorage.removeItem('feedback-form-state');
    
};

function dataFromLocalStorage() {
    const dataLocalStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
    /*
    let input = form.elements.email.value;
    let textarea = form.elements.message.value;
    let inputValue = dataLocalStorage.email;
    let textareaValue = dataLocalStorage.message;
                          Можете пояснити чому не працюе з перемінними? 
    if (dataLocalStorage) {
        input = inputValue;
        textarea = textareaValue;
    };
    */
     if (dataLocalStorage) {
        form.elements.email.value = dataLocalStorage.email;
        form.elements.message.value = dataLocalStorage.message;
    };

};
dataFromLocalStorage();
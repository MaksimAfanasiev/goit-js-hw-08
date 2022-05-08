import _throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form");
const emailInpEl = document.querySelector('input[name="email"]');
const messageInpEl = document.querySelector('textarea[name="message"]');

const KEY = "feedback-form-state";
const dataObj = {};


if (localStorage.getItem(KEY)) {
    const storageData = JSON.parse(localStorage.getItem(KEY));
    emailInpEl.value = storageData.email ? storageData.email : "";
    messageInpEl.value = storageData.message ? storageData.message : "";
}

formEl.addEventListener("input", _throttle(onInputTyping, 500));

formEl.addEventListener("submit", onFormSubmit);

function onInputTyping(e) {
    const inpName = e.target.name;
    const inpValue = e.target.value;

    dataObj[inpName] = inpValue;
    
    const dataToSave = JSON.stringify(dataObj);
    localStorage.setItem(KEY, dataToSave);

}

function onFormSubmit(e) {
    e.preventDefault();

    const emailVal = e.currentTarget.elements.email.value;
    const messageVal = e.currentTarget.elements.message.value;

    const currentData = {
        email: emailVal,
        message: messageVal,
    }

    console.log(currentData)

    emailInpEl.value = "";
    messageInpEl.value = "";

    localStorage.removeItem(KEY);
}
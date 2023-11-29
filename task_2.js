const formFields = document.querySelectorAll('input, textarea, select');

function saveData() {
    formFields.forEach(field => {
        localStorage.setItem(field.id, field.value);
    });
}

function fillForm() {
    formFields.forEach(field => {
        const savedValue = localStorage.getItem(field.id);
        if (savedValue) {
            field.value = savedValue;
        }
    });
}

window.addEventListener('load', fillForm);

formFields.forEach(field => {
    field.addEventListener('blur', saveData);
});

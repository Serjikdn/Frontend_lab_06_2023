const textarea = document.querySelector('#textArea');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let savedHistory = getCookie('textareaHistory');
let history = savedHistory ? JSON.parse(savedHistory) : [];
let currentPosition = history.length - 1;

function setCookie(name, value){
    document.cookie = `${name}=${value};path=/`;
}

function getCookie(name){
    const cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split('=');
        if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

function saveToHistory(){
    history.push(textarea.value);
    setCookie('textareaHistory', JSON.stringify(history));
    currentPosition = history.length - 1;
}

// Оновлення значення textarea та керування кнопками переміщення по історії
function updateTextarea(index) {
    if (index >= 0 && index < history.length) {
        textarea.value = history[index];
        currentPosition = index;
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === history.length - 1;
    }
}

// Обробники подій для кнопок переміщення по історії
prevBtn.addEventListener('click', () => updateTextarea(currentPosition - 1));
nextBtn.addEventListener('click', () => updateTextarea(currentPosition + 1));

// Обробник події для збереження змін при введенні тексту
textarea.addEventListener('blur', saveToHistory);

// Оновлення стану кнопок переміщення після завантаження сторінки
updateTextarea(currentPosition);
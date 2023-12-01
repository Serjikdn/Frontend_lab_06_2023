const fileName = document.querySelector('#name');
const result = document.querySelector('#result');
const btn = document.querySelector('button');
const image = document.querySelector('img');
const state = document.querySelector('#state');

function addImg(name) {
    const img = document.createElement('img');
    img.src = 'images/' + name;
    result.append(img);
}

function getNames(json) {
    try {
        const text = JSON.parse(json);
        state.textContent = 'OK';
        return text;
    } catch (e) {
        state.textContent = 'Невірний формат JSON';
        return null;
    }
}

function getString() {
    return fileName.value;
}

function launch() {
    const names = getNames(getString());
    if (Array.isArray(names)) {
        names.forEach(name => addImg(name.trim()));
    } else if (names !== null) {
        addImg(names.trim());
    }
}

btn.addEventListener('click', () => {
    result.textContent = '';
    launch();
});

result.addEventListener('click', elem => {
    const img = elem.target.src;
    console.log(img);
    image.src = img;
})
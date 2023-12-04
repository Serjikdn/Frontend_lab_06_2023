const btn = document.querySelector('#loadImagesBtn');
btn.addEventListener('click', function() {
    fetch('https://dog.ceo/api/breeds/image/random/8')
        .then(response => response.json())
        .then(data => {
            const gallery = document.querySelector('#gallery');
            gallery.innerHTML = '';

            data.message.forEach(imgUrl => {
                const img = document.createElement('img');
                img.src = imgUrl;
                img.style.width = '150px'; // Налаштування розміру зображення для відображення
                img.style.height = 'auto';
                gallery.appendChild(img);
            });
        })
        .catch(error => {
            console.error('Виникла помилка:', error);
        });
});
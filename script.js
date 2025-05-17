// Добавляем эффект при наведении на продукты
document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('mousemove', (e) => {
        const x = e.offsetX;
        const y = e.offsetY;
        const centerX = product.offsetWidth / 2;
        const centerY = product.offsetHeight / 2;
        
        const angleX = (y - centerY) / 10;
        const angleY = (centerX - x) / 10;
        
        product.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    product.addEventListener('mouseleave', () => {
        product.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Анимация кнопки загрузки
const downloadBtn = document.querySelector('.download-btn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Ошибка 404: RAM не найдена в интернете. Попробуйте купить физические модули памяти в магазине');
    });
}

// Добавляем эффект для всех кнопок
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (this.getAttribute('type') !== 'submit') {
            e.preventDefault();
            const jokes = [
                "Загрузка началась! (нет)",
                "Пожалуйста, вставьте 25¢ для продолжения",
                "Ваш запрос обрабатывается... вечность",
                "RAM найдена! Ой, нет, это было воспоминание",
                "Попробуйте ещё раз, но с чувством, толком, расстановкой"
            ];
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            alert(randomJoke);
        }
    });
});
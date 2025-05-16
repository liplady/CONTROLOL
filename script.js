document.addEventListener('DOMContentLoaded', function() {
    // Динамическое добавление класса к ссылкам при наведении
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.classList.add('highlighted'); // Добавьте стиль для .highlighted в CSS
        });
        link.addEventListener('mouseout', function() {
            this.classList.remove('highlighted');
        });
    });

    // Пример динамической кнопки
    const dynamicButton = document.createElement('button');
    dynamicButton.textContent = 'Нажми меня!';
    dynamicButton.classList.add('button'); // Используем класс из CSS
    dynamicButton.addEventListener('click', function() {
        alert('Привет! Это динамически созданная кнопка.');
    });

    const mainSection = document.querySelector('main');
    if (mainSection) {
        mainSection.appendChild(dynamicButton);
    }

    //  Более сложные фишки можно добавить по мере изучения JS
    //  Например:
    //  - Анимации при прокрутке страницы (Intersection Observer API)
    //  - Динамическая загрузка контента (AJAX)
    //  - Валидация форм
});

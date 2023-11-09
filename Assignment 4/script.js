
const products = [
    { name: 'Элегантные линзы', price: 49, image: 'images/glasses1.jpg', description: 'Очки, которые добавляют вашему облику элегантность и утонченность. <br> Идеальны для тех, кто ценит стиль и комфорт.'},
    { name: 'Шикарные видения', price: 69, image: 'images/glasses2.jpg', description: 'Эти очки созданы для тех, кто ищет нечто особенное. Шикарный дизайн, высококачественные материалы и превосходное видение объединены в этой модели.'},
    { name: 'Лучи стиля', price: 89, image: 'images/glasses3.jpg', description: 'Преобразите свой облик с этими очками, придающими вашему стилю дополнительный сияющий акцент. Сочетание современного дизайна и удобства'},
    { name: 'Фэшн Фокус', price: 89, image: 'images/glasses4.jpg', description: 'Сосредоточьтесь на моде с этой коллекцией очков. Выразите свой индивидуальный стиль и следите за последними трендами с этими модными очками.'},
    { name: 'Очки Изысканности', price: 89, image: 'images/glasses5.jpg', description: 'Для тех, кто стремится к изысканной элегантности. Эти очки не только подчеркнут ваш утонченный вкус, но и обеспечат прекрасное зрение.'},
    { name: 'Очки гармонии', price: 89, image: 'images/glasses6.jpg', description: 'Совершенство формы и функции. Эти очки предлагают гармоничное сочетание стиля и комфорта для тех, кто ценит качество и эстетику.'},
    { name: 'Фирменные N&A', price: 89, image: 'images/glasses7.jpg', description: 'Эти уникальные очки от N&A - это не просто аксессуар, а часть вашего индивидуального стиля. Вдохновленные трендами, созданные для вас.'},
    { name: 'Очки иллюзии', price: 89, image: 'images/glasses8.jpg', description: 'Погрузитесь в великолепие дизайна и комфорта с этими очками. Удивительное сочетание стиля и функциональности для вашего взгляда'},
    { name: 'Великолепие Взгляда', price: 89, image: 'images/glasses9.jpg', description: 'Играйте с восприятием с этой коллекцией очков. Создайте иллюзии и выделитесь из толпы с этим захватывающим дизайном.'},
    { name: 'Очки Эклектики', price: 89, image: 'images/glasses10.jpg', description: 'Для тех, кто ценит разнообразие и индивидуальность. Эклектичный дизайн этих очков добавит неповторимый характер к вашему облику.'},
    { name: 'Видение Вдохновения', price: 89, image: 'images/glasses11.jpg', description: 'Обретите видение вдохновения с этими очками. Созданные для тех, кто стремится к новым горизонтам стиля и инноваций.'},
    { name: 'Звездные Линзы', price: 89, image: 'images/glasses12.jpg', description: 'Очки, которые созданы для звезд и звездочек. Очаровательный дизайн и высокая функциональность для тех, кто привык быть в центре внимания.'}
];

const productsSection = document.getElementById('products');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h2>${product.name}</h2>
        <p>${product.price} тенге.</p>
        <details class="product-details">
            <summary>Показать описание</summary>
            <p>${product.description}</p>
        </details>`;
    productsSection.appendChild(productCard);
});

const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});


const clickSound = new Audio('sounds/click.mp3');

document.addEventListener('click', () => {
    clickSound.play();
});

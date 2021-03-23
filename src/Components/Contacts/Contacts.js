import React from 'react';

function Contacts(props) {
    return (
        <div className='container'>
            <div className="row">
                <h1>Контакты</h1>
                <p>Телефон: 8-888-888-88-88</p>
            </div>
            <div className="row">
                <p>Адрес: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, alias.</p>
                <p>Схема проезда:</p>
                <div  className='map'>
                    <a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps">Москва</a>
                <a href="https://yandex.ru/maps/213/moscow/house/skakovaya_ulitsa_36/Z04YcwBjQUAGQFtvfXt2d3lkZw==/?ll=37.573852%2C55.776573&utm_medium=mapframe&utm_source=maps&z=16">Скаковая улица, 36 — Яндекс.Карты</a>
                <iframe src="https://yandex.ru/map-widget/v1/-/CCUUUOHrPA" title='map' width="560" height="400" ></iframe>
                
                </div>
            </div>
        </div>
    );
}

export default Contacts;
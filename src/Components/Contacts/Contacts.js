import React from 'react';

function Contacts(props) {
	return (
		<div className="container">
			<div className="row">
				<h1>Контакты</h1>
				<p>Телефон: (812) 602-70-29</p>
				<p>e-mail: email@email</p>
			</div>
			<div className="row">
				<p>Адрес: Санкт-Петербург, В.О., Средний проспект 4</p>
				<p>Схема проезда:</p>

				<div className="map">
					<a href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps">
						Санкт‑Петербург
					</a>
					<a href="https://yandex.ru/maps/2/saint-petersburg/?feedback=map%2Fedit&ll=30.289332%2C59.945320&utm_medium=mapframe&utm_source=maps&z=16.05">
						Яндекс.Карты
					</a>
					<iframe
						title="map"
						src="https://yandex.ru/map-widget/v1/-/CCUUrAFT-B"
						width="560"
						height="400"></iframe>
				</div>
			</div>
		</div>
	);
}

export default Contacts;

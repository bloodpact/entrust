import React from 'react';
import ProductItem from './ProductItem';
import productDesc from '../../Misc/products/products.json';
import hm10_b from '../../Misc/products/hm10.png';
import temperature from '../../Misc/products/temp.png';
import pressure from '../../Misc/products/pressure.png';
import defend from '../../Misc/products/defend.png';
import manometr from '../../Misc/products/manometr.png';
import divider from '../../Misc/products/divide.png';
import consumption from '../../Misc/products/comsuption.png';
import level from '../../Misc/products/level.png';

function ProductsList(props) {
	const [products, setProudcts] = React.useState([]);
	React.useEffect(() => {
		setProudcts([
			{
				imgSrc: hm10_b,
				imgTitle: 'HART-МОДЕМЫ',
				desc:
					'HART-модемы используются для связи ПК с устройствами, использующими HART-протокол, такими как: преобразователи температуры, давления, уровня и другими приборами.',
			},
			{
				imgSrc: temperature,
				imgTitle: 'ДАТЧИКИ ТЕМПЕРАТУРЫ И ВЛАЖНОСТИ',
				desc:
					'Датчики температуры и влажности применяются для измерения температуры и относительной влажности, расчета температуры точки росы, абсолютной влажности и объемного влагосодержания газообразных сред.',
			},
			{
				imgSrc: pressure,
				imgTitle: 'ДАТЧИКИ ДАВЛЕНИЯ',
				desc:
					'Датчики давления применяются для измерения в средах различного характера: газы, жидкости, агрессивные среды. Часто используются в системах контроля технологическими процессами и на предприятиях энергетической отрасли.',
			},
			{
				imgSrc: defend,
				imgTitle: 'ЗАЩИТНЫЕ ГИЛЬЗЫ',
				desc:
					'Защитные гильзы предназначены для защиты датчиков температуры от механического, химического и коррозионно-эрозионного воздействия измеряемой среды.',
			},
			{
				imgSrc: manometr,
				imgTitle: 'МАНОМЕТРЫ',
				desc:
					'Манометры используются для измерения давления жидких и газообразных сред. Применяются во всех отраслях промышленности и предназначены для научно-исследовательских лабораторий, промышленных предприятий сферы энергетики, металлургии, нефтехимии, судостроения и производств, с повышенными требованиями к безопасности.',
			},
			{
				imgSrc: divider,
				imgTitle: 'РАЗДЕЛИТЕЛИ СРЕД',
				desc:
					'Применяются для защиты приборов измерения давления от негативных факторов рабочей среды: коррозии, высокой температуры, замерзания, пульсаций давления, гидроударов.',
			},
			{
				imgSrc: consumption,
				imgTitle: 'РАСХОДОМЕРЫ',
				desc:
					'Расходомеры предназначены для измерений и непрерывного преобразования значений объемного расхода и объема газообразных сред, пара, жидкостей.',
			},
			{
				imgSrc: level,
				imgTitle: 'УРОВНЕМЕРЫ',
				desc:
					'Приборы предназначены для измерения, контроля и непрерывного преобразования значений уровня жидких, в том числе агрессивных и взрывоопасных сред.',
			},
		]);
	}, []);
	return (
		<div className="container">
			<h1>Продукция</h1>
			<div className="flex">
				{products.map((el) => (
					<ProductItem key={el.imgTitle} products={el} />
				))}
			</div>
		</div>
	);
}

export default ProductsList;

import React from 'react';
import ProductItem from './ProductItem';
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
			{ imgSrc: hm10_b, imgTitle: 'hm10_b' },
			{ imgSrc: temperature, imgTitle: 'датчик температуры' },
			{ imgSrc: pressure, imgTitle: 'датчики давления' },
			{ imgSrc: defend, imgTitle: 'защитные гильзы' },
			{ imgSrc: manometr, imgTitle: 'манометры' },
			{ imgSrc: divider, imgTitle: 'разделители сред' },
			{ imgSrc: consumption, imgTitle: 'расходомеры' },
			{ imgSrc: level, imgTitle: 'уровнемеры' },
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

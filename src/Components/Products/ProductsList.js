import React from 'react';
import ProductItem from './ProductItem';
import hm10_b from '../../Misc/products/hm10_b.jpg';
import temperature from '../../Misc/products/датчик температуры.jpg';
import pressure from '../../Misc/products/датчики давления.jpg';
import defend from '../../Misc/products/защитные гильзы.jpg';
import manometr from '../../Misc/products/манометры.jpg';
import divider from  '../../Misc/products/разделители сред.jpg';
import consumption from '../../Misc/products/расходомеры.jpg';
import level from '../../Misc/products/уровнемеры.jpg';


function ProductsList(props) {
    const [products, setProudcts] = React.useState([])
    React.useEffect(()=>{
        setProudcts([
            {imgSrc:hm10_b, imgTitle:'hm10_b'},
            {imgSrc:temperature, imgTitle:'датчик температуры'},
            {imgSrc:pressure, imgTitle:'датчики давления'},
            {imgSrc:defend, imgTitle:'защитные гильзы'},
            {imgSrc:manometr, imgTitle:'манометры'},
            {imgSrc:divider, imgTitle:'разделители сред'},
            {imgSrc:consumption, imgTitle:'расходомеры'},
            {imgSrc:level, imgTitle:'уровнемеры'},
        ])
    },[])
    return (
        <div className="container">
            <h1>Продукция</h1>
            <div className='col s12 m7'>
                {products.map(el=><ProductItem key={el.imgTitle} products={el}/>)}
                
            </div>
        </div>
    );
}

export default ProductsList;
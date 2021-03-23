import React from 'react';

function ProductItem(props) {
    return (
        <div className="card sm12">
            <div className="card-image waves-effect waves-block waves-light">
             <img className="activator small-img" alt={props.products.imgTitle} src={props.products.imgSrc}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{props.products.imgTitle}<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                    {props.products.imgTitle}<i className="material-icons right">close</i>
                </span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quae perferendis fugit dolores corrupti illum, nobis dolorum. Aspernatur,
                accusantium molestiae?
                Eveniet pariatur culpa nulla ullam ipsam laborum dolores facilis aperiam enim?</p>
            </div>
        </div>
    );
}

export default ProductItem;
import React from 'react';

function Footer(props) {

    const [date, setDate] = React.useState('');
    React.useEffect(()=>{
        setDate(new Date().getFullYear()) 
    },[]);

    return (
            <div className="footer center">
                Энерготраст © {date} Телефон: 8-888-888-88-88

            </div>
    );
}

export default Footer;
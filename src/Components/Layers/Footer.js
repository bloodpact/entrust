import React from 'react';

function Footer(props) {

    const [date, setDate] = React.useState('');
    React.useEffect(()=>{
        setDate(new Date().getFullYear()) 
    },[])

    return (
            <div className="footer center">
                Энерготраст © {date}
            </div>
    );
}

export default Footer;
import React, { useEffect    } from 'react'
import Menu from '../../Components/Menu';

const Homepage = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <>
            <Menu/>
            <h1>Olá Mundo!</h1>
            <p>{title}</p>
        </>
    );
}

export default Homepage;
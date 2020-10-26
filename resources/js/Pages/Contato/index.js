import React, { useEffect } from 'react';
import Menu from '../../Components/Menu';

const Contato = ({title}) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <>
            <Menu/>
            <h1>Contato</h1>
        </>
    );
}

export default Contato;
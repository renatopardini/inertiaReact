import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

import route from 'ziggy';

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><InertiaLink replace href={route("home")}>Home</InertiaLink></li>
                <li><InertiaLink replace href={route("contato")}>Contato</InertiaLink></li>
            </ul>
        </nav>
    );
}

export default Menu
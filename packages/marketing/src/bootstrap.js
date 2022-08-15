import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// mount function to start the app
const mount = (el) => {
    ReactDOM.render(
        <App/>,
        el,
    );
};

// if we are in dev & in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

// we are running through container,
// export the mount function
export { mount };

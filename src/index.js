import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Logo  from './Logo';

import './index.css'

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
<Logo/>
    <App/>
</>);
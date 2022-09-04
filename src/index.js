import React from 'react';
import { createRoot } from 'react-dom/client';
import "bootswatch/dist/spacelab/bootstrap.css";
import './styles/index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App /> );

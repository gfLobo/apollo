import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import "./index.css"
import { AppRoutes } from './Router';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<AppRoutes />);
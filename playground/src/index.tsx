import { createRoot } from 'react-dom/client';
import { App } from './app';
import './reset.css';
import 'virtual:uno.css';

const root = createRoot(document.querySelector('#app')!);
root.render(<App />);

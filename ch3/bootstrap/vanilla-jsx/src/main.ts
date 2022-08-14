import './style.css';
import { App } from './components/app';
import './scss/styles.scss'
import * as _bootstrap from 'bootstrap'

const app = document.querySelector<HTMLDivElement>('#app')!

app.append(App as unknown as Node);

import './style.css';
import { App } from './components/app';
import './index.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.append(App as unknown as Node);

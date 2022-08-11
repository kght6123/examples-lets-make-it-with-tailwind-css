import sheet from './App.css' assert { type: 'css' };

class App extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const large = (this.hasAttribute('large') ? this.getAttribute('large') : 'false') === 'true';
    const h1 = document.createElement('h1');
    h1.textContent = 'Web Components + CSS Module Scripts';
    h1.setAttribute('class',`TomatoTitle ${large ? 'large' : ''}`);
    this.shadowRoot.adoptedStyleSheets = [sheet];
    this.shadowRoot.append(h1);
  }
}
customElements.define('cms-app', App);// 名前はダッシュが使われている名前 (kebab-case) である必要がある。

// 参考文献：https://developer.mozilla.org/ja/docs/Web/Web_Components/Using_custom_elements https://chromestatus.com/feature/5948572598009856
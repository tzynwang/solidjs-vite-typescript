import type { Component } from 'solid-js';

import logo from './logo.svg';
import cssModule from './App.module.css';

const App: Component = () => (
  <div class={cssModule.App}>
    <header class={cssModule.header}>
      <img src={logo} class={cssModule.logo} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        class={cssModule.link}
        href="https://github.com/solidjs/solid"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Solid
      </a>
    </header>
  </div>
);

export default App;

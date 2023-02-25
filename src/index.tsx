/* @refresh reload */
import { render } from 'solid-js/web';
import AppEntryPoint from '@Component/AppEntryPoint';
import './index.css';

const ROOT = document.getElementById('root');

if (import.meta.env.DEV && !(ROOT instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?'
  );
}

render(() => <AppEntryPoint />, ROOT!);

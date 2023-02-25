/* Packages */
import { defineConfig, loadEnv } from 'vite';
import solidPlugin from 'vite-plugin-solid';

/* Data */
import alias from './tool/getAlias';

/* Main */
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [solidPlugin()],
    base: env.VITE_BASE,
    server: {
      port: 3000,
    },
    resolve: {
      alias,
    },
    build: {
      target: 'esnext',
    },
  };
});

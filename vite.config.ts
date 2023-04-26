import react from '@vitejs/plugin-react';
import path from 'node:path';
import UnoCSS from 'unocss/vite';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  let base = '/'

  if (command === 'build' && mode === 'gh-pages') {
    const env = loadEnv(mode, process.cwd())
    base = env.VITE_REPO_NAME

    console.log(`Base url is ${base}`)
  }
  
  return {
    base,
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    plugins: [
      UnoCSS(),
      react(),
    ],
  }
})

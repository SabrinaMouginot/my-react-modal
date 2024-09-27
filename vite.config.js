import { defineConfig } from 'vite';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.js',
      name: 'MyReactModal',
      fileName: (format) => `my-react-modal.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      },
      plugins: [peerDepsExternal(), terser()]
    }
  }
});

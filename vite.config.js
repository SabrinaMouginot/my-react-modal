// Importation de la fonction defineConfig depuis Vite pour configurer l'environnement de build
import { defineConfig } from 'vite';
// Importation du plugin peerDepsExternal pour gérer les dépendances externes
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// Importation du plugin terser pour minifier le code (le rendre plus petit et optimisé)
import { terser } from 'rollup-plugin-terser';

// Exportation de la configuration pour Vite
export default defineConfig({
  build: {
    // Définition des paramètres pour construire la bibliothèque
    lib: {
      // Indique le point d'entrée du code source de la bibliothèque
      entry: './src/index.js', 
      // Nom global de la bibliothèque quand elle est utilisée via un script ou une CDN
      name: 'MyReactModal', 
      // Fonction pour nommer les fichiers générés pour chaque format de build (ex: es, umd)
      fileName: (format) => `my-react-modal.${format}.js`
    },
    // Options spécifiques à Rollup (le bundler utilisé par Vite pour la construction)
    rollupOptions: {
      // Déclaration des dépendances externes à exclure du bundle final
      // 'react' et 'react-dom' ne seront pas inclus dans le bundle généré pour éviter de dupliquer ces dépendances
      external: ['react', 'react-dom'],
      // Configuration pour l'output (le résultat de la build)
      output: {
        // Définition des variables globales pour les modules externes
        // Quand 'react' et 'react-dom' sont importés dans le navigateur, ils seront accessibles via les noms 'React' et 'ReactDOM'
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      },
      // Liste des plugins utilisés par Rollup
      plugins: [
        // Le plugin peerDepsExternal permet de traiter les peer dependencies de manière externe
        // Cela garantit que 'react' et 'react-dom' ne sont pas inclus dans le bundle final, mais doivent être présents dans le projet où la bibliothèque est utilisée
        peerDepsExternal(),
        // Le plugin terser minifie le code final pour optimiser la taille du fichier généré
        terser()
      ]
    }
  }
});

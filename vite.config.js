import { defineConfig } from "vite";
import cssnano from "cssnano";
import imagemin from "vite-plugin-imagemin";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import PurgeIcons from 'vite-plugin-purge-icons';
import viteImagemin from '@vheemstra/vite-plugin-imagemin'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminWebp from 'imagemin-webp'




export default defineConfig({
    root: ".",
    sourcemap: true,
    build: {
      outDir: "./dist",
      assetsDir: "./assets",
      minify: "terser",
    },
    plugins: [
        cssnano(),
        PurgeIcons(),
        imagemin({
        }), 
        viteImagemin({
            plugins: {
              jpg: imageminMozjpeg(),
            },
            makeWebp: {
              plugins: {
                jpg: imageminWebp(),
              },
            },
          }),
    ],
});
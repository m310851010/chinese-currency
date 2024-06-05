import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import copy from 'rollup-plugin-copy';

export default defineConfig({
    build: {
        lib: {
            entry: './lib/index.ts', // TS库入口文件
            name: 'chineseCurrency', // 挂载到全局的变量名
            formats: ['es', 'umd' ],
            fileName: (format) => `chinese-currency.${format}.js`
        },
        sourcemap: true,
    },
    plugins: [
        dts({
            copyDtsFiles: true,
            outDir: './dist',
            include: ['./lib'],
        }),
        copy({
            copySync: true,
            targets: [
                {
                    src: ['./lib/'],
                    dest: './dist',
                }
            ]
        }),
    ]
});

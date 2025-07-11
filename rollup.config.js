// rollup.config.js
import typescript from '@rollup/plugin-typescript';

export default [
    {
        input: 'index.ts',
        output: {
            file: 'dist/index.esm.js', // 对应 package.json 的 "module" 和 "exports.import"
            format: 'esm',
            sourcemap: true
        },
        // 将所有用到的 ts 文件打包，并生成 d.ts
        plugins: [typescript({
            tsconfig: './tsconfig.json',
            declaration: true,
            declarationDir: 'dist', // 指定声明文件的输出目录
            rootDir: '.' // 将根目录设为当前目录，以便正确生成声明文件路径
        })]
    },
    {
        input: 'index.ts',
        output: {
            file: 'dist/index.cjs.js', // 对应 package.json 的 "main" 和 "exports.require"
            format: 'cjs',
            sourcemap: true,
            exports: 'named' // 很重要，保持 named exports
        },
        plugins: [typescript({ tsconfig: './tsconfig.json' })] // 第二个包不需要再生成 d.ts
    }
];
import typescript from '@rollup/plugin-typescript';

export default [
    {
        input: 'index.ts', 
        output: {
            file: 'dist/index.esm.js',
            format: 'esm',
            sourcemap: true
        },
        plugins: [typescript({ tsconfig: './tsconfig.json' })]
    },
    {
        input: 'index.ts',
        output: {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            sourcemap: true,
            exports: 'named'
        },
        plugins: [typescript({ tsconfig: './tsconfig.json' })]
    }
];

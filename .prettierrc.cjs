module.exports = {
    plugins: [require.resolve('prettier-plugin-astro')],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
    astroAllowShorthand: false,
    printWidth: 100,
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    bracketSameLine: true,
    htmlWhitespaceSensitivity: 'ignore',
}

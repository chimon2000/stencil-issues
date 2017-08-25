exports.config = {
    publicPath: '/dist',
    bundles: [{ components: ['my-first-component'] }],
    collections: [{ name: '@stencil/router' }]
}

exports.devServer = {
    root: 'www',
    watchGlob: '**/**'
}

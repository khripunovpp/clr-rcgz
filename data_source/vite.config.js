export default {
    // config options
    base: './',
    build: {
        outDir: './../docs',
        assetsDir: '',
        rollupOptions: {
            input: {
                main: './index.html',
                view: './view.html',
                detection: './detection.html',
            }
        }
    }
}
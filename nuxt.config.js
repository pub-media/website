module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'pub',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Content Licensing Platorm' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', href: '/icons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' },
      { rel: 'manifest', href: '/icons/manifest.json' },
      { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#00c2c9' },

      { rel: 'stylesheet', href: '//use.fontawesome.com/releases/v5.0.6/css/all.css' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#333333' },
  /*
  ** Build configuration
  */

  css: [
    { src: '~assets/stylus/main.styl', lang: 'stylus' },
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

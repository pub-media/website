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
      { rel: 'shortcut icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#00c2c9' },

      { rel: 'stylesheet', href: '//use.fontawesome.com/releases/v5.0.6/css/all.css' },
    ],
    script: [
      { src: "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js" },
      // { src: "https://cdnjs.cloudflare.com/ajax/libs/tippy.js/2.5.0/tippy.min.js" },
      { src: "https://unpkg.com/tippy.js@2.5.0/dist/tippy.all.min.js", },
    ],
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

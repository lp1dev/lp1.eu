module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Jeremie Amsellem. - HACKER / DEVELOPER - Web and mobile applications development (Full Stack) - Penetration Testing - Security Assessment',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'érémie Amsellem - Hacker, Full Stack Back-end (Django, Flask) Front-end (ReactJS, VueJS, AngularJS, Angular4) and Mobile (Java/Kotlin, Ionic, ReactNative) Developer - Personal webpage' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css', integrity: 'sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp', crossorigin: 'anonymous'},
      { rel: 'stylesheet', href: '/fonts.css'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#73a4b6' },
  /*
  ** Build configuration
  */
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
  },
  modules: [
    '@nuxtjs/markdownit'
  ],

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true
  }
}

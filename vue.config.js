module.exports = {
  runtimeCompiler: true,

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
    motor: {
      packages: ['motor-media'],
    },
    moment: {
      locales: ['en', 'de'],
    },
  },
}

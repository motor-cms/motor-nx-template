// @ts-nocheck
import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n'

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
function loadLocaleMessages(
  locales,
  isPackage = false
): LocaleMessages<VueMessageType> {
  const messages: LocaleMessages<VueMessageType> = {}
  locales.keys().forEach((key) => {
    let variables = {}

    // Recursively go through the languages folder and read all json files in the directories and build the messages object
    // This allows us to split the language variables in separate files
    key.split('/').reduce(function (r, e) {
      // If we find a json file in the path, read the variables from it and assign it to the object
      if (isPackage) {
        variables = e.search(/\.json/i) > 0 ? locales(key) : {}
      } else {
        variables = e.search(/\.json/i) > 0 ? locales(key).default : {}
      }

      // Strip the .json file ending from the path fragment
      e = e.replace('.json', '')
      if (e !== '.') {
        return r[e] || (r[e] = variables)
      }
      return r
    }, messages)
  })

  return messages
}

/**
 * Merge function to combine different locales from external packages
 */
const merge = (target, source) => {
  // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object && key in target)
      Object.assign(source[key], merge(target[key], source[key]))
  }

  // Join `target` and modified `source`
  Object.assign(target || {}, source)
  return target
}

const baseLocales = require.context(
  './locales',
  true,
  /[A-Za-z0-9-_,\s]+\.json$/i
)
let messages = loadLocaleMessages(baseLocales, false)

const languageModules = []

/**
 * Motor-Media
 */
languageModules.push(
  require.context('motor-media/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
)

/**
 * Partymeister-Core
 */
languageModules.push(
  require.context(
    'partymeister-core/locales',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  )
)

/**
 * Motor-Backend
 */
languageModules.push(
  require.context('motor-backend/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
)

/**
 * Motor-Core
 */
languageModules.push(
  require.context('motor-core/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
)

languageModules.forEach((module) => {
  const moduleMessages = loadLocaleMessages(module, true)

  messages = merge(messages, moduleMessages)
})

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: messages,
})

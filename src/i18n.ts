// @ts-nocheck
import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n'

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
async function loadLocaleMessages(
  locales,
  isPackage = false
): LocaleMessages<VueMessageType> {
  const messages: LocaleMessages<VueMessageType> = {}
  for (const key of Object.keys(locales)) {
    let variables = {}
    // Recursively go through the languages folder and read all json files in the directories and build the messages object
    // This allows us to split the language variables in separate files
    await key.split('/').reduce(async (re, e) => {
      const module = await locales[key]()
      const r = await re

      // If we find a json file in the path, read the variables from it and assign it to the object
      if (isPackage) {
        variables = e.search(/\.json/i) > 0 ? module : {}
      } else {
        variables = e.search(/\.json/i) > 0 ? module.default : {}
      }
      // Strip the .json file ending from the path fragment
      e = e.replace('.json', '')
      if (
        e !== '.' &&
        e != '..' &&
        e != 'node_modules' &&
        e != 'locales'
      ) {
        return r[e] || (r[e] = variables);
      }
      return r
    }, messages)
  }
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

const baseLocales = import.meta.glob('./locales/**/*.json')

let messages = await loadLocaleMessages(baseLocales, false)

const languageModules = []


/**
 * Motor-Media
 */
languageModules.push(
  import.meta.glob('../node_modules/motor-media/locales/**/*.json')
)

/**
 * Motor-Backend
 */
languageModules.push(
  import.meta.glob('../node_modules/motor-backend/locales/**/*.json')
)

/**
 * Motor-Core
 */
languageModules.push(
  import.meta.glob('../node_modules/motor-core/locales/**/*.json')
)

languageModules.forEach(async (module) => {
  let moduleMessages = await loadLocaleMessages(module, true)

  // Remove key 'motor-X' from messages object to fit the follwing merge algorithm with messages
  if (Object.keys(moduleMessages)[0].includes('motor-')) {
    moduleMessages = moduleMessages[Object.keys(moduleMessages)]
  }

  messages = merge(messages, moduleMessages)
  console.log(messages)
})

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: import.meta.env.VITE_I18N_LOCALE || 'en',
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'en',
  messages: messages,
})

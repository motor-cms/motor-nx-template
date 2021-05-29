import { RouteRecordRaw } from 'vue-router'
import checkAuth from 'motor-core/router/checkAuth'

const routes: Array<RouteRecordRaw> = [
  /**
   * __model-plural__(sentenceCase)
   */
  {
    path: '/admin/__package__(kebabCase)/__model-plural__(kebabCase)',
    name: 'admin.__package__(kebabCase).__model-plural__(kebabCase)',
    meta: {
      layout: 'AdminLayout', // we add new meta layout here to use it later
      title:
        '__package__(kebabCase).__model-plural__(snakeCase).__model-plural__(snakeCase)',
    },
    beforeEnter: checkAuth,
    component: () =>
      import(
        '@/views/admin/__package__(kebabCase)/__model-plural__(kebabCase)/index.vue'
      ),
  },
  {
    path: '/admin/__package__(kebabCase)/__model-plural__(kebabCase)/create',
    name: 'admin.__package__(kebabCase).__model-plural__(kebabCase).create',
    meta: {
      title:
        '__package__(kebabCase).__model-plural__(snakeCase).__model-plural__(snakeCase)',
      breadcrumbs: [
        {
          route: 'admin.__package__(kebabCase).__model-plural__(kebabCase)',
          name: '__package__(kebabCase).__model-plural__(snakeCase).__model-plural__(snakeCase)',
        },
        {
          name: '__package__(kebabCase).__model-plural__(snakeCase).new',
        },
      ],
    },
    beforeEnter: checkAuth,
    component: () =>
      import(
        '@/views/admin/__package__(kebabCase)/__model-plural__(kebabCase)/edit.vue'
      ),
  },
  {
    path: '/admin/__package__(kebabCase)/__model-plural__(kebabCase)/edit/:id',
    name: 'admin.__package__(kebabCase).__model-plural__(kebabCase).edit',
    meta: {
      title:
        '__package__(kebabCase).__model-plural__(snakeCase).__model-plural__(snakeCase)',
      breadcrumbs: [
        {
          route: 'admin.__package__(kebabCase).__model-plural__(kebabCase)',
          name: '__package__(kebabCase).__model-plural__(snakeCase).__model-plural__(snakeCase)',
        },
        {
          name: '__package__(kebabCase).__model-plural__(snakeCase).edit',
        },
      ],
    },
    beforeEnter: checkAuth,
    component: () =>
      import(
        '@/views/admin/__package__(kebabCase)/__model-plural__(kebabCase)/edit.vue'
      ),
  },
]

export default routes

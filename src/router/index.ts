import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

let routes: Array<RouteRecordRaw> = []

const routerModules = []

import * as mediaRoutes from 'motor-media/routes/index'
import * as backendRoutes from 'motor-backend/routes/index'
import * as coreRoutes from 'motor-core/routes/index'

routerModules.push(mediaRoutes, backendRoutes, coreRoutes)

routerModules.forEach((module) => {
  Object.keys(module).map((key: string) => {
    routes = routes.concat(module[key].default)
  })
})

const router = createRouter({
  linkActiveClass: 'active',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

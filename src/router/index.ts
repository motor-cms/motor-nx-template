import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

let routes: Array<RouteRecordRaw> = []

// load and append all routes from the src/routes folder
// const files = require.context('./../routes', true, /.ts$/i)
// files
//   .keys()
//   .map(files)
//   .map((m: any) => {
//     routes = routes.concat(m.default)
//   })

// load and append all routes from the src/routes folder
const routerModules = []

routerModules.push(require.context('motor-media/routes', true, /.ts$/i))
routerModules.push(require.context('partymeister-core/routes', true, /.ts$/i))
routerModules.push(require.context('partymeister-accounting/routes', true, /.ts$/i))
routerModules.push(require.context('motor-backend/routes', true, /.ts$/i))
routerModules.push(require.context('motor-core/routes', true, /.ts$/i))

routerModules.forEach((module) => {
  module
    .keys()
    .map(module)
    .map((m: any) => {
      routes = routes.concat(m.default)
    })
})

const router = createRouter({
  linkActiveClass: 'active',
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

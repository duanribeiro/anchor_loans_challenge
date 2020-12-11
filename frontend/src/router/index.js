import Vue from 'vue'
import Router from 'vue-router'
import publicRoutes from './public'
import privateRoutes from './private'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/photos'
    }
  ].concat(publicRoutes).concat(privateRoutes)
})

router.beforeEach((to, from, next) => {
  const authenticated = store.getters.authstatus
  const isPublic = to.matched.some(record => record.meta.public)

  if (!isPublic && !authenticated) {
    return next({
      path: '/photos',
    })
  }
  next()
})


export default router

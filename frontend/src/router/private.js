const TheContainer = () => import('@/layouts/TheContainer')


const routes = []

export default routes.map(route => {
  return { ...route, meta: { public: false } }
})

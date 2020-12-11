const LoginContainer = () => import('@/layouts/LoginContainer')
const LoginView = () => import('@/views/LoginView')
const PhotosView = () => import('@/views/PhotosView')
const TheContainer = () => import('@/layouts/TheContainer')

const routes = [
  {
    path: '/login',
    component: LoginContainer,
    children: [{
      path: '',
      component: LoginView
    }]
  },
  {
    path: '/raw_data',
    component: TheContainer,
    children: [{
      path: '',
      component: PhotosView
    }]
  }
]

export default routes.map(route => {
  const meta = {
    public: true
  }
  return { ...route, meta }
})

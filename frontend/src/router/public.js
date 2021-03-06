const TheContainer = () => import('@/layouts/TheContainer')
const PhotosView = () => import('@/views/PhotosView')

const routes = [
  {
    path: '/photos',
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

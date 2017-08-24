import BootstrapScrollSpy from '@/components/bootstrap-scrollspy'
import BootstrapModal from '@/components/bootstrap-modal'
import BootstrapTable from '@/components/bootstrap-table'
import BootstrapTabs from '@/components/bootstrap-tabs.vue'

const routes = [
  {
    path: '/bootstrap/scrollspy',
    component: BootstrapScrollSpy,
  },
  {
    path: '/bootstrap/modal',
    component: BootstrapModal
  },
  {
    path: '/bootstrap/tabs',
    component: BootstrapTabs
  }
]

export default routes
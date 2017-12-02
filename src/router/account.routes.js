import Account from '@/pages/account/Account'
import AccountInbox from '@/pages/account/account-inbox'
import AccountSettings from '@/pages/account/account-settings'

const routes = [
  {
    path: '/account',
    component: Account,
    meta: { requiresAuth: true },
    // Note that nested paths that start with / will be treated as a root path
    children: [
      {
        path: 'inbox',
        component: AccountInbox,
        meta: { requiresAuth: true }
      },
      {
        path: 'settings',
        component: AccountSettings,
        meta: { requiresAuth: true }
      }
    ]
  },
]

export default routes
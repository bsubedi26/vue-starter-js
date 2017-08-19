import Account from '@/pages/account/Account'
import AccountInbox from '@/pages/account/account-inbox'
import AccountSettings from '@/pages/account/account-settings'

const routes = [
  {
    path: '/account',
    component: Account,
    // Note that nested paths that start with / will be treated as a root path
    children: [
      {
        path: 'inbox',
        component: AccountInbox
      },
      {
        path: 'settings',
        component: AccountSettings
      }
    ]
  },
]

export default routes
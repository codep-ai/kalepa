import {
  mdiAccountCircle,
  mdiDesktopMac,
  mdiTransitConnection,
  mdiTransitConnectionVariant,
  mdiTransitConnectionHorizontal,
  mdiLock,
  mdiAlertCircle,
  mdiMonitorShimmer,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive
} from '@mdi/js'

export default [
  'General',
  [
    {
      to: '/',
      icon: mdiDesktopMac,
      label: 'Dashboard'
    }
  ],
  'Build',
  [
    {
      label: 'DataFlow',
      icon: mdiTransitConnectionVariant,
      to: '/dataflow'
    },
    {
      label: 'Insight',
      icon: mdiTransitConnectionVariant,
      to: '/insight'
    }
  ],
  'Examples',
  [
    {
      to: '/tables',
      label: 'Tables',
      icon: mdiTable,
      updateMark: true
    },
    {
      to: '/forms',
      label: 'Forms',
      icon: mdiSquareEditOutline
    },
    {
      to: '/ui',
      label: 'UI',
      icon: mdiTelevisionGuide
    },
    {
      to: '/responsive',
      label: 'Responsive',
      icon: mdiResponsive
    },
    {
      to: '/profile',
      label: 'Profile',
      icon: mdiAccountCircle
    },
    {
      to: '/login',
      label: 'Login',
      icon: mdiLock
    },
    {
      to: '/error',
      label: 'Error',
      icon: mdiAlertCircle
    },
    {
      label: 'Submenus',
      subLabel: 'Submenus Example',
      icon: mdiViewList,
      menu: [
        {
          label: 'Sub-item One'
        },
        {
          label: 'Sub-item Two'
        }
      ]
    }
  ],
  'About',
  [
    {
      label: 'About ' + kalepa.appData.appName,
      icon: mdiMonitorShimmer,
      target: '_blank'
    },
    {
      href: 'https://trial.ascend.io/ui/v2/organization/hengruili_gmail_com/project/test_dataflow',
      label: 'Our Benchmark',
      icon: mdiMonitorShimmer,
      target: '_blank'
    },
  ]
]

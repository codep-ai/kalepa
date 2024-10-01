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
  mdiResponsive,
  mdiAbacus,
  mdiChartBellCurveCumulative,
  mdiCogSync,
  mdiAlignHorizontalRight
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
  'Platform',
  [
    {
      label: 'AI',
      icon: mdiAbacus,
      subLabel: 'Submenus AI',
      menu: [
        {
          label: 'Machine Learning',
          to: '/insight'
        },
        {
          label: 'Generative AI',
          to: '/genAI'
        },
        {
          label: 'Gen AI Local',
          to: '/genAI_local'
        }
      ]
    },
    {
      label: 'BI',
      icon: mdiChartBellCurveCumulative,
      to: '/bi'
    },
    {
      label: 'CI',
      icon: mdiTransitConnectionVariant,
      // to: '/newapi',
      menu: [
        {
          label: 'Automation',
          to: '/Airflow'
        }
      ]
    },
    {
      label: 'DI',
      icon: mdiCogSync,
      subLabel: 'Submenus Example',
      menu: [
        {
          label: 'Dataflow',
          //to: '/dataflow'
          to: '/pipeline'
        },
        {
          label: 'Data Transformation',
          to: '/dbt'
        },
        {
          label: 'Data Ingestion',
          to: '/newapi'
        }
      ],
    }
  ],
  'About',
  [
    {
      label: 'About DATAPAI',
      icon: mdiMonitorShimmer,
      target: '_blank'
    },
    {
      href: 'http://www.datap.ai/ourteam',
      label: 'Our Team',
      icon: mdiMonitorShimmer,
      target: '_blank'
    },
  ]
  /*
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
  */
]

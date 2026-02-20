import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'sufrah',
    themes: {
      sufrah: {
        dark: false,
        colors: {
          background: '#F7F1E8',
          surface: '#F7F1E8',
          primary: '#1F3D2B',
          secondary: '#6B3F1D',
          accent: '#C89B4A',
          error: '#B00020',
          info: '#2196F3',
          success: '#1F3D2B',
          warning: '#C89B4A',
        },
      },
    },
  },
})

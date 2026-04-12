import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          background: '#0a0a0a',
          surface: '#141414',
          'surface-variant': '#1e1e1e',
          primary: '#c9c1b6',
          secondary: '#9a8b78',
          'on-background': '#f0eeea',
          'on-surface': '#e0dbd4',
        }
      }
    }
  },
  defaults: {
    VBtn: {
      variant: 'outlined',
      rounded: 'pill',
    }
  }
})

export default vuetify

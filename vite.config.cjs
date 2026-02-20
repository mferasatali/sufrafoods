const { defineConfig } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vuetify = require('vite-plugin-vuetify')

module.exports = defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
  ],
})

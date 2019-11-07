const browserSync = require('browser-sync')
const history = require('connect-history-api-fallback')
const compression = require('compression')
const paths = require('./utils/paths')

browserSync({
  open: true,
  notify: false,
  server: {
    baseDir: paths.distPath,
    middleware: [
      history(),
      compression()
    ]
  }
})

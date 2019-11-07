const { createDlls } = require('./utils/dlls')

// `npm run dll --force` support
const force = process.env.npm_config_force

createDlls(null, force)

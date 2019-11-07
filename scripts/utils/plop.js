const paths = require('./paths')
const fs = require('fs')
const path = require('path')

const pagesDirs = fs
  .readdirSync(paths.pagesPath)
  .filter(f => fs.statSync(path.join(paths.pagesPath, f)).isDirectory())

const getPages = () => {
  return pagesDirs
    .map(page => {
      return page.replace(paths.pagesPath + '/', '')
    })
    .filter(p => p !== 'index.js')
    .map(page => {
      const name = page.split('/')[0]

      return {
        name
      }
    })
}

const getPagePrompt = ({
  name,
  message = 'Select a page',
  when
}) => {
  const pages = getPages()

  return {
    name,
    message,
    when,
    type: 'list',
    choices: pages
  }
}

module.exports = {
  getPagePrompt
}

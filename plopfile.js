const path = require('path')
const paths = require('./scripts/utils/paths')
const { getPagePrompt } = require('./scripts/utils/plop')
const { pascalCase } = require('pascal-case')

const getRootDir = (answers) => {
  const {
    page,
    features
  } = answers

  if (page) {
    return path.resolve(paths.pagesPath, page)
  }

  const isFormElement = features.includes('isFormElement')

  if (isFormElement) {
    return path.resolve(paths.formElementsPath)
  }

  return paths.srcPath
}

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'create a react component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is the name of the component? (in PascalCase)',
      validate: input => input !== '',
      transformer: input => pascalCase(input)
    }, {
      type: 'checkbox',
      name: 'features',
      message: 'What are the feature of the component?',
      choices: [{
        name: 'Is it a container?',
        value: 'isContainer',
        checked: false
      }, {
        name: 'Page component?',
        value: 'isPage',
        checked: true
      }, {
        name: 'Form element component?',
        value: 'isFormElement',
        checked: false
      }, {
        name: 'Use styles?',
        value: 'hasStyles',
        checked: true
      }]
    }, getPagePrompt({
      name: 'page',
      when: answers => {
        const { features } = answers
        return features.includes('isPage')
      }
    })],
    actions: answers => {
      const {
        name,
        features
      } = answers

      const hasStyles = features.includes('hasStyles')
      const isContainer = features.includes('isContainer')
      const isFormElement = features.includes('isFormElement')

      const actions = []

      const rootDir = getRootDir(answers)

      const componentDir = isContainer ? 'containers' : 'components'
      const dir = path.join(rootDir, `/${componentDir}/${name}`)

      if (hasStyles) {
        actions.push({
          type: 'add',
          path: path.join(dir, `${name}.scss`),
          templateFile: './scripts/plop-templates/component/styles.hbs'
        })
      }

      actions.push({
        type: 'add',
        path: path.join(dir, `${name}.js`),
        templateFile: hasStyles
          ? './scripts/plop-templates/component/component-with-styles.hbs'
          : './scripts/plop-templates/component/component.hbs'
      })

      if (isFormElement) {
        actions.push({
          type: 'append',
          path: path.resolve(paths.formElementsPath, 'index.js'),
          template: 'export {{name}} from \'./FormEmailNotifications/{{name}}/{{name}}\''
        })
      }

      return actions
    }
  })
}

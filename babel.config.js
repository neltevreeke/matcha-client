module.exports = api => {
  const development = api.env([
    'development',
    'test'
  ])

  const plugins = [
    '@babel/syntax-dynamic-import',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    'lodash'
  ]

  if (development) {
    plugins.push(
      require('react-hot-loader/babel')
    )
  } else {
    plugins.push(
      require('babel-plugin-dev-expression'),
      require('babel-plugin-transform-react-remove-prop-types')
    )
  }

  return {
    presets: [
      require('@babel/preset-env'),
      [
        require('@babel/preset-react'),
        {
          development
        }
      ]
    ],
    plugins
  }
}

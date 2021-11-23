const path = require('path')

const resolvePath = (target) => path.resolve(__dirname, target)

module.exports = (api) => {
  const useESModules = api.env(['modern'])

  const presets = [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        modules: useESModules ? false : 'auto',
      },
    ],
    '@babel/react',
  ]
  const plugins = [
    ['@babel/transform-runtime', { useESModules: true }],
    ['@babel/proposal-pipeline-operator', { proposal: 'fsharp' }],
    [
      'module-resolver',
      {
        root: './',
        alias: {
          '@jinxyang/components': resolvePath(
            'packages/jinxyang-components/src',
          ),
          '@jinxyang/hooks': resolvePath('packages/jinxyang-hooks/src'),
          '@jinxyang/utils': resolvePath('packages/jinxyang-utils/src'),
        },
      },
    ],
  ]

  return {
    presets,
    plugins,
  }
}

module.exports = {
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
        'postcss-flexbugs-fixes',
        [
          'postcss-preset-env',
          {
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
            features: {
              'custom-properties': false,
            },
          },
        ],
      ]
      : [
          'precss'
        // No transformations in development
      ],
}
// module.exports = ({file, options}) => ({
//   plugins: {
//     'postcss-import': {},
//     cssnano: process.env.NODE_ENV === 'production' ? {} : false,
//     'postcss-preset-env': {
//       stage: 0,
//       features: {
//         'color-mod-function': {unresolved: 'warn'},
//         'nesting-rules': true
//       }
//     }
//   }
// })

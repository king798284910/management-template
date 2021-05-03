module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    // ['import', {
    //   libraryName: 'element-ui',
    //   styleLibraryName: 'theme-chalk',
    //   libraryDirectory: 'packages',
    //   style: true
    // }, 'element-ui']
    [
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk'
      }
    ]
  ]
}

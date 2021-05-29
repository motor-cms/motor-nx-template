const { generateTemplateFiles } = require('generate-template-files')

generateTemplateFiles([
  // Example of generating multiple files
  {
    option: 'Create module',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './generator/templates/',
    },
    stringReplacers: ['__package__', '__model__', '__model-plural__'],
    output: {
      path: './src',
      pathAndFileNameDefaultCase: '(camelCase)',
    },
    onComplete: (results) => {
      console.log(`results`, results)
    },
  },
  // Example of generating a single file
  // {
  // option: 'Create api repository',
  // defaultCase: '(pascalCase)',
  // entry: {
  //     folderPath: './tools/templates/api/__model__.ts',
  // },
  // stringReplacers: ['__package__', '__model__'],
  // output: {
  //     path: './src/api/__package__(kebabCase)/__model__(kebabCase).ts',
  //     pathAndFileNameDefaultCase: '(pascalCase)',
  // },
  // onComplete: (results) => {
  //     console.log(`results`, results);
  // },
  // },
])

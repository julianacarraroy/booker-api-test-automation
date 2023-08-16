module.exports = {
  transform: {
    '.js$': 'esbuild-jest'
  },
  reporters: [
    'default',
    ['jest-html-reporters', {
      publicPath: './reports',
      filename: 'report.html',
      openReport: true
    }]
  ],
  setupFiles: ['dotenv/config']
};

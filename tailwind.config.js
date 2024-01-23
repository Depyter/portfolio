module.exports = {
  content: [
    './public/index.html',
    './custom.css',
    './public/unfinished.html',
    './script.js',
  ],
  plugins: [
    require('tailwindcss-animated')
  ],
  theme: {
    gridTemplateColumns:{
      '69': 'repeat(auto-fill, minmax(360px, 1fr))',
    }
  }
};

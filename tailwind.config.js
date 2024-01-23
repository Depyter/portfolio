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
      'md': 'repeat(auto-fill, minmax(360px, 1fr))',
      'base': 'repeat(auto-fill, minmax(280px, 1fr))',
    }
  }
};

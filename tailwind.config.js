module.exports = {
  content: [
    './public/index.html',
    './custom.css',
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

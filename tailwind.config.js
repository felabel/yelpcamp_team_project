/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/**/*.css", "./js/**/*.js", "./**/*.html"],
  theme: {
    extend: {
      colors: {
        "textBlack": 'rgb(0,0,0)',
        'textGrey': '#797979',
        'greyBg': '#f9f6f1',
      },
      backgroundImage: {
        'search-icon': "url('../assets/images/Search Icon.svg')",
      },
      backgroundPosition: {
        'left-4': '1rem',
        
      },
      fontSize: {
        'h1': ['2.5rem', '2.5rem'],
      },
      width: {
        '55': '55%',
        '45': '45%',
      },
    
    },
  },
  plugins: [],
}

// npx tailwindcss -i ./css/styles.css -o ./dist/output.css --watch


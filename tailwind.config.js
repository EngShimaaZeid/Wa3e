module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Specify paths to all template files
  ],
  theme: {
    extend: {
      fontFamily: {
        zain: ['Zain', 'sans-serif'],
        kufi: ['Noto Kufi Arabic', 'sans-serif'], // 👈 Add your custom font here

      },
      colors: {
        mint: '#2ee5c2', 
        primaryBlue: '#165eb2', 
        lightmint:'#99F6E4',
        purple:'#64508C',
        lightgreen:'#78D5D7',
        darkgreen:'#07A0A0',
        red:'#DB7575',
        lightred:'#DB7575',
        babyblue:'#F3F7FB',
        darkred:'#C63030',
        shineyellow:'#C0A533',
      },
      borderRadius: {
        '4xl': '2rem',     // 32px
        '5xl': '2.5rem',   // 40px
        '6xl': '3rem',     // 48px
        '12xl': '12rem',     // 64px
      },
      fontSize: {
        'xxs': '0.5rem',  // add a new smaller size called 'xxs'
      },
    },  },
  plugins: [],
  
};

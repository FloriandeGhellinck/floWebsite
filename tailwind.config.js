/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Asap Condensed', 'cursive'], // It should be used for titles.
        subtitle: ['Nunito', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        // It should be used for subheadings, long texts and quotes, and should be quotations, highlighting.
      },

      colors: {
        primary: {
          orange: {
            DEFAULT: '#FF903E',
            20: '#FFE9D8',
            40: '#FFD3B2',
            60: '#FFBC8B',
            80: '#FFA665',
            100: '#FF903E',
            110: '#F2893B',
          },
          green: {
            dark: {
              DEFAULT: '#343C22',
              20: '#D6D8D3',
              40: '#AEB1A7',
              60: '#858A7A',
              80: '#5D634E',
              100: '#343C22',
              110: '#2F361F',
            },
            light: {
              DEFAULT: '#D3CC53',
              20: '#F6F5DD',
              40: '#EDEBBA',
              60: '#E5E098',
              80: '#DCD675',
              100: '#D3CC53',
              110: '#BEB84B',
            },
          },
          cream: {
            DEFAULT: '#F4EFEB',
            20: '#D3D5D0',
            40: '#FBF9F7',
            60: '#F8F5F3',
            80: '#F6F2EF',
            100: '#F4EFEB',
            110: '#E8E3DF',
          },
        },
        secondary: {
          green: {
            dark: {
              DEFAULT: '#252C16',
              20: '#D3D5D0',
              40: '#A8ABA2',
              60: '#7C8073',
              80: '#515645',
              100: '#252C16',
            },
            pastel: {
              DEFAULT: '#DAE4D9',
              20: '#F8FAF7',
              40: '#F0F4F0',
              60: '#E9EFE8',
              80: '#E1E9E1',
              100: '#DAE4D9',
              110: '#C4CDC3',
            },
            kaki: {
              DEFAULT: '#4A5332',
              20: '#DBDDD6',
              40: '#B7BAAD',
              60: '#929884',
              80: '#6E755B',
              100: '#4A5332',
              110: '#3F472A',
            },
          },
          brown: {
            dark: {
              DEFAULT: '#7B5E23',
              20: '#E5DFD3',
              40: '#CABFA7',
              60: '#B09E7B',
              80: '#957E4F',
              100: '#7B5E23',
              110: '#6F551F',
            },
            light: {
              DEFAULT: '#A58E67',
              20: '#EDE8E1',
              40: '#DBD2C2',
              60: '#C9BBA4',
              80: '#B7A585',
              100: '#A58E67',
              110: '#95805D',
            },
          },
        },
        neutral: {
          20: '#F2F2F2',
          50: '#DBDCDD',
          70: '#96989A',
        },
        alert: {
          success: {
            DEFAULT: '#52BD94',
            20: '#F5FBF8',
            40: '#BAE5D4',
            100: '#52BD94',
          },
          error: {
            DEFAULT: '#A58E67',
            20: '#FDF4F4',
            40: '#EDB4B4',
            100: '#D14343',
          },
        },
      },
      boxShadow: {
        1: '0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03)',
        2: '0px 2px 5px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.65rem',
      '7xl': '4.3rem',
    },
  },

  plugins: [],
};

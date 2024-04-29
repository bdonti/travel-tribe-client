/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],        
                  primary: "#2E5F47",                      
                  secondary: "#88BC6E",                          
                  accent: "#84cc16",                          
                  neutral: "#2E5F47",                                                    
                  info: "#7c3aed",                        
                  success: "#00ff00",                       
                  warning: "#be123c",                    
                  error: "#ff0000",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          
        }
      }
    ],
  },
}


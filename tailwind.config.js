/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Customizing your theme
      // fontFamily: {
      //   // Adds a new `font-display` class, After adding this to your theme you can use it just like any other font-{family} utility: <h1 class="font-display">
      //   display: 'Oswald, ui-serif',
      // },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      "valentine",
      "retro",
      "forest",
      {
        vit: {
          primary: "#646cff",
          "primary-content": "rgba(255, 255, 245, .86)", // Foreground content color to use on primary color
          secondary: "#32363f",
          // "secondary-content": "", // Foreground content color to use on secondary color
          accent: "#00e200",
          // "accent-content": "", // Foreground content color to use on accent color
          neutral: "#292b13",
          // "neutral-content": "", // Foreground content color to use on neutral color
          "base-100": "#1b1b1f", // Base color of page, used for blank backgrounds
          // "base-200": "#1f231e", // Base color, a little darker
          // "base-300": "#1f231e", // Base color, even more darker
          // "base-content": "", // Foreground content color to use on base color
          info: "#00d3ff",
          // "info-content": "", // Foreground content color to use on info color
          success: "#00b75d",
          // "success-content": "", // Foreground content color to use on success color
          warning: "#ff7b00",
          // "warning-content": "", // Foreground content color to use on warning color
          error: "#c10026",
          // "error-content": "", // Foreground content color to use on error color
          // "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          // "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          // "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          // "--animation-btn": "0.25s", // duration of animation when you click on button
          // "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          // "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          // "--border-btn": "1px", // border width of buttons
          // "--tab-border": "1px", // border width of tabs
          // "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
      {
        // // Customize an existing theme
        // // Add custom styles for a specific theme
        // valentine: {
        //   // eslint-disable-next-line @typescript-eslint/no-var-requires
        //   ...require("daisyui/src/theming/themes")["valentine"],
        //   ".btn": {
        //     "background-color": "#1EA1F1",
        //     "border-color": "#1EA1F1",
        //   },
        //   ".btn:hover": {
        //     "background-color": "#1C96E1",
        //     "border-color": "#1C96E1",
        //   },
        // },
      },
    ],
  },
};

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      // NOWA, ZAKTUALIZOWANA PALETA KOLORÓW
      colors: {
        // Kolory tła i tekstu - lekko ocieplone szarości dla lepszej harmonii
        base: {
          50: '#f9f8f6',
          100: '#f3f1ec',
          200: '#e9e6e0',
          300: '#d9d3c9',
          400: '#c8bfb1',
          500: '#b8ac9a',
          DEFAULT: '#f9f8f6',
        },
        // Główny kolor: Zieleń Lasu
        primary: {
          50: '#f2f8f4',
          100: '#e5f1e9',
          200: '#cce3d4',
          300: '#a3ccb1',
          400: '#73b089',
          500: '#4f9167',
          DEFAULT: '#3B7B51', // Główny, zbalansowany zielony
          600: '#3b7b51',
          700: '#316544',
          800: '#2a533a',
          900: '#254532',
          950: '#12251a',
        },
        // Kolor uzupełniający: Ceglany Brąz
        secondary: {
          50: '#fdf5f2',
          100: '#fbeae4',
          200: '#f7d6ca',
          300: '#f1b7a4',
          400: '#e99176',
          500: '#e06e4d',
          DEFAULT: '#B85C3A', // Główny, ceglany brąz
          600: '#b85c3a',
          700: '#9a4b2f',
          800: '#7c3e29',
          900: '#643424',
          950: '#341911',
        },
        // Kolor przycisków (CTA): Stalowy Błękit Wody
        cta: {
          50: '#f3f7fa',
          100: '#e7eef4',
          200: '#d0dde9',
          300: '#a9c1d8',
          400: '#7d9fc0',
          500: '#5c82a8',
          DEFAULT: '#466C8E', // Główny, stonowany niebieski
          600: '#466c8e',
          700: '#3c5a76',
          800: '#344b61',
          900: '#2f4051',
          950: '#1d2833',
        },
      },
      // POZOSTAŁE USTAWIENIA POZOSTAJĄ BEZ ZMIAN
      screens: {
        midmd: "880px",
      },
      boxShadow: {
        aesthetic: "0 3px 10px rgb(0,0,0,0.2)",
        dark: "inset 0 1px 0 0 #ffffff0d",
      },
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
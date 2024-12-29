// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss'
import { animatedUno } from 'animated-unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    animatedUno(),
    presetAttributify(),
    presetUno(),
  ],
})

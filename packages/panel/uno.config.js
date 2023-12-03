// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  rules: [
    ['bg-img-dot', {
      'backdrop-filter': 'saturate(50%) blur(4px)',
      'background-image': 'radial-gradient(transparent 1px, #fff 1px)',
      'background-size': '4px 4px'
    }]
  ]
})

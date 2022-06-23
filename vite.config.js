import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

import vwt from 'weapp-tailwindcss-webpack-plugin/vite'
import postcssWeappTailwindcssRename from 'weapp-tailwindcss-webpack-plugin/postcss'

const isH5 = process.env.UNI_PLATFORM === 'h5'

const vitePlugins = [uni()]
const postcssPlugins = [require('autoprefixer')(), require('tailwindcss')()]

if (!isH5) {
  vitePlugins.push(vwt())

  postcssPlugins.push(
    require('postcss-rem-to-responsive-pixel')({
      rootValue: 32,
      propList: ['*'],
      transformUnit: 'rpx',
    })
  )
  postcssPlugins.push(postcssWeappTailwindcssRename({}))
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: vitePlugins,
  css: { postcss: { plugins: postcssPlugins } }
})

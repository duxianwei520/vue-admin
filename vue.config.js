// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
 module.exports = {
  // 选项...
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vueAdmin/'
    : '/',
}
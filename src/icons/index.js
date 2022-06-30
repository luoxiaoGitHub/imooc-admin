/*
1. 导入所有的svg图标
2. 完成svgicon的全局注册
*/
import SvgIcon from '@/components/SvgIcon'
const svgRequire = require.context('./svg', false, /\.svg$/)
svgRequire.keys().forEach((SvgIcon) => svgRequire(SvgIcon))
console.log('zzzz')
export default (app) => {
  app.component('svg-icon', SvgIcon)
}

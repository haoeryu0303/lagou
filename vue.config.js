const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
   chainWebpack: config => {
        // 设置快捷路径， @ 表示 'src' ，components 表示 'src/components'
        config.resolve.alias
            .set('@', resolve('src'))
            .set('public', resolve('public'))
            .set('assets', resolve('src/assets'))
            .set('common', resolve('src/common'))
            .set('components', resolve('src/components'));
        config.plugins.delete('prefetch');
    },
}
module.exports = {
	productionSourceMap: false,
	indexPath: process.env.NODE_ENV === 'production' ?
		'source.html' :
		'index.html',
	publicPath: process.env.VUE_APP_BASE_PATH,
	//通过fetch访问子项目，需要子项目进行可跨域配置，vue.config.js：
	devServer: {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	}
}

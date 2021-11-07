// 导入compression-webpack-plugin
const CompressionWebpackPlugin = require('compression-webpack-plugin');
// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css']

module.exports = {
    lintOnSave: false,
	
	//webpack配置
	//统一配置打包插件
	
	configureWebpack: {
		optimization:{
			runtimeChunk: 'single',
			splitChunks: {
				chunks: 'all',
				maxInitialRequests: Infinity,
				minSize: 20000,
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name( module ) {
							// get the name. E.g. node_modules/packageName/not/this/part.js
							// or node_modules/packageName
							const packageName = module.context.match( /[\\/]node_modules[\\/](.*?)([\\/]|$)/ )[ 1 ]
							// npm package names are URL-safe, but some servers don't like @ symbols
							return `npm.${ packageName.replace( '@', '' ) }`
						},
					},
				},
			},
		},
	    //警告 webpack 的性能提示
	    performance: {
	    	hints:'warning',
	    	//入口起点的最大体积
	    	maxEntrypointSize: 50000000,
	    	//生成文件的最大体积
	    	maxAssetSize: 30000000,
	    	//只给出 js 文件的性能提示
	    	assetFilter: function(assetFilename) {
	    		return assetFilename.endsWith('.js');
	    	}
	    },
		plugins: [
		    new CompressionWebpackPlugin({
		        filename: '[path].gz[query]',
		        algorithm: 'gzip',
		        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),//匹配文件名
		        threshold: 10240,//对10K以上的数据进行压缩
		        minRatio: 0.8,
		        deleteOriginalAssets:false,//是否删除源文件
		    })
		],
	},
	chainWebpack(config){
	    // 压缩图片
	    
	      config.module
	        .rule("images")
	        .use("image-webpack-loader")
	        .loader("image-webpack-loader")
	        .options({ bypassOnDebug : true })
			.end()
	    
	},
	publicPath: '/',   //这个必须，引入静态资源需要从根路径引入，否则会找不到静态资源
	devServer: {
		// history模式下的url会请求到服务器端，但是服务器端并没有这一个资源文件，就会返回404，所以需要配置这一项
		historyApiFallback: {
			index: '/index.html' //与output的publicPath
		},
	},
	productionSourceMap: false,
	
}

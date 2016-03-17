module.exports = function() {
	var config = {
		allTs: './src/**/*.ts',
		allHtml: './src/**/*.html',
		allCss: './src/**/*.css',
		allImages: './src/**/*.{JPG,jpg,png,gif,ico}',
		allJson: './src/**/*.json',
		allJs: './src/**/*.js',
		allAssets: './src/assets/**',
		typings: './typings/main/**/*.d.ts',
		toOutputPath: './client/'
	};
	return config;
}
/**
 *
 * webpack.config.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/3/19
 *
 * @内容 作用
 * @内容 作用
 */
//config
const {Environment:EnumEnv,config} = require('../config/config');
const {Entrys}=require('./Entrys.config');
//lib
const tsImportPluginFactory=require('ts-import-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var path = require('path');
var webpack = require('webpack');
var autoprefixer =require('autoprefixer');
var precss =require('precss');
var merge = require('webpack-merge')
var ExtractTextPlugin =require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var baseConfig = {
    target: 'web',
    context:path.join(__dirname,'..'),
    entry: Entrys,
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                use:[
                    // {
                    //     loader: 'babel-loader',
                    //     options:{
                    //         cacheDirectory:true
                    //     }
                    // },
                    {
                        loader: "awesome-typescript-loader",
                        options:{
                            getCustomTransformers:()=>({
                                before:[tsImportPluginFactory({libraryName:"antd",style:"css"})]
                            }),
                            useBabel:true,
                            useCache:true,
                            configFileName:path.resolve(__dirname,'../webpack/Webtsconfig.json')
                        },
                    }
                ],
                exclude: path.resolve(config.dirname, 'node_modules'),
                include: [path.resolve(config.dirname, "src/Client"),path.resolve(config.dirname, "src/models")]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            // {
            //     enforce: "pre",
            //     test: /\.js$/,
            //     loader: "source-map-loader"
            // },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
                loader: 'url-loader?limit=1&name=/assets/imgs/[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest'] ,
            minChunks: Infinity
        }),
        new webpack.optimize.ModuleConcatenationPlugin()
    ]


};
//****__PROD__****//
var PROD_Config =merge(baseConfig,{
    output: {
        filename: '[name]_[hash].js',
        path: path.resolve(__dirname, '../dist')
    },
    module:{
        rules:[
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {importLoaders: 1}
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader:'sass-loader',
                            options: {
                                outputStyle: 'expanded',
                                sourceMap: true,
                                sourceMapContents: true
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            //判断当前是否处于开发状态
            __DEV__: JSON.stringify(false),
        }),
        new ExtractTextPlugin({filename:'assets/styles/[name]_[hash].bundle.css', allChunks: true}),
        new webpack.optimize.UglifyJsPlugin(), //最小化一切
        new webpack.optimize.AggressiveMergingPlugin(),//合并块
        new HtmlWebpackPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            // Host that will be used in `server` mode to start HTTP server.
            analyzerHost: '127.0.0.1',
            // Port that will be used in `server` mode to start HTTP server.
            analyzerPort: 8888,
            // Path to bundle report file that will be generated in `static` mode.
            // Relative to bundles output directory.
            reportFilename: 'report.html',
            // Module sizes to show in report by default.
            // Should be one of `stat`, `parsed` or `gzip`.
            // See "Definitions" section for more information.
            defaultSizes: 'parsed',
            // Automatically open report in default browser
            openAnalyzer: true,
            // If `true`, Webpack Stats JSON file will be generated in bundles output directory
            generateStatsFile: false,
            // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`.
            // Relative to bundles output directory.
            statsFilename: 'stats.json',
            // Options for `stats.toJson()` method.
            // For example you can exclude sources of your modules from stats file with `source: false` option.
            // See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
            statsOptions: null,
            // Log level. Can be 'info', 'warn', 'error' or 'silent'.
            logLevel: 'info'
        })

    ]
})
//****__DEV__****//
const DEV_Config=merge(baseConfig, {
    devtool: "inline-source-map",
    output: {
        filename: './dist/[name].js',
        path: path.resolve(__dirname,'..'),
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {importLoaders: 1}
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader:'sass-loader',
                        options: {
                            outputStyle: 'expanded',
                            sourceMap: true,
                            sourceMapContents: true
                        }
                    }
                ]
            },{
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
                loader: 'url-loader?limit=1&name=assets/imgs/[name].[ext]'
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            //判断当前是否处于开发状态
            __DEV__: JSON.stringify(true),
        }),
        new webpack.HotModuleReplacementPlugin(),
        //activates HMR
        new webpack.NamedModulesPlugin()

        //prints more readanpmble module names in the browser console on HMR updates
        // new ExtractTextPlugin({filename:path.join(config.dirname,'dist','bundle.css'), allChunks: true})
    ],
    devServer:{
        publicPath:'/',//bundle输出的伪路径相对于html
        inline:true,
        lazy:false,
        historyApiFallback: true,
        contentBase: config.dirname,
        //watchContentBase:'true',//是否监听ContentBase下的文件结构变化，默认为false，只监听现有文件变化，新增不监听，耗内存打慎用
        watchOptions:{
            aggregateTimeout:500
            //poll:1000,//自动刷新耗内存打不建议开
        }
    }
});
let webpackConfig=DEV_Config;
if (config.env===EnumEnv.PROD){
    webpackConfig=PROD_Config
}

module.exports = webpackConfig;
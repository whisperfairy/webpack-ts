/**
 *
 * config.js 确定项目结构相对路径
 * @author hurong<353486474@QQ.COM>
 * @date 2017/3/19
 *
 * @内容
 * @内容 作用
 */
var path = require('path');
const Environment={
    DEV:'development',
    PROD:'production'
};
var config = {
    "title": "人力资源管理系统",
    //默认生产环境
    "env": "DEV",
    "appName": "HR-REACT_STARTER",
    //项目根路径
    "dirname":path.join(__dirname,".."),
    'ClientDir':path.join(__dirname,'../src/Client/'),
    'ServerDir':path.join(__dirname,'../test'),
    //模板所在的目录
    "webpackDir":path.join(__dirname,"../webpack"),
    "viewDir": path.join(__dirname, '..','/src/Client/views'),
    //log所在的目录
    "logDir": path.join(__dirname, '..', '/src/Client/logs'),
    //静态文件所在的目录
    "staticDir": path.join(__dirname, '..','/src/Client/public')
};
//当NODE_ENV环境变量值为local时
//本地调试环境
console.log(path.resolve(config.dirname,"./webpack/index.html"));
if (process.env.NODE_ENV === Environment.PROD || process.env.NODE_ENV === 'PRODUCTION') {

    config.env=Environment.PROD;
}
console.log(config.ClientDir);
module.exports.config = config;
module.exports.Environment=Environment;
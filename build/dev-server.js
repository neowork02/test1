'use strict'
require('./check-versions')()

const args = process.argv
  .slice(2)
  .map(arg => arg.split('='))
  .reduce((args, [value, key]) => {
    args[value] = key;
    return args;
  }, {});

process.env.SOCKET_PORT = args.socketPort
const config = require('../config')

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const opn = require('opn')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = require('./webpack.dev.conf')

const port = process.env.PORT || config.dev.port
const autoOpenBrowser = !!config.dev.autoOpenBrowser
const proxyTable = config.dev.proxyTable

const app = express()
const compiler = webpack(webpackConfig)

//웹팩으로 빌드한 정적파일을 처리하는 express 스타일 미들웨어
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  //compiler 웹팩이 미들웨어 api호출
  publicPath: webpackConfig.output.publicPath,
  quiet: true 
})

//Local 개발시 Hot Deploy 설정시 주석해제함.
//const hotMiddleware = require('webpack-hot-middleware')(compiler, {
//  log: false,
//  heartbeat: 2000
//})
//app.use(hotMiddleware)

//proxy 사용설정
Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

//Vue Router와 Express 연동설정
//기본 Router설정인 hash mode에서 history mode로 사용할 경우
//Express 서버에서 history API를 사용하기 위한 설정
//뒤로가기, 새로고침 시 404 Not Found 오류 해결
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

//static path 설정
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var _resolve
var _reject
var readyPromise = new Promise((resolve, reject) => {
  _resolve = resolve
  _reject = reject
})

var server
var portfinder = require('portfinder')
portfinder.basePort = port

//server listen 설정
console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  portfinder.getPort((err, port) => {
    if (err) {
      _reject(err)
    }
    process.env.PORT = port
    var uri = 'http://localhost:' + port
    console.log('> Listening at ' + uri + '\n')
    
    //자동 브라우저 오픈 설정
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
      opn(uri)
    }
    server = app.listen(port)
    _resolve()
  })
})

if(config.dev.socketPort != "" && config.dev.socketPort !== "undefined") {
  console.log("get config socketPort : " + config.dev.socketPort);

  //socket : start
  const socketServer = app.listen(config.dev.socketPort, function() {
      console.log('socket server running on port ' + config.dev.socketPort);
  });
  const io = require('socket.io')(socketServer);

  io.on('connection', function(socket) {

      socket.on('SEND_MESSAGE', function(data) {
        console.log('socket get message ==' + data);
        io.emit('SOCKET_MESSAGE', data)
      });
  });
  //socket : end
}

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close(),
    socketServer.close()
  }
}

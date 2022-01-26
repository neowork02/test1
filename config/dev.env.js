'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

const args = process.argv
  .slice(2)
  .map(arg => arg.split('='))
  .reduce((args, [value, key]) => {
    args[value] = key;
    return args;
  }, {});

var socketPort = "";
if(args.socketPort != "" && args.socketPort != undefined) {
  socketPort = args.socketPort;
  
  var baseServer= 'http://mifs.kr.mil';
  var ipsServer = baseServer;
  var scsServer = baseServer;
  var iasServer = baseServer;
  var issServer = baseServer;
  var gdsServer = baseServer;

  if(args.ipsServer != undefined) {
    ipsServer = args.ipsServer;
  }
  if(args.scsServer!= undefined) {
    scsServer = args.scsServer;
  }
  if(args.iasServer!= undefined) {
    iasServer = args.iasServer;
  }
  if(args.issServer != undefined) {
    issServer = args.issServer;
  }
  if(args.gdsServer != undefined) {
    gdsServer = args.gdsServer;
  }

  module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    SOCKET_PORT: socketPort,
    IPS_SERVER: '"' + ipsServer + '"',
    SCS_SERVER: '"' + scsServer + '"',
    IAS_SERVER: '"' + iasServer + '"',
    ISS_SERVER: '"' + issServer + '"',
    GDS_SERVER: '"' + gdsServer + '"'
  })
} else {
  module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    SOCKET_PORT: '""',
    IPS_SERVER: '""',
    SCS_SERVER: '""',
    IAS_SERVER: '""',
    ISS_SERVER: '""',
    GDS_SERVER: '""'
  })
}

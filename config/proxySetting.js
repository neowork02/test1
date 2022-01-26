'use strict'

const args = process.argv
  .slice(2)
  .map(arg => arg.split('='))
  .reduce((args, [value, key]) => {
    args[value] = key;
    return args;
  }, {});

var baseServer = 'http://mifs.kr.mil';
var ipsServer = baseServer;
var scsServer = baseServer;
var iasServer = baseServer;
var issServer = baseServer;
var gdsServer = baseServer;
var cmmServer = baseServer;

if (args.ipsServer != undefined) {
  ipsServer = args.ipsServer;
}
if (args.scsServer != undefined) {
  scsServer = args.scsServer;
}
if (args.iasServer != undefined) {
  iasServer = args.iasServer;
}
if (args.issServer != undefined) {
  issServer = args.issServer;
}
if (args.gdsServer != undefined) {
  gdsServer = args.gdsServer;
}
if (args.cmmServer != undefined) {
  cmmServer = args.cmmServer;
}


const getIpsServer = () => ({
  target: ipsServer,
  changeOrigin: true,
  pathRewrite: { '^/ips': '' }
});

const getScsServer = () => ({
  target: scsServer,
  changeOrigin: true,
  pathRewrite: { '^/scs': '' }
});

const getIasServer = () => ({
  target: iasServer,
  changeOrigin: true,
  pathRewrite: { '^/ias': '' }
});

const getIssServer = () => ({
  target: issServer,
  changeOrigin: true,
  pathRewrite: { '^/iss': '' }
});

const getGdsServer = () => ({
  target: gdsServer,
  changeOrigin: true,
  pathRewrite: { '^/gds': '' }
});

const getCmmServer = () => ({
  target: cmmServer,
  changeOrigin: true,
  pathRewrite: { '^/cmm': '' }
});

module.exports = {
  '/ips': getIpsServer(),
  '/scs': getScsServer(),
  '/ias': getIasServer(),
  '/iss': getIssServer(),
  '/gds': getGdsServer(),
  '/cmm': getCmmServer(),
}




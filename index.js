// Server launch file (proxy server)
const express = require('express')
const app = express()
const proxy = require('express-http-proxy');
const httpProxy = require('http-proxy');

const odataProxy = httpProxy.createProxyServer({
  target: 'https://s35lp1.ucc.cit.tum.de:8100', secure: false
});

odataProxy.on('proxyReq', function (proxyReq, req, res, options) {
  // Force English via query parameter, English metadata has full annotations
  if (req.url.includes('sap-language=')) {
    req.url = req.url.replace(/sap-language=[^&]*/, 'sap-language=EN');
  } else {
    req.url += (req.url.includes('?') ? '&' : '?') + 'sap-language=EN';
  }

  proxyReq.setHeader('sap-client', '302');
  proxyReq.setHeader('sap-language', 'EN');
});

app.route('/sap/*$').all(function (req, res) {
  odataProxy.web(req, res);
});

app.use(express.static(__dirname));

// Route /resources/* to the SAPUI5 CDN
app.use('/resources/', proxy('sapui5.hana.ondemand.com/resources/', {
  https: true
}));

// Route /test-resources/* to the SAPUI5 CDN
app.use('/test-resources/', proxy('sapui5.hana.ondemand.com/sdk/test-resources/', {
  https: true
}));

app.listen(3000, () => console.log('Example app listening on port 3000!'))
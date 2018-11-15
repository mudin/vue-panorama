var nodeExternals = require('webpack-node-externals');

module.exports = {
  webpack: {
    externals: [
      nodeExternals(),
      {'leaflet': 'L'},
      {'leaflet-pathtransform': 'L.Path.Transform-src.js'}
    ]
  }
}
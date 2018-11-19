module.exports = {
  chainWebpack: config => {
    config.externals({
      'leaflet': 'leaflet'
    })
  }
};

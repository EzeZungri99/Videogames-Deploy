module.exports = {
    // Resto de la configuración de Webpack...
  
    module: {
      rules: [
        // Resto de las reglas...
  
        // Agrega esta regla para manejar los archivos SVG
        {
          test: /\.svg$/,
          use: [
            '@svgr/webpack',
            'url-loader'
          ]
        }
      ]
    }
  };
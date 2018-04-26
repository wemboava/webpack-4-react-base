const loaders = require('.config/loaders')

module.exports = {
    module: {
        rules: [
            ...loaders
        ]
    }
  }
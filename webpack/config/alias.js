'use strict'

const path = require('path')
    , src = path.join(__dirname, '../..', 'src')

module.exports = {
    '_root': path.join('../..', __dirname),
    '_src': src,
    '_npm': path.join(__dirname, '../..', 'node_modules'),
    
    '_assets': path.join(src, 'assets'),
    '_img': path.join(src, 'assets', 'images'),
    '_fonts': path.join(src, 'assets', 'fonts'),
    '_sass': path.join(src, 'assets', 'scss'),
    
    '_app': path.join(src, 'app'),
    '_common': path.join(src, 'app', 'common'),
    '_components': path.join(src, 'app', 'components'),
    '_routes': path.join(src, 'app', 'routes'),
    '_utils': path.join(src, 'app', 'utils'),
    '_view': path.join(src, 'app', 'view'),
    
    '_store': path.join(src, 'app', 'store'),
    '_actions': path.join(src, 'app','store', 'actions'),
    '_reducers': path.join(src, 'app', 'store', 'reducers')
}
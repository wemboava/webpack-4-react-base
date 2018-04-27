'use strict'

const path = require('path')
    , src = path.join(__dirname, '../..', 'src')

module.exports = {
    '_root': path.join('../..', __dirname),
    '_src': src,
    '_assets': path.join(src, 'assets'),
    '_img': path.join(src, 'assets', 'images'),
    '_fonts': path.join(src, 'assets', 'fonts'),
    '_scss': path.join(src, 'assets', 'scss'),
    '_npm': path.join(__dirname, '../..', 'node_modules')
}
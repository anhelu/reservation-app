if(process.env.MODE_DEV === 'production') {
  module.exports = require('./prod')
} else {
  module.exports = require('./dev')
}

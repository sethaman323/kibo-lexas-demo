const config = require('./config.js');

module.exports = {
  integrations: {
    kibo: {
      location: '@vue-storefront/kibocommerce-api/server',
      configuration: {
        api: {
          accessTokenUrl: config.get('accessTokenUrl'),
          clientId: config.get('clientId'),
          sharedSecret: config.get('sharedSecret'),
          apiHost: config.get('apiHost')
        }
      }
    },
    lexascms: {
      location: 'vsf-lexascms/server',
      configuration: {
        spaceId: '3605fbd1-1567-46fc-9303-0f70ce61bf34',
        apiKey: '737376ba-894d-49c1-a49c-96e112f1b669'
      }
    }
  }
};
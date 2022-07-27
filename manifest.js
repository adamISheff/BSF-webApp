module.exports = {
  environment: process.env.ENVIRONMENT || 'development',
  clients: {
    clientExample: {
      baseURL: process.env.CLIENTEXAMPLE_BASEURL || 'https://clientExample.com',
      username: process.env.CLIENTEXAMPLE_USERNAME || 'clientUser',
      password: process.env.CLIENTEXAMPLE_PASSWORD || 'password',
    },
  },
};

const http = require('http');

module.exports = {
  handler: async (event, context) => {
    const host = process.env['HTTP_ENDPOINT_SERVICE_HOST'];
    const data = await new Promise((resolve, reject) => {
      http
        .get(`http://${host}:80`, (resp) => {
          let data = '';

          // A chunk of data has been received.
          resp.on('data', (chunk) => {
            data += chunk;
          });

          // The whole response has been received. Print out the result.
          resp.on('end', () => {
            console.log(data);
            resolve(data);
          });
        })
        .on('error', (err) => {
          reject(err.message);
        });
    });
    return data;
  },
};

const http = require('http');

module.exports = {
  handler: async (event, context) => {
    const data = await new Promise((resolve, reject) => {
      http
        .get('http://10.96.166.48:80', (resp) => {
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

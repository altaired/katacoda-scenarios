With everything set up, we're ready to deploy our own function in the cluster. Like most serverless platforms, Kubeless supports several different programming languages, such as Javascript, Python, and Go. You can display the full list of supported runtimes with:

`kubeless get-server-config`{{execute}}

## The function

<pre class="file" data-filename="endpoint.js" data-target="replace">
const http = require('http');

module.exports = {
  handler: async (event, context) => {
    const host = process.env['HTTP_ENDPOINT_SERVICE_HOST'];

    const data = await new Promise((resolve, reject) => {
      http.get(`http://${host}:80`, (resp) => {
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
</pre>

We will now deploy our custom function.

Let's start by viewing the file `endpoint.js`, in which we have defined the code we want to be executed. You can see its content by running:

`cat endpoint.js`{{execute}}

### endpoint.js
The code in inside the file makes and awaits an http call to the service we just deployed. The URL used is `http-endpoint:80` since it is located in the default namespace, there is no need to specify it here.


## Deploy the function
We will now deploy the code in `endpoint.js`. This is done by the following command:

`kubeless function deploy endpoint --runtime nodejs14 \
                              --handler endpoint.handler \
                              --from-file endpoint.js`{{execute}}

To verify that the function was deployed we can use:

`kubeless function ls`{{execute}}

We can then call it with:

`kubeless function call endpoint`{{execute}}




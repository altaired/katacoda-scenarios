With everything set up, we're ready to deploy our own function in the cluster. Like most serverless platforms, Kubeless supports several different programming languages, such as Javascript, Python, and Go.

`kubeless get-server-config`{{execute}} will show you a full list of supported runtimes.

## The function

In our case, we will write our function in Javascript. Save the following script with the name `endpoint.js` (press Copy to Editor to quickly add it in your workspace):

<pre class="file" data-filename="endpoint.js" data-target="replace">
const http = require('http');

module.exports = {
  handler: async (event, context) => {
    // Get the IP of http-endpoint
    const host = process.env['HTTP_ENDPOINT_SERVICE_HOST'];

    const data = await new Promise((resolve, reject) => {
      // Send a GET request to http-endpoint
      http.get(`http://${host}:80`, (resp) => {
        let data = '';

        // Part of the response is received
        resp.on('data', (chunk) => {
          data += chunk;
        });

        // The response has finished: log to the console
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

The scripts exports a single function `handler`. The function is rather simple: it sends a GET request to the `http-endpoint` that we defined in the previous step. The returned response is logged to the console.

## Deploy the function

Now that we have our file containing the function, it can be deployed to the cluster using the following command:

`kubeless function deploy endpoint \
        --runtime nodejs14 \
        --handler endpoint.handler \
        --from-file endpoint.js`{{execute}}

As you can see we give the function a name and simply tell it what runtime and function to deploy.

This creates a deployed function from our file `endpoint.js` with the name `endpoint`; node.js 14 will be used as the runtime, and the exported `endpoint.handler` will respond to events.

To see the status of the deployment, we can use:

`kubeless function ls endpoint`{{execute}} this will show the function we just deployed

When the status is `READY`, we can try calling it with:

`kubeless function call endpoint`{{execute}} this will print the returned value of the function when completed.

The output we get is the returned data from the function. If we want to see the logged output we can use `kubeless function logs endpoint`{{execute}}.

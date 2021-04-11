We will now deploy and schedule out custom function.

Let's start by viewing the file `endpoint.js`, in which we have defined the code we want to be executed. You can see its content by running:

`cat endpoint.js`{{execute}}

### endpoint.js
The code in inside the file makes and awaits an http call to the service we just deployed. The URL used is `http-endpoint:80` since it is located in the default namespace, there is no need to specify it here.


## Deploy the function
We will now deploy the code in `endpoint.js`. This is done by the following command:

`kubeless function deploy hello --runtime nodejs6 \
                              --handler endpoint.handler \
                              --from-file endpoint.js`{{execute}}

To verify that the function was deployed we can use:

`kubeless function ls`{{execute}}



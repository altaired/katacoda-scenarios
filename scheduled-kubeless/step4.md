We will now deploy and schedule out custom function.

Let's start by opening the file `endpoint.js`{{open}}, in which we have defined the code we want to be executed.

### endpoint.js
The code in inside the file makes and awaits an http call to the service we just deployed. The URL used is `http-endpoint:80` since it is located in the default namespace, there is no need to specify it here.


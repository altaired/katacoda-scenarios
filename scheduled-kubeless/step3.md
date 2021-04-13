Next we'll create another kubernetes deployment with an http endpoint that we can call from the _Kubeless function_.

For this we will use a pre made docker image by _katacoda_ called _docker-http-server_. The http server exposes single endpoint returning the name of the host it is beeing executed on, like follows:

`<h1>This request was processed by host: ...</h1>`

## Deployment

Let's create a deployment on our cluster with the image, by executing this command

`kubectl create deployment http-endpoint --image=katacoda/docker-http-server`{{execute}}

We can verify that everything went well by listing the pods in the cluster, use `kubectl get pods`{{execute}} to do this.


You should see that there is one pod running prefixed http-endpoint.

## Service

We will now expose this deployment with a service, so that we're not dependent on a single pod. Since we will only access the service inside of our cluser, we'll use the type ClusterIP. This exposes the service through an internal IP-address. We will also specify that the traffic should enter on port *80*. To expose the service we'll use the following command:

`kubectl expose deployment http-endpoint --port=80 --type=ClusterIP`{{execute}}


Before continuing to the next step, let's make sure everything is running with the command:
`kubectl get all`{{execute}} which will list all components in the cluster. Check that both the deployment and service are ready.





Next, we'll create another Kubernetes deployment with an HTTP endpoint that we can call from our Kubeless function.

For this, we will use a pre-made docker image by Katacoda, called [docker-http-server](https://hub.docker.com/r/katacoda/docker-http-server). The HTTP server exposes single endpoint that returns the name of the host it is being executed on, as follows:

`<h1>This request was processed by host: ...</h1>`

## Deployment

Let's create a deployment on our cluster with the image, by executing this command

`kubectl create deployment http-endpoint --image=katacoda/docker-http-server`{{execute}}

The command creates a deployment called `http-endpoint` using the image `katacoda/docker-http-server`.

The deployment should create one _pod_ in our cluster, we can see this pod by listing all pods, use `kubectl get pods`{{execute}} to do this.

You should see that there is one pod running with the prefix `http-endpoint`.

## Service

We will now expose this deployment with a [service](https://kubernetes.io/docs/concepts/services-networking/service/). Since we will only access the service inside of our cluster, we'll use the type ClusterIP. This exposes the service through an internal IP-address. We will also specify that the traffic should enter on port *80*. To expose the service we'll use the following command:

`kubectl expose deployment http-endpoint --port=80 --type=ClusterIP`{{execute}}


Before continuing to the next step, let's make sure our deployment was exposed properly by listing all services with
`kubectl get services`{{execute}}, make sure that there is a service in the output of type `ClusterIP` for the `http-endpoint`.


We'll now create another kubernetes deployment and service which we will call from the schedules _Kubeless_ function.

We will use a basic http server docker image made by _Katacoda_ which exposes an endpoint that simply returns what node it is running on.

Let's create the container with the docker image by running the following command:

`kubectl create deployment http-endpoint --image=katacoda/docker-http-server`{{execute}}

The status of the deployment can be discovered via the running Pods -
`kubectl get pods`

When we see that the pod is running, we'll start exposing the deployment as a service. This is done by running:
`kubectl expose deployment http-endpoint --port=80 --type=NodePort`{{execute}}

The service will be of type *NodePort*, meaning that...

Before continuing, let's make sure everything is running by running:
`kubectl get all`{{execute}} and checking that both the deployment and service is ready



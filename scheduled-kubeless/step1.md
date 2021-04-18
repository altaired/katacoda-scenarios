On your right is a terminal that we've set up with a Kubernetes cluster. This cluster will be used throughout this tutorial. We expect you to have some knowledge about Kubernetes before doing this tutorial, and know about common concepts, such as clusters, services, and deployments. If you're completely unfamiliar with Kubernetes, we suggest you read up on it beforehand. At the bottom of this page, you can find links to two great tutorials on Kubernetes.

## Setup

The first step of this tutorial is to start up the Kubernetes cluster. It is done automatically, but it takes some time.

You can use `launch.sh`{{execute}} to check the progress. The command should print `Kubernetes started` when the cluster is ready.

Let's make sure everything is working by running `kubectl cluster-info`{{execute}}, which will tell you if and where the cluster is running.

Once the cluster is ready, you are ready continue to the next step.

## Kubernetes tutorial recomendations

[What is Kubernetes](https://www.youtube.com/watch?v=VnvRFRk_51k&list=PLy7NrYWoggjziYQIDorlXjTvvwweTYoNC&index=1&ab_channel=TechWorldwithNana)

[Kubernetes Components explained](https://www.youtube.com/watch?v=Krpb44XR0bk&list=PLy7NrYWoggjziYQIDorlXjTvvwweTYoNC&index=2&ab_channel=TechWorldwithNana)

According to their [website](https://kubeless.io/), Kubeless is a "Kubernetes-native serverless framework".

## What is Kubernetes?

[Kubernetes](https://kubernetes.io/) is a platform that automates Linux container operations. It eliminates a great part of the manual processes involved in deploying and scaling containerized applications. With it you can you can cluster together groups of hosts running Linux containers, and Kubernetes helps you easily and efficiently manage these.

On your right is a terminal that we've set up with a Kubernetes cluster. This cluster will be used throughout this tutorial. We expect you to have knowledge about Kubernetes before doing this tutorial, meaning, you should know about common Kubernetes concepts, such as clusters, services, and deployments. If not, you'll find some resources to get you started at the bottom of this page.


## What is serverless?

[Serverless](https://www.serverless.com/) is a framework in which machine resources are managed by the cloud provider and allocated based on demand. Of course, servers are still used in this process, but they are abstracted away by the platform, such that the developer can focus on the actual code, without having to worry about the infrastructure.

Serverless often takes the shape of *Function as a Service* (FaaS), in which small bits of code can be deployed (so-called *functions*), which can respond to triggers from the environment (e.g., HTTP requests or a schedule). Example cloud offerings of FaaS are [AWS Lambda](https://aws.amazon.com/lambda/), [Google Cloud Functions](https://cloud.google.com/functions), and [Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview).


## What is Kubeless?

[Kubeless](https://kubeless.io/) is an open-source FaaS framework that enables deploying serverless functions to a Kubernetes cluster, without having to worry about the exact components that come into play.

Because Kubeless runs on Kubernetes, it makes it possible to keep away from the public cloud providers, and instead run the functions on your own (private cloud) infrastructure, while still supporting important features such as autoscaling.

In this tutorial, we will start with the basics: deploying a simple function to the cluster. Then, we'll take a closer look at the cronjob trigger, allowing us to call the deployed function according to a schedule.

In the next step, we will start by installing Kubeless on the running cluster.


## Documentation

[Kubeless Documentation](https://kubeless.io/docs/)

[Serverless Framkework Documentation](https://www.serverless.com/framework/docs/)


### Kubernetes tutorial recomendations (not part of this tutorial)

_If you're completely unfamiliar with Kubernetes, we suggest you read up on it beforehand. Below, you will find a link to a playlist of great tutorials on Kubernetes, altough this is not part of this tutorial, its only a recomendation of good tutorials for learning about Kubernetes, that we used to get started and thought we should share_.

[Complete Kubernetes Tutorial for Beginners](https://www.youtube.com/playlist?list=PLy7NrYWoggjziYQIDorlXjTvvwweTYoNC)


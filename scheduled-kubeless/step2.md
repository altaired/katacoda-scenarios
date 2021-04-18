According to their website, Kubeless is a "Kubernetes-native serverless framework".

## What is serverless?

Serverless is a framework in which machine resources are managed by the cloud provider and allocated based on demand. Of course, servers are still used in this process, but they are abstracted away by the platform, such that the developer can focus on the actual code, without having to worry about the infrastructure.

Serverless often takes the shape of *Function as a Service* (FaaS), in which small bits of code can be deployed (so-called *functions*), which can respond to triggers from the environment (e.g., HTTP or cronjob). Example cloud offerings of FaaS are _AWS Lambda_, _Google Cloud Functions_, and _Azure Functions_.

## What is Kubeless?

Kubeless is an open-source FaaS framework that enables deploying serverless functions to a Kubernetes cluster, without having to worry about the exact components that come into play.

Because Kubeless runs on Kubernetes, it makes it possible to keep away from the public cloud providers, and instead run the functions on your own (private cloud) infrastructure, while still supporting important features such as autoscaling.

In this tutorial, we will start with the basics: deploying a simple function to the cluster. Then, we'll take a closer look at the cronjob trigger, allowing us to call the deployed function according to a schedule.

In the next step, we will start by installing Kubeless on the running cluster.


## Documentation
[Kubeless Documentation](https://kubeless.io/docs/)

[Serverless Framkework Documentation](https://www.serverless.com/framework/docs/)

_Kubeless_ is "serverless" framework for _Kubernetes_ that allows you small bits of code without having to worry about setting up an infrastructure. This means that instead of having to create a server for your code, you can simply pass it the function and _Kubeless_ will take care of the rest. The concept is very similar to services such as _Google Cloud Functions_ and _AWS Lambda_. _Kubeless_ also supports different ways of triggering the deployed functions, in this tutorial we will take a closer look on their cronjob trigger, allowing us to call a function on a certain schedule.


The next step is to install _Kubeflow_, as it's designed to be deployed on a _Kubernetes_ cluster, it is easy to setup by simply fetching a yaml configuration they provide.


## Documentation
[Kubeless docs](https://kubeless.io/docs/)
We'll now install kubeless, which is ....

## Task

Let's start by setting up kubeless

Before changing anything in our cluster, let's create a new _Kubernetes namespace_ to easily keep track of our Kubeless deployments.
This is done with the following command:

`kubectl create ns kubeless`{{execute}}

In order setup kubeless in our kubernetes cluser, we can use a provided yaml file from _Kubeless_.
This will create all required kubernetes components for us, do it by running this command:

`kubectl create -f https://github.com/kubeless/kubeless/releases/download/v1.0.8/kubeless-non-rbac-v1.0.8.yaml`{{execute}}

Let's see what's been created by getting all components in the _kubeless_ namespace:

`kubectl get all -n kubeless`{{execute}}



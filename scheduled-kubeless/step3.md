Now that the Kubernetes cluster is set up, we're ready to setup Kubeless.


## Installation

Kubeless can be installed by following the following two part process.
We'll first setup kubeless in our Kubernetes cluster, then we'll install the accompanying CLI tool.

### Setup Kubeless

Then, we're ready to set up the Kubernetes cluster for use with Kubeless. First, we will create the namespace `kubeless` to easily keep track of our Kubeless deploments, using the following command:

`kubectl create ns kubeless`{{execute}} which will create a namespace called kubeless in the cluster.

Next, we can use a config file provided by Kubeless, which will create all components that are necessary for running functions on the cluster:

`kubectl create -f https://github.com/kubeless/kubeless/releases/download/v1.0.8/kubeless-non-rbac-v1.0.8.yaml`{{execute}} by applying the configuration file which specifies all the necceary components that Kubernetes should create, instead of entering a bunch of commands manually.

Among the components kubeless creates is a service, we can make sure this was successfully created by listing the services in our `kubeless` namespace:

`kubectl get all -n kubeless`{{execute}}. The output of this command should show that three *pods*, one *deployment*, and one *replicaset* have been created for the Kubeless controller.

### Install the CLI

Finally, we need to install the command-line interface (CLI) of Kubeless. Like the config file, this binary is available through GitHub, and can be downloaded, unzipped, and moved to a directory in the $PATH using these commands:

1. Download the source: `curl -OL https://github.com/kubeless/kubeless/releases/download/v1.0.8/kubeless_linux-amd64.zip`{{execute}}
2. Unzip the downloaded source: `unzip kubeless_linux-amd64.zip`{{execute}}
3. Move it to a folder in your $PATH: `sudo mv bundles/kubeless_linux-amd64/kubeless /usr/local/bin/`{{execute}}

The Kubeless installation is now complete: you're ready for the next step!

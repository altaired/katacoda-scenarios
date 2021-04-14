Now that the Kubernetes cluster is set up, we're ready to install Kubeless.

## What is Kubeless?

Kubeless is ...

## Installation

Kubeless can be installed by following the following steps.

### Find the latest version

First, we need to find out what the latest available version of Kubeless is. We can fetch it from GitHub and store it in the environment variable `RELEASE` (which will be used in the next steps) by running the following command:

`export RELEASE=$(curl -s https://api.github.com/repos/kubeless/kubeless/releases/latest | grep tag_name | cut -d '"' -f 4)`{{execute}}

Now, running `echo $RELEASE`{{execute}} should show the latest version of the tool (e.g., `v1.0.8`).

### Set up Kubernetes

Then, we're ready to set up the Kubernetes cluster for use with Kubeless. First, we will create the namespace `kubeless` to easily keep track of our Kubeless deploments, using the following command:

`kubectl create ns kubeless`{{execute}}

Next, we can use a config file provided bye Kubeless, which will create all components that are necessary for running functions on the cluster:

`kubectl create -f https://github.com/kubeless/kubeless/releases/download/v1.0.8/kubeless-non-rbac-v1.0.8.yaml`{{execute}}

Let's see what's been created by listing all components in the `kubeless` namespace:

`kubectl get all -n kubeless`{{execute}}

### Install the CLI

Finally, we need to install the command-line interface (CLI) of Kubeless. Like the config file, this binary is available through GitHub, and can be downloaded and unzipped using this command:

`curl -OL https://github.com/kubeless/kubeless/releases/download/$RELEASE/kubeless_linux-amd64.zip && \
  unzip kubeless_linux-amd64.zip && \
  sudo mv bundles/kubeless_linux-amd64/kubeless /usr/local/bin/
`{{execute}}

The Kubeless installation is now complete: you're ready for the next step!

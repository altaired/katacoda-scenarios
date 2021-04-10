We'll now install kubeless, which is ....

## Task

Install kubeless, by using the following command

`curl -OL https://github.com/kubeless/kubeless/releases/download/$RELEASE/kubeless_$OS-amd64.zip && \
  unzip kubeless_$OS-amd64.zip && \
  sudo mv bundles/kubeless_$linux-amd64/kubeless /usr/local/bin/
`{{execute}}

In order to easily use kubeless we'll also need the _Kubeless CLI_.

First we create a new _Kubernetes namespace_ to easily keep track of our Kubeless deployments. This is done with this command

`kubectl create ns kubeless`{{execute}}

Then we'll install the cli, by running the following command

`kubectl create -f https://github.com/kubeless/kubeless/releases/download/v1.0.8/kubeless-non-rbac-v1.0.8.yaml`{{execute}}


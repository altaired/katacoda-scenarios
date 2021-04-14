You've now deployed both a service on _Kubernetes_ and a serverless function using _Kubeless_. You've also learnt how to communicate on a schedule by http between the two. This is usefull, e.g when you wan't do scheduled backups a.s.o, it let's you avoid having to use external scheduling services or to deploy a separte server for it, you simply deploy the function instead. Since everything is built on _Kubernetes_ it is very easy to scale, you can easily add more relicas in the deployment and _Kubeless_ also offers an autoscaling feature that takes care of the scaling (within set limits) for you. Other than the cronjob trigger, there are many cool features that _Kubeless_ offers, check out their documentation to learn more.

*Thank you for your time!*


## Documentation links

[Kubernetes documentation](https://kubernetes.io/docs/home/)


[Kubeless documentation](https://kubeless.io/docs/)
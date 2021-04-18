You've now deployed both a service on Kubernetes and a serverless function using Kubeless. You've also learnt how to communicate on a schedule by HTTP between the two. This is useful, for example when you wan't do scheduled backups, it lets you avoid having to use external scheduling services or to deploy a separate server for it; you simply deploy the function instead. Since everything is built on Kubernetes it is very easy to scale, you can easily add more replicas in the deployment and Kubeless also offers an autoscaling feature that takes care of the scaling (within set limits) for you. Other than the cronjob trigger, there are many cool features that Kubeless offers; check out their documentation to learn more.

*Thank you for your time!*


## Documentation links

[Kubernetes Documentation](https://kubernetes.io/docs/home/)


[Kubeless Documentation](https://kubeless.io/docs/)


## Easter egg
Psst. Did you find the easter egg? If not, make sure you go back and ask `what-to-do`

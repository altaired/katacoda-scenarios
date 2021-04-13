## You've made it

You've now created a kubernetes cluster with two services, where one is a scheduled function that calls the other. Before we leave, we'll delete the cronjob we created. It is not mandatory as this is just a VM that will be trashed when you close this tab, but it's good to know how to remove the cronjob properly.

## It's time for chores
In order to call the function on a schedule we used a trigger of type cronjob, to see the current cronjob triggers run:

`kubeless trigger cronjob list`{{execute}}

To remove the cronjob trigger we will use the following command:

`kubeless trigger cronjob delete cron-endpoint`{{execute}}


Congratulations!




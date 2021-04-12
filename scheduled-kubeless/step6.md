## Congratulations, you've made it

## It's time for chores
Before leaving we wan't to stop the scheduled function, we could leave it as it is, but then we'll not learn how to manage the scheduled service we just created.

Let's first list our cronjob triggers by running:

`kubeless trigger cronjob list`{{execute}}

To remove the cronjob trigger we will use the following command:

`kubeless trigger cronjob delete cron-endpoint`{{execute}}




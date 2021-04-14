With the function deployed and able to respond to events, we are ready to run it according to a schedule.

Scheduled every minute


## Create a cronjob

The cronjob for our function can be created by running the following command:

`kubeless trigger cronjob create cron-endpoint \
        --function endpoint \
        --schedule "* * * * *"`{{execute}}

This command creats a trigger of the `cronjob` type with the name `cron-endpoint`. Of course, we would like to trigger our function `endpoint`. The cronjob scheduling `* * * * *` ensures that the cronjob is run every minute.


## Wait a minute!

Because our cronjob runs every minute, we need to wait a little before its results are visible. So why not learn some interesting facts below while waiting:

<iframe style="width: 700px;height: 400px;" src="https://www.youtube-nocookie.com/embed/zhWDdy_5v2w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



## Check the log

The following command can be used to check the logs of the function:

`kubeless function logs endpoint`

Every minute, as a result of our cronjob, an entry should be added to these logs that shows that the function has run, including its output.

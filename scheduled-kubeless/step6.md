With the function deployed and able to respond to events, we are ready to run it according to a schedule using a cronjob.

## What is cron?

*cron* is a utility that allows users to run commands periodically according to a certain schedule.

Items in the cron schedule (jobs) consist of 5 numbers, together with the command to run. These numbers denote the minute, hour, day of the month, month, and day of the week, at which the job should run. For example:

`0,30 * * 1 * /usr/bin/command`

Means that `/usr/bin/command` will be run at minute `0` and `30` of every hour (an asterix denotes a wildcard) when the month is January (`1`). For more information about cron and its syntax, check out the link at the bottom of the page.

## Create a cronjob

The cronjob for our function can be created by running the following command:

`kubeless trigger cronjob create cron-endpoint \
        --function endpoint \
        --schedule "* * * * *"`{{execute}}

This command creats a trigger of the `cronjob` type with the name `cron-endpoint`. Of course, we would like to trigger our function `endpoint`. The cronjob scheduling `* * * * *` ensures that the cronjob is run every minute.

## Wait a minute!

Because our cronjob runs every minute, we need to wait a little before its results are visible.

<iframe style="width: 700px;height: 400px;" src="https://www.youtube-nocookie.com/embed/zhWDdy_5v2w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Check the log

The following command can be used to check the logs of the function:

`kubeless function logs endpoint`

Every minute, as a result of our cronjob, an entry should be added to these logs that shows that the function has run, including its output.

## Cron information recommendations

[Beginners Guide To Cron Jobs](https://ostechnix.com/a-beginners-guide-to-cron-jobs/)

[Crontab.guru: a cron expression editor](https://crontab.guru/#*_*_*_*_*)

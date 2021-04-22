With the function deployed and able to respond to events, we are ready to run it according to a schedule using a cronjob.

## What is cron?

*cron* is a Linux/Unix utility that allows users to run commands periodically according to a certain schedule.

Items in the cron schedule (jobs) consist of 5 numbers, together with the command to run. These numbers denote the minute, hour, day of the month, month, and day of the week, at which the job should run. For example, adding the following line to the crontab (a cron schedule file):

`0,30 * * 1 * /path/to/executable`

Means that the executable will be run at minute `0` and `30` of every hour (an asterix denotes a wildcard) when the month is January (`1`). For more information about cron and its syntax, check out the links at the bottom of the page.

## Create a cronjob

Kubeless has it's own scheduling mechanism that uses cron's notation for selecting the time. The cronjob for our function can be created by running the following command:

`kubeless trigger cronjob create cron-endpoint \
        --function endpoint \
        --schedule "* * * * *"`{{execute}}

This command creats a trigger of the `cronjob` type with the name `cron-endpoint`. Of course, we would like to trigger our function `endpoint`. The cronjob scheduling `* * * * *` ensures that the cronjob is run every minute.


## Wait a minute!

Because our cronjob runs every minute (the minimum time of a cron schedule), we need to wait a little before its results are visible. So why not learn some interesting facts below while waiting:

<iframe style="width: 700px;height: 400px;" src="https://www.youtube-nocookie.com/embed/zhWDdy_5v2w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In case you feel that you know everything there is to know already or are not a fan of videos, you can always ask `what-to-do`{{execute}} (rumors says that bash is a VIM user, it especially likes the keys `h j k l`).


## Check the log

The following command can be used to print the logs of the function:

`kubeless function logs endpoint`{{execute}}

Every minute, as a result of our cronjob, an entry should be added to these logs that shows that the function has run, including its output.

## Cron information recommendations

[Beginners Guide To Cron Jobs](https://ostechnix.com/a-beginners-guide-to-cron-jobs/)

[Crontab.guru: a cron expression editor](https://crontab.guru/#*_*_*_*_*)

[cron — Linux manual page](https://www.man7.org/linux/man-pages/man8/cron.8.html)

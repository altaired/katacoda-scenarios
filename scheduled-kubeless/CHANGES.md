# Changes based on feedback

## Overall

We've changed the estimated time. We must have miscalculated it and the 25 minutes might have been, as you said, because you were novices, but after timing ourselves, we believe 15-20 minutes is a better estimate.

## Step 1 (previously step 2)

We changed the order, to make the first page contain all information, and furthermore added some basic information about Kubernetes.

We no longer mention cronjob in the serverless section (for people not familiar with what it is). We do mention it in the Kubeless section (like before), just as a mention of what is coming.

We've added links to sources/documentations of the services we introduce to make it more clear where to find more information.


## Step 2 (previously step 1)

We've improved the explanations of what the commands do and what to expect when you run them. 

We've rewritten the tutorial recomendation, we now make it clear that it is merely a recomendation of good tutorials that we found usefull ourselfs and that they are not part of the tutorial. It now also includes a link to the playlist instead of the individual tutorials.


## Step 3

We separated the one command that executed three things (downloading, unzipping and moving to `/usr/bin`) into three different commands, to make it clearer what every step does.

Instead of using the `$RELEASE` variable, we hard-coded the latest version `v1.0.8`.

## Step 4

Fixed the typo cluser -> cluster and rephrased a sentances to make them even clearer.

## Step 5

Added note about the waiting time for deployment. The time it takes is very inconsistent, sometimes it is almost instant and sometimes it takes a while.

Added note about network knowledge beeing useful in the introduction.

## Step 6

We added that cron is a Unix/Linux tool, and that Kubeless uses its own scheduling mechanism that is based on cron's notation. Furthermore, we added a link to the cron man page. (Thank you for the tip!)

We've rephrased `/usr/bin/command` to make it more clear and to show its purpose. 

## Step 7

We do have a link and text when you complete the tutorial that suggests you to look into Kubeless autoscaling (a slightly more advanced concept, building on this tutorial), with a link to a page showing how to do it. Hence, we've not changed this.





# Changes based on feedback

## Overall

We changed the estimated time from 10-15 to 15-20 minutes.

## Step 1 (previously step 2)

We changed the order, to make the first page contain all information, and furthermore added some basic information about Kubernetes.

We no longer mention cronjob in the serverless section (for people not familiar with what it is). We do mention it in the Kubeless section (like before), just as a mention of what is coming.

## Step 2 (previously step 1)


## Step 3

We separated the one command that executed three things (downloading, unzipping and moving to `/usr/bin`) into three different commands, to make it clearer what every step does.

Instead of using the `$RELEASE` variable, we hard-coded the latest version `v1.0.8`.

## Step 4

Fixed typo cluser -> cluster.

## Step 5


## Step 6

We added that cron is a Unix/Linux tool, and that Kubeless uses its own scheduling mechanism that is based on cron's notation. Furthermore, we added a link to the cron man page.

We changed `/usr/bin/command` to `/path/to/executable` to make the syntax more clear.

## Step 7

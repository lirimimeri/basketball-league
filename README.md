# basketball-league

Basketball-league is an full-stack app, that 
 - Displays the league standing of backetball league of Kosova
 - All basketball lovers can chat with each other without login.


## How to start app 

- First, you should navigate to server folder, and execute the index.js file, by typing:
```bash
node index.js
```
(because is a written in NodeJs)

- You should navigate to client folder, and opening index.html file in this directory.

## How to use 

After the app starts, you should create a topic by typing a topic (ex. chat) and click the Create Topic button.
Then you shuld Subscribe that topic to be able to send and read the messages.

Once the topic is created, other clients just need to subscribe that topic, by typing that topic (ex. chat), then click the subscribe button.
Now, you will be able to send and receive text messages, also, by clicking the "Record" button you will start a video call.

If you have an addmin account (auth is done with Bearer token), you can add matches with score, at any week, the league standing will change automaticually after presing submit button.

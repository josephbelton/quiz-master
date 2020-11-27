# quiz master

## To Set Up and Run locally

### Set Up
1: clone the repository: ```git clone git@github.com:josephbelton/quiz-master.git```

2: ensure you have mongodb installed by following the guide: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

3: test mongodb is installed by running: ```mongo``` in your terminal

4: to create the ```quiz``` databse run: ```use quiz``` in your mongo shell

### Run locally
1: create 2 terminals
2: cd into them respectively: 
- (in terminal 1: 
```cd quiz-master/```
then: ```cd frontend/```)
- (in terminal 2: ```cd quiz-master/``` then: ```cd backend/```)

3: run ```yarn``` in both terminals

4: run ```yarn start``` in both terminals

5: open a seperate terminal and ```cd backend/``` followed by ```yarn seed``` to seed the database (the backend must be running for this to work)

6: navigate to http://localhost:3000 and login with the following credentials:
- username: ```jason``` password: ```password``` for the restricted user
- username: ```brett``` password: ```password``` for the viewer user
- username: ```barry``` password: ```password``` for the editor user

## To run the automated tests

1: ensure you have the latest chrome version https://support.google.com/chrome/answer/95414?co=GENIE.Platform%3DDesktop&hl=en

2: ensure the frontend and backend are running

3: in a seperate terminal cd into the frontend ```cd frontend/```

4: run ```yarn test``` (the frontend and backend must be running for this to work)

5: if all is well you should see the tests running in seperate chrome windows

6: to see the results of the tests once they have completed check the terminal

7: hopefully if all is well you should see the tests passing (you can now close the test chrome windows)



# HW-13-Friend-Finder
Dating app that will take in results from your users' survey and compare answers from other users. Will display the name and picture of the user with the best overall match.

## Live Link
- https://benjinchang.github.io/HW-13-Friend-Finder/

## Description on how to use the app
User will answer 10 questions of their choosing. Each question will be answered on a scale of 1 to 5 based on how much the user agrees or disagrees with a question. User will then be matched with the most compatible friend.

## Requirements
- Have data structure follow in the following format
-FriendFinder
	- app
		- data
			- friends.js
		- public
			- home.html
			- survey.html
		- routing
			- apiRoutes.js
			- htmlRoutes.js
	- node_modules
	- package.json
	- server.js

- Create 10 questions for user to answer for compatibility
- Have a server.js file for the basic npm packages used. (express, body-parser, path)
- Have a htmlRoutes.js that contains two routes 
1. A get route to /survey that displays the survey page 
2. default use route that leads to home.html which displays the home page
- Have an apiRoutes.js file that contains two routes
1. A get route to /api/friends that displays a JSON of all possible matches
2. A post routes /api/friends that will handle incoming survey results. This route will also handle the compatibility logic
- Save data in the app in an array of objects

## Technologies Used
- HTML
- CSS
- Javascript
- Bootstrap
- NPM
- Node
- Node Express

## Code Explaination
User will be asked a 10 question survey to fill out. Responses will be saved into a mysql database. User will answer from 1 to 5. Response will be saved as an array of object.

server.js will require the specified npm packages needed for this application
htmlRoutes.js will route client to the specific html page
apiRoutes.js will route to friends page to display all the possible friends. Will also handle the new friend entries made

Determine the most compatible friend by comparing the differences from other users question by question. Differences will then be added up to calculate the total difference. Users with the lowest difference will be match

Match will be displayed on the client for the user

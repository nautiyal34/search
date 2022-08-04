## Description:

Search application with a client server architecture.
When the user type react make call to server (Express) by passing user input as query param
Express server filters the response based on the user input
React shows the response in search component as type ahead

## Scripts:

Notes: - for simplicity I have kept server and client in single repo.

Consumer can start both the project with single common at root folder

### `npm install`
This will install both client and server dependancies 

### `npm start`
This will start client app on 3000 and express server on 3001 

## Time Taken:

6-8 hours

## Technologies Used:

- ReactJS
- NodeJS
- HTML
- CSS

### Front End:

Its created using create-react-app

cd client/search-app

### Back End

simple express server 4.18.1

cd server
  

## Areas of Improvement :-

AbortController or canCellToken implementation can be added :- as on type UI will multiple calls to server it can overload the system, we can imeplement AbortController feature for axios 

Unit test case on client and server are yet to be added 

dockerise search app, we can implement docker-compose that can run both server and client 









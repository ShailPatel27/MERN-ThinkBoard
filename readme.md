<h1 align="center">ThinkBoard - A Note App<h1>

### [Roadmap/chart For ThinkBoard](https://app.eraser.io/workspace/GlhY2F7ltehsjZ2z9phZ)

---

## Backend Setup:

```
cd ./backend/
```
change cd to backend to install package.json in it

<br>

```
npm init -y
```
installs a package.json

<br>

```
npm install express@4.18.2
```
install an older version(same as video) so that things dont break

<br>

```
type="module"
```
- add this is package.json so that you can use regular imports
- default is type="commonjs" and you will have to import like this 
- const express = require("express");

<br>

```
npm install nodemon -D
```
for auto updating servers while coding

<br>

```
"dev": "nodemon server.js"
```
- change these values so that when you perform npm run dev, it does node server.js
- original-     "test": "echo \"Error: no test specified\" && exit 1"

<br>

```
"start": "node server.js"
```
add in package.json to start the server after it is deployed

<br>

```
npm i mongoose@8.14.3
```
go with a fixed version to prevent errors

<br>

```
npm i dotenv@16.5.0
```
to use environment variables in the .env file for secure variables like keys or passwords

<br>

```
npm i @upstash/ratelimit@2.0.5
```
for rate limiting

<br>

```
npm i @upstash/redis@1.34.9
```
for json format fast database

---

## Frontend Setup:
We will use vite for react since it is much faster and provides better UX

<br>

```
cd ./frontend/
npm create vite@latest .
// . to select current folder(frontend)
// select React and JavaScript

npm install
npm run dev

npm i react-router
```

<br>

```
npm i react-hot-toast
```
For notifications

<br>

```
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```
install tailwind 

<br>

```
npm i daisyui@4.12.24 -D
```
- daisyui for better and easier tailwind classes handling
- it has a must see website, I really liked it

<br>

```
npm i lucide-react
```
for icons

<br>

```
npm i axios
```
to replace fetch API with axios

<br>

```
npm i cors@2.8.5
```
- Cross-Origin Resource Sharing allows resources to be shared from different places
- we will use it here to remove an error
- If you have 2 different domains, a cors error will appear
- Here we have localhost:5001 for backend and localhost:5173 for frontend

<br>

https://bg.ibelick.com/
for background

---

## Publishing The App:

```
.gitignore
```
drag .gitignore from frontend to root folder and add .env file

<br>

```
git init
```
initialize an empty git repository

<br>

```
git add .
```
add everything

<br>

```
git commit -m "initial commit"
```
- commit with a message
- This will just commit in a state. It has to be later committed in a created repository in github

<br>

https://github.com/ShailPatel27/MERN-ThinkBoard.git
Make a repository on github

<br>

```
git remote add origin https://github.com/ShailPatel27/MERN-ThinkBoard.git
git branch -M main
git push -u origin main
```
paste this copied code from github and run  to push code into the repository

<br>

```
npm init -y
```
- make a package.json in root folder
- This will be to manage both the frontend and backend from the same file

<br>

```
"build": "npm install --prefix backend && npm install --prefix frontend && npm run build --prefix frontend"
```
- add this script to scripts in package.json
- This will be to install node_modules by render which will be required when publishing since we put that in .gitignore and render doesnt have it
- npm run build is done to run the build script defined in the frontend’s package.json

<br>

since we now have client and server in the same domain, cors error will be removed

<br>

```
"start": "npm run start --prefix backend"
```
Command run by render to run the "start" script in backend's package.json that will start the backend

<br>

```
git add .
git commit -m "prepared for the deployment"
git push
```
Final commit

<br>

in render, when deploying, change build and run commands to "npm run build" "npm run start"

<br>

<h4 align="center">The app is now deployed🎉</h4>

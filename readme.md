<h2>Installing Packages:</h2>

cd ./backend/
<!-- change cd to backend to install package.json in it -->

npm init -y
<!-- installs a package.json -->

npm install express@4.18.2
<!-- install an older version(same as video) so that things dont break -->

type="module"
<!-- add this is package.json so that you can use regular imports -->
<!-- default is type="commonjs" and you will have to import like this  -->
<!-- const express = require("express"); -->

npm install nodemon -D
<!-- for auto updating servers while coding -->

"dev": "nodemon server.js"
<!-- change these values so that when you perform npm run dev, it does node server.js -->
<!-- original-     "test": "echo \"Error: no test specified\" && exit 1" -->

"start": "node server.js"
<!-- add in package.json to start the server after it is deployed -->

npm i mongoose@8.14.3
<!-- go with a fixed version to prevent errors -->

npm i dotenv@16.5.0
<!-- to use environment variables in the .env file for secure variables like keys or passwords -->

npm i @upstash/ratelimit@2.0.5
<!-- for rate limiting -->

npm i @upstash/redis@1.34.9
<!-- for json format fast database -->

<!-- Frontend setup... -->
<!-- We will use vite for react since it is muuuuch faster and provides better UX -->
cd ./frontend/
npm create vite@latest .
<!-- . to select current folder(frontend) -->
<!-- select Eeact and JavaScript -->
npm install
npm run dev

npm i react-router

npm i react-hot-toast
<!-- For notifications n-->

npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
<!-- install tailwind  -->

npm i daisyui@4.12.24 -D
<!-- daisyui for better and easier tailwind classes handling -->
<!-- it has a must see website, I really liked it -->

npm i lucide-react
<!-- for icons -->

npm i axios
<!-- to replace fetch API with axios -->

npm i cors@2.8.5
<!-- Cross-Origin Resource Sharing allows resources to be shared from different places -->
<!-- we will use it here to remove an error -->

https://bg.ibelick.com/
<!-- for background -->


<h2>To Upload on Github:</h2>

.gitignore
<!-- drag .gitignore from frontend to root folder and add .env file -->

git init
<!-- initialize an empty git repository -->

git add .
<!-- add everything -->
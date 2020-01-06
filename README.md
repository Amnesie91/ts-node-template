# ts-node-template

this is a template project for a Node application with typescript support, this template has some npm scripts that help you getting started quickly. This template uses dotenv library for setting/getting env variables. Make sure u dont serve the .env file in production

Requirements:
  - node
  - npm // if not installed with node
  
Quick use:
  - npm i
  
Prebuild npm scripts:
  - start // runs project with node
  - dev // runs project with nodemon for development
  - build // compiles project ts code from src/ folder and outputs it into dist/

Includes:
  - my basic structure for express applications
  - basic routes included which can be testet after serving the project at http://localhost:5000/tickets (POST, GET)
  - a basic logger middleware which saves some information on every request hitting the application ["method", "url", "date"]
  
Important:
  - for production make sure u add .env to your gitignore file, since you dont want to serve publish that in production

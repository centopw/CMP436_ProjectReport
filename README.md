# CMP436 - E-Commerce Website

This project is an E-Commerce website developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

## Folder Structure

The project follows a specific folder structure to organize the different components and modules. Here's an overview of the folder structure:

    ./
    ├── api/
    └── client/

- **api**: This directory contains the server-side code for the E-Commerce website. It includes the backend logic, API routes, database models, and controllers.
  
- **client**: This directory contains the client-side code for the E-Commerce website. It includes the frontend components, pages, stylesheets, and other client-specific files.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:
   
        git clone https://github.com/centopw/CMP436_ProjectReport.git

2. Change into the project directory: 
   
        cd CMP436_ProjectReport

3. Install the dependencies for the server-side (API): 
   
        cd api && npm install

4. Install the dependencies for the client-side (client):

        cd client && npm install

5. Rename `.env.example` to `.env` and update the environment variables:

        mv .env.example .env

6. Start the server and client concurrently: 
   
        npm start

Once the server and client start successfully, you can access the E-Commerce website by opening your browser and navigating to `http://localhost:3000`

## Additional Configuration

- You can modify the server configuration, database connection details, and other environment-specific variables in the api/.env file.
- The client-side configuration can be updated in the client/.env file.


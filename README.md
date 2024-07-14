# Euphotic Labs Assigment
This repository contains the code to manage and display dish information, including creating a database, API, and a front-end dashboard.. The backend is an Express server built with JavaScript and uses MongoDb as a database to store the data. The frontend is a React app.

## Features
- List of dishes shown in the form of table.
- A toggle button for changing the publish status of a particular dish.
- Bonus: Real-time change in frontend when publish status is changed in backend.

## Screenshots

![Screenshot 2024-07-14 175053](https://github.com/user-attachments/assets/f61370f6-e173-4532-83ff-babd49e400cb)
![Screenshot 2024-07-14 175122](https://github.com/user-attachments/assets/f50ea4cf-6b72-4009-85ac-a0e4d160150d)

## Requirements
- Node.js
- npm (Node Package Manager)
- MongoDB

## Clone the repository:

```bash
  git clone https://github.com/SandSnorter/Euphotic_Labs_Assignment.git
```

Navigate to the project directory:

```bash
  cd Europhotic_Labs_Assigment
```
Install the dependencies:

```bash
  npm install
```
## Running the Server

Start the backend server:

```bash
  npm run dev
```

Start the react app:

```bash
  npm run dev
```

The backend server will be running locally on http://localhost:5000 and the react app will be running locally on http://localhost:5173.

## Endpoints
### 1. /api/dishes
- Method: GET
- Description: This endpoint is used to return the list of all the dishes..
- Response: List of dishes
  
### 2. /api/dishes/:id/togglePublish
- Method: PUT
- Description: This endpoint is used to toggle dish publishing status.
- Parameters:
    - id (Number)

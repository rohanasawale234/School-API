# School Management API

A simple Node.js + Express + MySQL API to manage school data.  
This project allows users to add schools and fetch a list of schools sorted by proximity to a given location.

---

## Features

- Add a new school
- Fetch schools sorted by distance
- Uses MySQL database
- Distance calculated using Haversine formula

---

## Tech Stack

- Node.js
- Express.js
- MySQL
- Postman (for testing)

---

## Project Setup

### 1. Clone the repository
To clone this repo use link below : 
git clone <http://github.com/rohanasawale234/School-API>
cd school-api

### 2. Install dependencies

To install depedencies use this command : npm install

### 3. Setup MySQL Database

CREATE DATABASE school_db;

USE school_db;

CREATE TABLE schools (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
address VARCHAR(255) NOT NULL,
latitude FLOAT NOT NULL,
longitude FLOAT NOT NULL
);


## Configure Database

Update your DB credentials in config/db.js:

host: "localhost",
user: "root",
password: "your_password",
database: "school_db"

## Run the server
use this command to run the server : node app.js

Server will run on: http://localhost:3000


## API Endpoints
### Add School
URL: /addSchool
Method: POST
Request Body:
{
  "name": "ABC School",
  "address": "Mumbai",
  "latitude": 19.0760,
  "longitude": 72.8777
}
Response:
{
  "message": "School added successfully"
}

### List Schools
URL: /listSchools
Method: GET
Example:
/listSchools?latitude=19.07&longitude=72.87
Response:
[
  {
    "id": 1,
    "name": "ABC School",
    "address": "Mumbai",
    "latitude": 19.076,
    "longitude": 72.8777,
    "distance": 1.04
  }
]

## Deployment
not deployed yet


## Author
Rohan Asawale
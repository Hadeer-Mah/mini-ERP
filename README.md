# Mini ERP Application

## Overview

This is a mini ERP application designed to manage employees. The core functionality includes listing employees, adding new employees, and viewing detailed information about each employee. The application uses **JSON Server** to manage the employee data locally, and it's built with **React** using **RSuite** for UI components.

## Features

- **List Employees:** View all employees with basic information like name, role, and contact details.
- **Search Employees** Search in Employees by their names.
- **Pagination** Paginate through employees list pages.
- **Delete Employees** Delete selected Employees and their data.
- **Add Employees:** Add a new employee with details such as name, start date, phone, email, role, and an image.
- **View Employee Details:** Click on an employee to view detailed information.
- **JSON Server:** Employee data is stored and managed locally using JSON Server.
- **Robust Offline Experience**: Provide users with informative feedback and guidance through a dedicated offline page when internet connectivity is unavailable.

## Technologies Used

- **React**: Front-end framework for building user interfaces.
- **RSuite**: A suite of React components for UI.
- **JSON Server**: A local mock server for storing and managing employee data.
- **Vite:** Vite is used as the build tool, providing fast and efficient development server and build processes, enhancing the overall performance and development experience.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- **Node.js**
- **npm** 

## Getting Started

### Installation

Follow these steps to install and set up the project:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Hadeer-Mah/mini-ERP.git

2. **Navigate to the project directory**
 
   ```bash
   cd project

3. **Install dependencies**  

   ```bash
   npm install


4. **Running the Application**
There are two parts to running the application: starting the JSON Server and starting the React development server.

Start the JSON Server:

The JSON Server handles employee data and runs locally on localhost:8000.

Use the following command to start the JSON Server:

    npm run json-server

    
This will start the server and serve the employee data from the db.json file located in the project directory. The server will run at http://localhost:8000.

Start the React Application:

Once the JSON Server is running, start the React development server with the following command:

   ```
   npm start
   ```

This will start the application at http://localhost:3000. The application will fetch employee data from localhost:8000.


## Application Structure
The application consists of the following main components:

Employee List: Displays a list of all employees with basic details.


Search Employees: A search Input where you can search for employees by their names.


Add Employee: A form for adding new employees to the system. You can enter details like employee name, start date, phone number, email, role, and upload an image.


Delete Employees: You can delete employees and their stored data by clicking on a displayed icon for deletion.


Employee Details: Clicking on an employee in the list takes you to a detailed view showing all the employee’s information.


JSON Server Details


The JSON Server stores all employee data in a db.json file,

The server listens at http://localhost:8000/employees, and you can use standard HTTP methods (GET, POST, DELETE, etc.) for managing employee data.

## Commands Summary


Start JSON Server: npm run json-server


Start React Application: npm start

**Notes**


Make sure to start the JSON Server before running the React application to avoid any data fetch issues.


The image field is stored as a base64 string for simplicity, simulating image storage in the local environment.

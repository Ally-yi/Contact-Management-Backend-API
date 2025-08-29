

# **Contact Management Backend API**

This project is a RESTful API built from the ground up using **Node.js**, **Express**, and **MongoDB**. It provides a secure and robust backend for a contact management application, allowing users to register, log in, and manage their own contacts.

-----

### **Project Overview**

The core of this project is a fully functional API that demonstrates key backend development concepts. It features a complete user authentication flow and a private contact management system. The architecture is clean and modular, following a Model-View-Controller (MVC)-like pattern to ensure maintainability and scalability.

This project was developed by following the "[Learn Node.js & Express with Project](https://www.youtube.com/watch?v=H9M02of22z4&list=WL&index=3)" video from the Dipesh Malvia YouTube channel. I've since enhanced it with more detailed error handling and a clear, well-structured file organization.

-----

### **Key Features**

  * **User Authentication**: Secure user registration and login endpoints.
  * **JWT (JSON Web Token)**: Uses JWT for stateless authentication, providing a secure way to verify user identity.
  * **Password Hashing**: Implements `bcrypt` to securely hash and store user passwords, protecting against data breaches.
  * **Protected Routes**: Restricts access to contact management endpoints to authenticated users only.
  * **Data Isolation**: Ensures users can only access and modify their own contacts, preventing cross-user data access.
  * **RESTful API Design**: Follows standard REST principles with dedicated endpoints for each resource and action.
  * **Comprehensive CRUD**: Full Create, Read, Update, and Delete functionality for contact resources.
  * **Global Error Handling**: A centralized middleware to catch and format errors, ensuring consistent and informative API responses.
  * **MongoDB Integration**: Utilizes `Mongoose` to connect with a MongoDB database, providing a robust Object Data Modeling layer.

-----

### **Project Structure**

The file organization is logical and easy to navigate:

```bash
.
├── .env                  # Environment variables
├── .gitignore            # Git ignore file
├── config
│   └── dbConnection.js   # MongoDB connection setup
├── constants.js          # API error status code constants
├── controllers
│   ├── contactController.js # Business logic for contact resources
│   └── userController.js    # Business logic for user auth
├── middleware
│   ├── errorHandler.js      # Global error handling middleware
│   └── validateTokenHandler.js # JWT validation middleware
├── models
│   ├── contactModel.js      # Mongoose schema for contacts
│   └── userModel.js         # Mongoose schema for users
├── package.json          # Project dependencies and scripts
├── routes
│   ├── contactRoutes.js     # API routes for contacts
│   └── userRoutes.js        # API routes for user authentication
└── server.js             # Project entry point
```

-----

### **How to Run the Project**

1.  **Clone the repository**: `git clone <repository-url>`
2.  **Install dependencies**: Navigate to the project directory and run `npm install`.
3.  **Configure environment variables**: Create a `.env` file in the root directory and add the following:

<!-- end list -->

```
PORT=5000
CONNECTION_STRING="your_mongodb_connection_string"
ACCESS_TOKEN_SECRET="a_strong_random_secret_for_jwt_signing"
```

4.  **Start the server**: Run `npm run dev` (if using Nodemon) or `node server.js`.

-----

### **API Endpoints**

This project provides a full suite of RESTful API endpoints. All private routes require a valid JWT in the `Authorization: Bearer <token>` header.

| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/users/register` | Registers a new user | Public |
| `POST` | `/api/users/login` | Logs in a user and returns a JWT | Public |
| `GET` | `/api/users/current` | Retrieves the current user's information | Private (JWT required) |
| `GET` | `/api/contacts` | Fetches all contacts for the authenticated user | Private (JWT required) |
| `POST` | `/api/contacts` | Creates a new contact | Private (JWT required) |
| `GET` | `/api/contacts/:id` | Fetches a specific contact by ID | Private (JWT required) |
| `PUT` | `/api/contacts/:id` | Updates a specific contact by ID | Private (JWT required) |
| `DELETE` | `/api/contacts/:id`| Deletes a specific contact by ID | Private (JWT required) |

-----

### **Video Walkthrough**

This video provides a guided tour of the project, demonstrating how to use each API endpoint with Thunder Client and showcasing the core features, from user authentication to CRUD operations.

https://youtu.be/9LZ4K5rWsj4

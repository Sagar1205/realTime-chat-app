# Realtime Chat Application

## Overview
This document summarizes the features and the development process of implementation of the Realtime Chat webApp.

## 1. Technologies Used
* **Frontend:** React, Tailwind CSS, Typescript, Zustand
* **Backend:** Node.js, Express.js, Socket.io, Prisma ORM, PostgreSQL
* **Authentication:** JSON Web Tokens (JWT)
* **Deployment:** Render (backend), NeonDB (db)

## 2. Features
* 🎃 Authentication && Authorization with JWT
* 👾 Real-time messaging with Socket.io
* 🚀 Online user status (Socket.io and React Context)
* 👌 Global state management with Zustand
* 🐞 Error handling both on the server and on the client

## 3. Run Locally

### Setup .env file
```
DATABASE_URL=...
JWT_SECRET=...
NODE_ENV=...
PORT=...
```

### Install dependencies
```
npm install
```

### Build the app
```
npm run build
```

### Start the app
```
npm run dev
```

## 4. Conclusion
* Successfully integrated database management, and frontend UI.
* Successful deployment of the application.
* Achieved CRUD operations using Prisma ORM.

# World Explorer API

Final Project (CSE341) – Team 05

**Team Members:** 
- Alicia Teilani Johnson Norton
- Caroline Pereira Da Silva   

---

## Overview
World Explorer is a RESTful API that allows users to explore countries, discover events, and plan itineraries. It features full CRUD operations across four collections and secure authentication using GitHub OAuth.

**Deployed API:**  
🔗 [https://world-explorer-hszd.onrender.com/api-docs](https://world-explorer-hszd.onrender.com/api-docs)

---

## Tech Stack
- **Backend:** Node.js  
- **Database:** MongoDB  
- **Authentication:** GitHub OAuth
- **Documentation:** Swagger
- **Testing:** Jest  

---

## Collections
1. **Countries** – Country information (code, name, capital, currency, etc.)  
2. **Events** – Events linked to countries  
3. **Itineraries** – User travel plans  
4. **Users** – Admin-only collection for managing users  

---

## Authentication
OAuth with **GitHub** is required to access the API.

### To test the OAuth flow:
1. Open [https://world-explorer-hszd.onrender.com/github/callback](https://world-explorer-hszd.onrender.com/github/callback)
2. Log in with GitHub
3. After logging in successfully, you’ll have access to all protected endpoints in Swagger.

### To test endpoints:
4. Visit: [https://world-explorer-hszd.onrender.com/api-docs](https://world-explorer-hszd.onrender.com/api-docs)
5. Use “Try it out” on any route (GET, POST, PUT, DELETE) to interact with the database.

### Admin Access (Users Collection)
6. To access **admin-only** routes (`/users`), open Swagger and click **Authorize**,  
then type `1` as the value for `x-admin` and click **Authorize**.

---

## Running Locally
```bash
cd api
npm install
npm run dev
```

Create a .env file in /api with:

```
PORT=4000
MONGODB_URI=your_mongodb_uri
DB_NAME=world_explorer
NODE_ENV=test
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GITHUB_CALLBACK_URL=http://localhost:4000/auth/github/callback
```

Then open:
[http://localhost:4000/api-docs](http://localhost:4000/api-docs)

## Testing
Run all Jest unit tests for GET routes:
```
npm run test
```

# World Explorer 🌍  
Final Project – CSE 341 (Team 05)

---

## Overview  
World Explorer is a full-stack application that lets users explore countries, discover events, and manage itineraries.  

---

## Features  
- Retrieve country information (`GET /countries`, `GET /countries/:code`)  
- Retrieve events by location/date (`GET /events`, `GET /events/:id`)  
- Retrieve itineraries (`GET /itineraries`, `GET /itineraries/:id`)  
- Basic user listing (admin-guarded `GET /users`)  

---

## Tech Stack  
- **Backend:** Node.js
- **Frontend:** React 
- **Database:** MongoDB

---

## Setup Instructions  

### Backend (API)  
1. Go into `api/` folder:  
   ```bash
   cd api
   npm install
   npm run dev

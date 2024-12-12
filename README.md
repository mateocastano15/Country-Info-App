# COUNTRY-INFO-APP

### Technologies Used

This project uses the following technologies:

- **Next.js** (Frontend framework)
- **NestJS** (Backend framework)
- **Tailwind CSS** (Utility-first CSS framework)
- **Recharts** (Charting library)

### Setup Instructions

1. **Clone the repository**.

2. **Install dependencies**:
   - From the root directory of the project, run the following command to install all dependencies for both the frontend and backend:

     ```bash
     npm install
     ```

3. **Install Next.js, NestJS, Tailwind CSS, and Recharts**:
   If you need to install these dependencies separately, you can use the following commands:

   - For **Next.js** (Frontend):
     ```bash
     npm install next react react-dom
     ```

   - For **NestJS** (Backend):
     ```bash
     npm install @nestjs/core @nestjs/common rxjs
     ```

   - For **Tailwind CSS** (Styling):
     Follow the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation) for Next.js.

   - For **Recharts** (Charts):
     ```bash
     npm install recharts
     ```

4. **Run the application**:
   - From the root directory of the project, run the following command to start the application:

     ```bash
     node start.js
     ```

     This will automatically set up both the backend and frontend servers.

### Backend API

The backend will be available at:

`http://localhost:8080`

#### Available Endpoints:

- `GET /countries`  
  Returns a list of all available countries.

- `POST /country`  
  Accepts a request body with the **country name** and **country code** and returns:
  - Country flag
  - Country borders
  - Population by year

### Frontend

The frontend will be available at:

`http://localhost:3000`

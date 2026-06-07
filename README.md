# Integra Event Management Platform 

> **Status: Work in Progress (WIP)**
> This project is currently under active development. Core features like event creation and database integration are functional, while advanced role-based access control (RBAC) and frontend authentication flows are actively being refined.

## Project Purpose
The project is a full-stack web application designed to streamline the management of volunteering activities and community events. It provides administrators with a centralized dashboard to create, edit, and oversee events, while allowing users to browse and register for upcoming opportunities. 

The application features a decoupled architecture, ensuring a secure, scalable, and responsive user experience.

## Technologies Used

**Frontend**
* **Framework:** Angular (v17+ utilizing Signals and modern control flow)
* **Language:** TypeScript
* **Forms & State:** Reactive Forms, RxJS (BehaviorSubjects, Debounce)

**Backend**
* **Framework:** Spring Boot (Java)
* **Security:** Spring Security with JWT (JSON Web Tokens)
* **Data Access:** Spring Data JPA & Hibernate
* **API:** RESTful Architecture

**Database**
* **Database:** PostgreSQL
* **Hosting:** Supabase (Cloud-hosted AWS)

## 🚀 How to Run Locally

### Prerequisites
* **Node.js** and **Angular CLI** installed globally.
* **Java Development Kit (JDK 17+)** and Maven/Gradle.
* A PostgreSQL database (or Supabase project URL).

### 1. Backend Setup (Spring Boot)
1. Navigate to the backend directory.
2. Ensure your `application.yaml` is configured with your database credentials:
3. Add your JWT_SECRET to the configuration.
4. Run the application using your IDE or terminal: `./gradlew bootRun`
   
   The backend will typically run on http://localhost:8080
### 2. Frontend Setup (Angular)
1. Navigate to the frontend folder: `cd frontend`
2. Install the required Node modules: `npm install`
3. Start the Angular development server: `npm start`
4. Open your browser and navigate to http://localhost:4200

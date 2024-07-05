# E-Learning Platform

## Project Overview

This e-learning platform allows educators to upload courses and students to enroll and learn at their own pace. The platform supports video lectures, quizzes, and certificates upon course completion. Additionally, it includes a collaborative discussion forum where students can interact with each other and instructors, fostering a community learning environment.

## Unique Feature

The platform incorporates a real-time collaborative discussion forum using WebSockets, enabling dynamic communication between students and educators.

## Technical Details

### Front-End

- **Framework**: React.js
- **Technologies**: HTML, CSS, JavaScript
- **State Management**: Redux
- **Real-Time Communication**: WebSockets

### Back-End

- **Framework**: Spring Boot
- **Technologies**: Java, Spring MVC for RESTful APIs
- **Session Management**: Spring Security
- **Password Encryption**: BCrypt

### Database

- **Database**: MySQL
- **Tables**: Users, Courses, Videos, Quizzes, Questions, Answers, Enrollments, Certificates, DiscussionForums, Posts, Comments, Sessions, Roles

### Deployment

- **Hosting**: Local or any preferred platform

## Project Structure

```
edtech
├── backend
│   ├── pom.xml
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── edtech
│   │   │   │           ├── controller
│   │   │   │           │   └── AuthController.java
│   │   │   │           ├── model
│   │   │   │           │   └── User.java
│   │   │   │           ├── repository
│   │   │   │           │   └── UserRepository.java
│   │   │   │           ├── service
│   │   │   │           │   └── UserService.java
│   │   │   │           └── EdtechApplication.java
│   │   │   └── resources
│   │   │       ├── application.properties
│   │   │       └── templates
│   │   └── test
│   │       └── java
│   │           └── com
│   │               └── edtech
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   │   ├── HomePage.js
│   │   │   ├── LoginPage.js
│   │   │   └── RegisterPage.js
│   │   ├── services
│   │   │   └── api.js
│   │   ├── store.js
│   │   └── App.js
├── README.md
```

## Database Schema

### Tables and Relationships

- **Users Table**: Stores user details (educators and students)
- **Courses Table**: Stores course details
- **Videos Table**: Stores video lectures for courses
- **Quizzes Table**: Stores quizzes for courses
- **Questions Table**: Stores questions for quizzes
- **Answers Table**: Stores possible answers for questions
- **Enrollments Table**: Tracks student enrollments in courses
- **Certificates Table**: Stores certificates issued upon course completion
- **DiscussionForums Table**: Stores discussion forums for courses
- **Posts Table**: Stores posts within discussion forums
- **Comments Table**: Stores comments on posts within discussion forums
- **Sessions Table**: Manages user sessions
- **Roles Table**: Defines roles for users (e.g., student, educator)

## Installation and Setup

### Prerequisites

- Node.js and npm installed
- Java Development Kit (JDK) installed
- MySQL installed and running

### Backend Setup

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install Maven dependencies:
   ```sh
   mvn clean install
   ```
3. Configure the database in `src/main/resources/application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/elearning
   spring.datasource.username=root
   spring.datasource.password=password
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   ```
4. Run the Spring Boot application:
   ```sh
   mvn spring-boot:run
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install npm dependencies:
   ```sh
   npm install
   ```
3. Start the React development server:
   ```sh
   npm start
   ```

### Running the Application

- The backend server will run on `http://localhost:8080`.
- The frontend server will run on `http://localhost:3000`.

## API Endpoints

### User Authentication

- **POST** `/api/auth/register`: Register a new user
- **POST** `/api/auth/login`: Login a user

### Courses

- **GET** `/api/courses`: Get all courses
- **POST** `/api/courses`: Create a new course (Educator only)
- **GET** `/api/courses/{id}`: Get a specific course
- **PUT** `/api/courses/{id}`: Update a course (Educator only)
- **DELETE** `/api/courses/{id}`: Delete a course (Educator only)

### Videos

- **POST** `/api/courses/{courseId}/videos`: Add a video to a course (Educator only)
- **GET** `/api/courses/{courseId}/videos`: Get all videos for a course

### Quizzes

- **POST** `/api/courses/{courseId}/quizzes`: Add a quiz to a course (Educator only)
- **GET** `/api/courses/{courseId}/quizzes`: Get all quizzes for a course

### Enrollments

- **POST** `/api/courses/{courseId}/enroll`: Enroll in a course (Student only)
- **GET** `/api/users/{userId}/enrollments`: Get all enrollments for a user

### Discussion Forum

- **POST** `/api/courses/{courseId}/forum`: Create a discussion forum for a course (Educator only)
- **POST** `/api/forums/{forumId}/posts`: Add a post to a forum
- **POST** `/api/posts/{postId}/comments`: Add a comment to a post

## Security

- Session management is handled using Spring Security.
- Passwords are encrypted using BCrypt.

## Testing

- Ensure at least 80% test coverage for both front-end and back-end components.
- Use JUnit for back-end tests and Jest for front-end tests.

## Project Management

- Use Git for version control.
- Regular commits with meaningful messages are mandatory.
- Use tools like Checkstyle for Java to enforce coding standards.

## Contribution Guidelines

- Fork the repository.
- Create a new branch for each feature or bug fix.
- Submit pull requests for review.

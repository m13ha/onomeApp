# Onome App (Deprecated)

A social platform built for University of Benin students to connect, share information, and engage in discussions.

## Features

### Authentication & User Management

- User registration with different roles:
  - Undergraduate students
  - Alumni
  - Business accounts
- Email verification system using unique verification codes
- Custom student email generation based on faculty/department
- Password encryption using bcrypt
- Session-based authentication

### Social Features

#### Forum System

- Create discussion threads categorized by topics:
  - Academics
  - Culture
  - Fashion
  - Health & Fitness
  - Politics
  - Entertainment
  - Technology
  - And more...
- Post interaction features:
  - Like/Unlike posts
  - View counts
  - Comments and nested replies
  - Content moderation

#### News Feed

- Curated news posts with images
- Content moderation system
- Post filtering and sorting options:
  - Most popular
  - Most liked
  - Most viewed
- Time-based filtering:
  - Today
  - This Week
  - This Month

#### Real-time Features

- Live chat rooms:
  - Department-specific chats
  - Faculty-wide discussions
  - Private messaging
- Real-time notifications for:
  - Post approvals
  - Content moderation
  - Comments and replies
  - Mentions

### Academic Features

- Faculty and department organization
- Study group formation (planned feature)
- Academic resource sharing

### Profile System

- Customizable user profiles
- Academic information display:
  - Faculty
  - Department
  - Year of admission
- Activity tracking
- Points system

### Moderation System

- Content approval workflow
- Post moderation tools
- User management
- Notification system for moderation actions

## Technical Stack

### Frontend

- React.js
- React Router for navigation
- Context API for state management
- Socket.io client for real-time features

### Backend

- Node.js/Express
- MongoDB with Mongoose
- Socket.io for real-time communication
- Nodemailer for email services

### Authentication

- Session-based authentication
- JWT tokens
- Bcrypt for password hashing

### File Handling

- Image upload and processing
- File storage management

## Installation & Setup

```bash
# Clone repository
git clone <repository-url>

# Install dependencies for backend
npm install

# Install dependencies for frontend
cd client
npm install

# Run development servers
# Backend
npm run dev

# Frontend
cd client
npm start
```

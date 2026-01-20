# Blog App

A full-stack blog application built with MongoDB, Express, Node.js, and EJS.

## Features

- ✅ Blog CRUD operations (Create, Read, Update, Delete)
- ✅ Responsive design with Bootstrap
- ✅ Font Awesome icons
- ✅ Custom CSS with Poppins and Sacramento fonts
- ⏳ Authentication system (to be implemented by students)

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **View Engine:** EJS
- **Styling:** Bootstrap 5 + Custom CSS
- **Icons:** Font Awesome
- **Authentication:** Passport.js (to be implemented)

## Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/blog-app
SESSION_SECRET=your-secret-key-here-change-in-production
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

4. Make sure MongoDB is running on your system

5. Start the application:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

6. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
blog-app/
├── config/          # Configuration files (passport.js)
├── controllers/     # Route controllers
├── middleware/      # Custom middleware
├── models/          # Mongoose models
├── public/          # Static files (CSS, JS, images)
│   └── css/
├── routes/          # Express routes
├── views/           # EJS templates
│   └── partials/    # Reusable partials (header, footer)
├── .env.example     # Environment variables template
├── .gitignore       # Git ignore file
├── package.json     # Dependencies and scripts
├── server.js        # Main application file
├── tasks.md         # Student tasks for authentication
└── README.md        # This file
```

## Routes

### Blog Routes
- `GET /home` - Display all blog posts
- `GET /compose` - Show compose form
- `POST /compose` - Create new blog post
- `GET /blog/:id` - View single blog post
- `GET /edit/:id` - Show edit form
- `PUT /edit/:id` - Update blog post
- `DELETE /blog/:id` - Delete blog post

### Auth Routes (To be implemented)
- `GET /register` - Show registration form
- `POST /register` - Register new user
- `GET /login` - Show login form
- `POST /login` - Login user
- `GET /logout` - Logout user
- `GET /auth/google` - Google OAuth authentication
- `GET /auth/google/callback` - Google OAuth callback

## Student Tasks

See `tasks.md` for detailed instructions on implementing the authentication system.

## Dependencies

- express - Web framework
- mongoose - MongoDB ODM
- ejs - Template engine
- dotenv - Environment variables
- method-override - HTTP method override
- express-session - Session management
- bcrypt - Password hashing
- passport - Authentication middleware
- passport-local - Local authentication strategy
- passport-google-oauth20 - Google OAuth strategy

## Development Dependencies

- nodemon - Auto-reload during development

## License

ISC

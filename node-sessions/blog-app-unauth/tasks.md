# Blog App - Student Tasks

This document outlines the tasks you need to complete to implement authentication and security features in the blog application.

## Prerequisites
- Basic understanding of Node.js, Express, and MongoDB
- Knowledge of authentication concepts
- Familiarity with Passport.js

## Task Overview

You need to implement a complete authentication system using:
- **bcrypt** - for password hashing
- **passport** - authentication middleware
- **passport-local** - local authentication strategy
- **express-session** - session management
- **passport-google-oauth20** - Google OAuth authentication

---

## Task 1: Create User Model

**Location:** `models/User.js`

**Requirements:**
- Create a Mongoose schema for User with the following fields:
  - `email` (String, required, unique)
  - `password` (String, required)
  - `googleId` (String, optional - for Google OAuth users)
  - `createdAt` (Date, default: Date.now)

**Hints:**
- Use `mongoose.Schema` to define the schema
- Export the model using `module.exports`

---

## Task 2: Configure Passport

**Location:** `config/passport.js`

**Requirements:**
1. Require and configure Passport Local Strategy:
   - Find user by email
   - Compare password using bcrypt
   - Return user if authentication succeeds

2. Require and configure Passport Google OAuth Strategy:
   - Use `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` from environment variables
   - Set callback URL to `/auth/google/callback`
   - Handle user creation/finding for Google users

3. Serialize and deserialize user:
   - Serialize: store user ID in session
   - Deserialize: retrieve user from database using ID

**Hints:**
- Use `passport.use()` to configure strategies
- Use `passport.serializeUser()` and `passport.deserializeUser()`
- For Local Strategy, use `LocalStrategy` from `passport-local`
- For Google Strategy, use `Strategy` from `passport-google-oauth20`
- Use `bcrypt.compare()` to verify passwords

---

## Task 3: Create Authentication Middleware

**Location:** `middleware/authMiddleware.js`

**Requirements:**
1. Create `isAuthenticated` middleware:
   - Check if user is logged in (req.isAuthenticated())
   - If not authenticated, redirect to `/login`
   - If authenticated, call `next()`

2. Create `isNotAuthenticated` middleware:
   - Check if user is NOT logged in
   - If authenticated, redirect to `/home`
   - If not authenticated, call `next()`

**Hints:**
- Use `req.isAuthenticated()` method provided by Passport
- Export both functions using `module.exports`

---

## Task 4: Create Authentication Controller

**Location:** `controllers/authController.js`

**Requirements:**
1. **Register Function:**
   - Check if user with email already exists
   - Hash password using bcrypt (10 salt rounds)
   - Create new user in database
   - Redirect to `/login` on success
   - Handle errors appropriately

2. **Login Function:**
   - Use Passport's `authenticate` middleware with 'local' strategy
   - On success, redirect to `/home`
   - On failure, redirect back to `/login` with error message

3. **Logout Function:**
   - Use `req.logout()` to end session
   - Redirect to `/home`

4. **Google OAuth Callback:**
   - Use Passport's `authenticate` middleware with 'google' strategy
   - Handle user creation/finding for Google users
   - Redirect to `/home` on success

**Hints:**
- Use `bcrypt.hash()` for password hashing
- Use `passport.authenticate()` for login
- Use `req.logout()` for logout
- Handle Google OAuth users (check by googleId)

---

## Task 5: Update Auth Routes

**Location:** `routes/authRoutes.js`

**Requirements:**
1. Require necessary modules:
   - `passport`
   - `authController`
   - `authMiddleware`

2. Update routes:
   - `/register` (GET) - Apply `isNotAuthenticated` middleware
   - `/register` (POST) - Use `authController.register`
   - `/login` (GET) - Apply `isNotAuthenticated` middleware
   - `/login` (POST) - Use `authController.login`
   - `/logout` (GET) - Use `authController.logout`
   - `/auth/google` (GET) - Use Passport Google OAuth
   - `/auth/google/callback` (GET) - Use `authController.googleCallback`

**Hints:**
- Use `passport.authenticate('google', { scope: ['profile', 'email'] })` for Google OAuth
- Apply middleware using route parameters: `router.get('/path', middleware, controller)`

---

## Task 6: Update Server Configuration

**Location:** `server.js`

**Requirements:**
1. Require and initialize Passport:
   - Require `passport` and `config/passport`
   - Use `app.use(passport.initialize())`
   - Use `app.use(passport.session())`

2. Update session configuration:
   - Ensure session secret is from environment variable
   - Set appropriate cookie settings

**Hints:**
- Passport must be initialized after session middleware
- Import passport config to register strategies

---

## Task 7: Protect Blog Routes

**Location:** `routes/blogRoutes.js`

**Requirements:**
1. Require `authMiddleware`

2. Apply `isAuthenticated` middleware to protected routes:
   - `/home` (GET) - Protect the home page
   - `/compose` (GET and POST) - Protect compose page
   - `/edit/:id` (GET and PUT) - Protect edit functionality
   - `/blog/:id` (DELETE) - Protect delete functionality

3. Keep `/blog/:id` (GET) public (no authentication required for viewing)

**Hints:**
- Add middleware as second parameter in route definitions
- Example: `router.get('/compose', isAuthenticated, controller)`
- Example: `router.get('/home', isAuthenticated, controller)`
- Users should be redirected to login if not authenticated

---

## Task 8: Update Views

**Location:** `views/partials/header.ejs`

**Requirements:**
1. Update navigation to show user-specific options:
   - If user is logged in:
     - Show user email/name
     - Show "Logout" link
     - Hide "Register" and "Login" links
   - If user is not logged in:
     - Show "Register" and "Login" links
     - Hide "Logout" link

**Hints:**
- Use EJS conditionals: `<% if (typeof user !== 'undefined' && user) { %>`
- Access user via `req.user` (make sure to pass it to views)
- Use `user.email` or `user.name` to display user info

---

## Task 9: Pass User to Views

**Location:** `server.js` or create middleware

**Requirements:**
1. Create middleware to pass user to all views:
   - Use `res.locals.user = req.user`
   - Apply this middleware globally

**Hints:**
- Create middleware function: `app.use((req, res, next) => { ... })`
- Place it after Passport initialization

---

## Task 10: Update Environment Variables

**Location:** `.env` file (create from `.env.example`)

**Requirements:**
1. Set up Google OAuth credentials:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URI: `http://localhost:3000/auth/google/callback`
   - Copy Client ID and Client Secret to `.env`

2. Set a strong session secret:
   - Generate a random string for `SESSION_SECRET`
   - Use a password generator or `openssl rand -base64 32`

---

## Testing Checklist

After completing all tasks, test the following:

- [ ] User can register with email and password
- [ ] User cannot register with duplicate email
- [ ] User can login with correct credentials
- [ ] User cannot login with incorrect credentials
- [ ] User can logout
- [ ] User can authenticate with Google OAuth
- [ ] Protected routes require authentication
- [ ] Public routes are accessible without authentication
- [ ] User information displays in navigation when logged in
- [ ] Passwords are hashed in database (not stored as plain text)

---

## Additional Challenges (Optional)

1. Add password validation (minimum length, special characters)
2. Add email verification


---

## Resources

- [Passport.js Documentation](http://www.passportjs.org/)
- [Bcrypt Documentation](https://www.npmjs.com/package/bcrypt)
- [Express Session Documentation](https://www.npmjs.com/package/express-session)
- [Google OAuth Setup Guide](https://developers.google.com/identity/protocols/oauth2)

---

## Notes

- Make sure to install all dependencies: `npm install`
- Start MongoDB before running the app
- Use `npm run dev` for development with nodemon
- Check console for errors during development
- Test each feature as you implement it

Good luck! 🚀

// Passport configuration
// This file wires up the LocalStrategy and tells Passport how to store users in the session.

import passport from "passport"; // Main Passport library
import { Strategy as LocalStrategy } from "passport-local"; // Username/password strategy
import { Strategy as GoogleStrategy } from "passport-google-oauth20"; // Google OAuth 2.0 strategy
import bcrypt from "bcryptjs"; // Library to compare hashed passwords
import User from "../models/user.js"; // Mongoose User model

// Configure Passport Local Strategy and serialization
export const configurePassport = () => {
  // Tell Passport how to authenticate users with a username + password.
  // Here "username" is actually the email field from the login form.
  passport.use(
    new LocalStrategy(
      {
        // Which field from the form should be treated as the username
        usernameField: "username", // matches <input name="username" ...> in login.ejs
      },
      // Verify callback: runs when a user tries to log in
      async (username, password, done) => {
        try {
          // Look up a user by email (stored as "username" from the form)
          const user = await User.findOne({ email: username });

          // If no user with that email exists, fail the login
          if (!user) {
            return done(null, false, { message: "Invalid email or password." });
          }

          // If user doesn't have a password (signed up with Google OAuth), fail login
          if (!user.password) {
            return done(null, false, { message: "Invalid email or password." });
          }

          // Compare the plain password from the form with the hashed one in the DB
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return done(null, false, { message: "Invalid email or password." });
          }

          // Success: pass the user object to Passport
          return done(null, user);
        } catch (err) {
          // On error, pass the error to Passport so it can be handled upstream
          return done(err);
        }
      }
    )
  );

  // Configure Google OAuth 2.0 Strategy
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          // Check if user already exists with this Google ID
          let user = await User.findOne({ googleId: profile.id });

          if (user) {
            // User exists, return them
            return done(null, user);
          } else {
            // Check if user exists with the same email (from local registration)
            user = await User.findOne({ email: profile.emails[0].value });

            if (user) {
              // User exists with local account, link Google account
              user.googleId = profile.id;
              await user.save();
              return done(null, user);
            } else {
              // New user, create account
              user = new User({
                email: profile.emails[0].value,
                googleId: profile.id,
                // No password for Google OAuth users
              });
              await user.save();
              return done(null, user);
            }
          }
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  // Store user id in the session cookie
  passport.serializeUser((user, done) => {
    // Save only the user.id, not the entire object
    done(null, user.id);
  });

  // Retrieve full user object from the id stored in the session
  passport.deserializeUser(async (id, done) => {
    try {
      // Find the user by its unique id in MongoDB
      const user = await User.findById(id);
      // Attach the user to req.user
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
};

// Default export (same function) for convenience
export default configurePassport;


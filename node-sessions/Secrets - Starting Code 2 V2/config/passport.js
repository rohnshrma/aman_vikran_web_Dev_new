import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcryptjs";
import User from "../models/user.js";

// Configure Passport Local Strategy and serialization
export const configurePassport = () => {
  // Use "username" field from the login form as the username (email)
  passport.use(
    new LocalStrategy(
      {
        usernameField: "username", // matches <input name="username" ...> in login.ejs
      },
      async (username, password, done) => {
        try {
          const user = await User.findOne({ email: username });

          if (!user) {
            return done(null, false, { message: "Invalid email or password." });
          }

          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return done(null, false, { message: "Invalid email or password." });
          }

          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  // Store user id in the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // Retrieve full user from id stored in session
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
};

export default configurePassport;


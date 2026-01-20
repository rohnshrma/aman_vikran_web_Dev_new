// TODO: Configure Passport strategies here
// This file should contain:
// 1. Local Strategy configuration
// 2. Google OAuth Strategy configuration
// 3. Serialize and deserialize user functions

// See tasks.md for detailed instructions

import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

const passportConfig = () =>{


  console.log("In passport config");

  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password' 
  },
  async (email, password, done) => {
     try{
       console.log("Login (incoming credentials)=> ", email, password);
       const user = await User.findOne({ email: email });
       console.log("Login (user) => ",user);
       if(!user){
         console.log("Login (user) not found");
         
         return done(null, false, { message: 'Incorrect email.' });
        }
        
        if(!user.password){
          console.log("Login (user) has no password set");
          return done(null, false, { message: 'Invalid password.' });
        }
        
        const isMatched = await bcrypt.compare(password, user.password);
        
        if(!isMatched){
          console.log("Login (user) invalid passwordField");
          return done(null, false, { message: 'Incorrect password.' });
        }
        console.log("all good with login");
          return done(null, user);
     }
     catch(err){
         return done(err);
     }
  }));

  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ googleId: profile.id });
      if (user) {
        return done(null, user);
      } else {
        user = new User({
          email: profile.emails[0].value,
          googleId: profile.id
        });
        await user.save();
        return done(null, user);
      }
    } catch (err) {
      return done(err);
    }
  }));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

};

export default passportConfig;
     
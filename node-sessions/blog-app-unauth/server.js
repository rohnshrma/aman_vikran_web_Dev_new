import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import session from 'express-session';
import blogRoutes from './routes/blogRoutes.js';
import authRoutes from './routes/authRoutes.js';
import passportConfig from './config/passport.js';
import passport from 'passport';
import morgan from 'morgan';

const app = express();

const PORT = process.env.PORT || 3000;

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/blog-app')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));


app.use(morgan('dev'));


// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'home',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Set to true if using HTTPS
}));

passportConfig();
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
// Routes
app.use('/', blogRoutes);
app.use('/auth', authRoutes);

// Home route
app.get('/', (req, res) => {
  res.redirect('/home');
});




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

# Quick Setup Guide

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up Environment Variables

Create a `.env` file in the root directory with the following content:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/blog-app
SESSION_SECRET=your-secret-key-here-change-in-production
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

**Important:** 
- Replace `your-secret-key-here-change-in-production` with a strong random string
- For Google OAuth, you'll need to set up credentials in Google Cloud Console (see tasks.md)

## Step 3: Start MongoDB

Make sure MongoDB is running on your system:

**Windows:**
```bash
# If MongoDB is installed as a service, it should start automatically
# Or start it manually:
mongod
```

**Mac/Linux:**
```bash
# If installed via Homebrew:
brew services start mongodb-community

# Or manually:
mongod
```

## Step 4: Run the Application

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

## Step 5: Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

## Testing the Blog CRUD

1. **Create a blog:** Go to `/compose` and fill out the form
2. **View all blogs:** Go to `/home`
3. **View single blog:** Click "Read More" on any blog
4. **Edit blog:** Click "Edit" button on any blog
5. **Delete blog:** Click "Delete" button on any blog

## Next Steps

After verifying the blog CRUD works, proceed to implement authentication by following the tasks in `tasks.md`.

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check if the MongoDB URI in `.env` is correct
- Default MongoDB port is 27017

### Port Already in Use
- Change the PORT in `.env` file
- Or stop the process using port 3000

### Module Not Found
- Run `npm install` again
- Delete `node_modules` and `package-lock.json`, then run `npm install`

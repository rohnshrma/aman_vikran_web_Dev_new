import express from 'express';
import * as blogController from '../controllers/blogController.js';
import isAuthenticated from '../middleware/authMiddleware.js';


const router = express.Router();

// Home page - show all blogs
router.get('/home',isAuthenticated, blogController.getAllBlogs);

// Compose page - show form
router.get('/compose',isAuthenticated, blogController.showComposeForm);

// Create blog
router.post('/compose',isAuthenticated, blogController.createBlog);

// View single blog
router.get('/blog/:id',isAuthenticated, blogController.getBlog);

// Edit page - show form
router.get('/edit/:id', isAuthenticated,blogController.showEditForm);

// Update blog
router.put('/edit/:id',isAuthenticated, blogController.updateBlog);

// Delete blog
router.delete('/blog/:id',isAuthenticated, blogController.deleteBlog);

export default router;

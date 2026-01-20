import express from 'express';
import * as blogController from '../controllers/blogController.js';

const router = express.Router();

// Home page - show all blogs
router.get('/home', blogController.getAllBlogs);

// Compose page - show form
router.get('/compose', blogController.showComposeForm);

// Create blog
router.post('/compose', blogController.createBlog);

// View single blog
router.get('/blog/:id', blogController.getBlog);

// Edit page - show form
router.get('/edit/:id', blogController.showEditForm);

// Update blog
router.put('/edit/:id', blogController.updateBlog);

// Delete blog
router.delete('/blog/:id', blogController.deleteBlog);

export default router;

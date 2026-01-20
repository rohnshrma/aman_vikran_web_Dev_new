import Blog from '../models/Blog.js';

// Get all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.render('home', { blogs });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).send('Error fetching blogs');
  }
};

// Get single blog
export const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).send('Blog not found');
    }
    res.render('blog', { blog });
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).send('Error fetching blog');
  }
};

// Show compose form
export const showComposeForm = (req, res) => {
  res.render('compose');
};

// Create blog
export const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const blog = new Blog({ title, content });
    await blog.save();
    res.redirect('/home');
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).send('Error creating blog');
  }
};

// Show edit form
export const showEditForm = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).send('Blog not found');
    }
    res.render('edit', { blog });
  } catch (error) {
    console.error('Error fetching blog for edit:', error);
    res.status(500).send('Error fetching blog');
  }
};

// Update blog
export const updateBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    await Blog.findByIdAndUpdate(req.params.id, {
      title,
      content,
      updatedAt: Date.now()
    });
    res.redirect('/home');
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).send('Error updating blog');
  }
};

// Delete blog
export const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect('/home');
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).send('Error deleting blog');
  }
};

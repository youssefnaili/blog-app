const express = require('express');
const router = express.Router();
// const blogController = require('../controllers/blogs');
const {getAllBlogs, createBlog, updateBlog, deleteBlog}  = require('../controller/blog')

router.get("/", getAllBlogs);
router.post("/", createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;

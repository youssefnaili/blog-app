const db = require('../Database/index');

exports.getAllBlogs = async (req, res) => {
    try {
      const blog = await db.Blog.findAll({});

      res.status(200).send(blog);
    } catch (error) {
      throw error;
    }
  },

exports.createBlog = async (req, res) => {
    try {
      const blog = await db.Blog.create(req.body);

      res.status(201).send(blog);
    } catch (error) {
      throw error;
    }
  },


module.exports.updateBlog = async (req, res) => {
  try {
    const blog = await db.Blog.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(201).send(blog);
  } catch (error) {
    throw error;
  }
};


module.exports.deleteBlog = async (req, res) => {
    try {
      const blog = await db.Blog.destroy({
        where: { id: req.params.id },
      });
      res.json(blog);
    } catch (error) {
      throw error;
    }
  };



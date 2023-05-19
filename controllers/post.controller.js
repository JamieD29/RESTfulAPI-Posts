// function index(req, res) {
//     const posts = 'Posts List';
//     res.send(posts);
// }

const models = require("../models");

function save(req, res) {
  const post = {
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.image_url,
    categoryId: req.body.category_id,
    userId: 1,
  };
  models.Post.create(post)
    .then((result) => {
      res.status(201).json({
        message: "Post created successfully",
        post: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong",
        error: err,
      });
    });
}

function show(req, res) {
  const id = req.params.id;
  models.Post.findByPk(id)
    .then((result) => {
      if (result === null) {
        return res.status(404).json({
          message: "Post not found",
        });
      }
      res.status(200).json({
        message: "Post fetched successfully",
        post: result,
      });
    })
    .catch((err) => {
      res.status(500).json({ message: "Something went wrong" });
    });
}

function index(req, res) {
  models.Post.findAll()
    .then((result) => {
      res.status(200).json({
        message: "Posts fetched successfully",
        posts: result,
      });
    })
    .catch((err) => {
      res.status(500).json({ message: "Something went wrong" });
    });
}

function update(req, res) {
  const id = req.params.id;
  const updatedPost = {
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.image_url,
    categoryId: req.body.category_id,
  };
  const userId = 1;

  models.Post.update(updatedPost, { where: { id, userId } })
    .then((result) => {
      res.status(200).json({
        message: "Post updated successfully",
        post: updatedPost,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong",
        error: err,
      });
    });
}

function destroy(req, res) {
  const id = req.params.id;
  const userId = 1;

  models.Post.destroy({ where: { id, userId } })
    .then((result) => {
      res.status(200).json({
        message: "Post deleted successfully",
        post: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong",
        error: err,
      });
    });
}

module.exports = {
  // index,
  save,
  show,
  index,
  update,
  destroy
};

const express = require("express");
const router = express.Router();

const {getAll, getOneUser, postUser, loginUser, updateUser, deleteUser} = require('../controller/user.js');


router.get("/", getAll);
router.get("/:id", getOneUser);
router.post("/post", postUser);
router.post("/login", loginUser);
router.put("/:id",  updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
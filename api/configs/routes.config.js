const express = require("express");
const router = express.Router();
const restaurants = require("../controllers/restaurants.controller");
const comments = require("../controllers/comments.controller");
const users = require("../controllers/users.controller");
const auth = require("../middlewares/auth.middleware");

router.post("/restaurants", restaurants.create);
router.get("/restaurants", restaurants.list);
router.get("/restaurants/:id", restaurants.detail);
router.patch("/restaurants/:id", restaurants.update);
router.delete("/restaurants/:id", restaurants.delete);

router.post("/restaurants/:id/comments", auth.checkAuth, comments.create);
router.get("/restaurants/:id/comments", comments.list);

router.post("/users", users.create);
router.post("/login", users.login);

module.exports = router;

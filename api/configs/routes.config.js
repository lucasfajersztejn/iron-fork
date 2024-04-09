const express = require("express");
const router = express.Router();
const restaurants = require("../controllers/restaurants.controller");

router.post("/restaurants", restaurants.create);
router.get("/restaurants", restaurants.list);
router.get("/restaurants/:id", restaurants.detail);
router.patch("/restaurants/:id", restaurants.update);
router.delete("/restaurants/:id", restaurants.delete);

module.exports = router;

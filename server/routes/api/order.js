// eslint-disable-next-line new-cap
const router = require("express").Router();
const { ExtractToken, Admin } = require("../../middleware");
const controller = require("../../controller/order");

// all requests must pass in a token
router.use(ExtractToken);

router.post("/", controller.post);
// all requests must be by ADMIN
router.use(Admin);

module.exports = router;

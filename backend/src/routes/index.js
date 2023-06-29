const router = require("express").Router();

const smartphonesRouter = require("./smartphones.routes");

router.use("/smartphones", smartphonesRouter);

module.exports = router;

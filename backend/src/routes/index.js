const router = require("express").Router();

const smartphonesRouter = require("./smartphones.routes");
const employesRouter = require("./employes.routes");

router.use("/smartphones", smartphonesRouter);
router.use("/employes", employesRouter);

module.exports = router;

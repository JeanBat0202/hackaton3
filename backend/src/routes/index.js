const router = require("express").Router();

const itemsRouter = require("./items.routes");

const smartphonesRouter = require("./smartphones.routes");
const employesRouter = require("./employes.routes");

router.use("/items", itemsRouter);

router.use("/smartphones", smartphonesRouter);
router.use("/employes", employesRouter);

module.exports = router;

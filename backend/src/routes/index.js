const router = require("express").Router();

const itemsRouter = require("./items.routes");

const employesRouter = require("./employes.routes");

router.use("/items", itemsRouter);

router.use("/employes", employesRouter);

module.exports = router;

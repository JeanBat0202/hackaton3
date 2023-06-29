const router = require("express").Router();

const smartphoneControllers = require("../controllers/smartphoneControllers");

router.get("/", smartphoneControllers.browse);
router.get("/:id", smartphoneControllers.read);
router.put("/:id", smartphoneControllers.edit);
router.post("/", smartphoneControllers.add);
router.delete("/:id", smartphoneControllers.destroy);

module.exports = router;

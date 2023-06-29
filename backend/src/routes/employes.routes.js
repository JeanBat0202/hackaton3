const router = require("express").Router();

const employeControllers = require("../controllers/employeControllers");

router.get("/", employeControllers.browse);
router.get("/:id", employeControllers.read);
router.put("/:id", employeControllers.edit);
router.post("/", employeControllers.add);
router.delete("/:id", employeControllers.destroy);

module.exports = router;

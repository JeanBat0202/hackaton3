const router = require("express").Router();

const employeControllers = require("../controllers/employeControllers");

router.get("/", employeControllers.browse);
router.get("/:id", employeControllers.read);
router.put("/:id", employeControllers.edit);
router.post(
  "/",
  employeControllers.hashPassword,
  employeControllers.add,
  employeControllers.read
);
router.post("/login", employeControllers.login);
router.delete("/:id", employeControllers.destroy);

module.exports = router;

const Router = require("express").Router;
const userController = require("../controllers/user-controller");
const router = new Router();
const { body } = require("express-validator");
const authMiddleware = require("../middleware/auth-middleware");
const PlaceController = require("../controllers/place-controller");
const TribeController = require("../controllers/tribe-controller");
const PersonController = require("../controllers/person-controller");
const EventController = require("../controllers/event-controller");

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/users", authMiddleware, userController.getUsers);
router.get("/places/:id", PlaceController.getPlace);
router.get("/tribes/:id", TribeController.getTribe);
router.get("/persons/:id", PersonController.getPerson);
router.get("/events/:id", EventController.getEvent);

module.exports = router;

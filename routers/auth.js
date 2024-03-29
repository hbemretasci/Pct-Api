const express = require('express');
const { login, getUserProfile, editUser, changePassword, forgotPassword, resetPassword } = require('../controllers/auth');
const { getAccessToRoute } = require('../middlewares/authorization/auth');

const router = express.Router();

router.post("/login", login);
router.get("/profile", getAccessToRoute, getUserProfile);
router.put("/edit", getAccessToRoute, editUser);
router.put("/changepassword", getAccessToRoute, changePassword);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword", resetPassword);

module.exports = router
import express from 'express'
import { adminLogin, userLogin, userRegister } from '../controllers/user.controllers.js';

const router = express.Router()

router.route('/register').post(userRegister)
router.route('/login').post(userLogin)
router.route('/admin').post(adminLogin)

export default router;
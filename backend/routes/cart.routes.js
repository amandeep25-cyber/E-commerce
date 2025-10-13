import express from 'express';
import { getCart, addToCart, updateCartItem, removeFromCart } from '../controllers/cart.controller.js';
import { authUser } from '../middlewares/auth.middleware.js';
const router = express.Router();

router.route('/get').post(authUser,getCart);
router.route('/add').post(authUser,addToCart);
router.route('/update').put(authUser,updateCartItem);

export default router;
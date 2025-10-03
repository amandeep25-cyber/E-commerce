
import express from 'express'
import { listProducts, addProduct, removeProduct, singleProduct } from '../controllers/product.controllers.js'
import upload from '../middlewares/multer.middlewares.js';

const router = express.Router();

router.route('/add').post(upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1},]),addProduct)
router.route('/remove').post(removeProduct)
router.route('/single').post(singleProduct)
router.route('/list').get(listProducts)

export default router;
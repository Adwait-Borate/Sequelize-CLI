import express from 'express';
import { insert } from '../controller/userController.js';
const router = express.Router();

router.get('/register', insert);

export default router;


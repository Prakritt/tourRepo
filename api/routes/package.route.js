import express from 'express';
import { createPackage,getAllPackages } from '../controllers/package.controller.js';

const router = express.Router();

router.get('/',getAllPackages);
router.post('/',createPackage);

export default router;
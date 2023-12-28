import express from 'express';
import { createPackage,getAllPackages, getPackage } from '../controllers/package.controller.js';

const router = express.Router();

router.get('/',getAllPackages);
router.get('/:packageId',getPackage)
router.post('/',createPackage);

export default router;
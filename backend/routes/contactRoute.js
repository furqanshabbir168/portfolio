import express from 'express';
import { contactFormController } from '../controller/contactController.js';

const router = express.Router();

// POST route for contact form
router.post('/contact', contactFormController);

export default router;

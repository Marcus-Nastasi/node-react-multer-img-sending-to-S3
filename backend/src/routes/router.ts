import express from 'express';

import { home } from '../controllers/home';
import upload from '../services/multerService';
import { send } from '../controllers/sendFile';

const router = express.Router();

router.get('/', home);

router.post('/upload', upload.single('file'), send);

export default router;


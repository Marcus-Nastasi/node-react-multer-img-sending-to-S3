import express from 'express';

import { home } from '../controllers/home';
import { send } from '../controllers/sendFile';

import MulterService from '../services/MulterService';

const router = express.Router();

router.get('/', home);

router.post('/upload', MulterService.upload.single('file'), send);

export default router;


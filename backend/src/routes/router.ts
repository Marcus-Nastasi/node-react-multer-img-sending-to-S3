import express from 'express';

import { home } from '../controllers/home';
import { send } from '../controllers/sendFile';
import MulterClass from '../services/multerService';

const router = express.Router();

router.get('/', home);

router.post('/upload', MulterClass.upload.single('file'), send);

export default router;


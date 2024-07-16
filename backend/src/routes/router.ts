import { Router } from 'express';

import HomeController from '../controllers/HomeController';
import FileLoaded from '../controllers/FileLoaded';
import MulterService from '../services/MulterService';

const router = Router();

router.get('/', HomeController.index);

router.post('/upload', MulterService.upload.single('file'), FileLoaded.done);

export default router;


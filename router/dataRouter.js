import { Router } from 'express';
import dateController from '../controller/dataController.js';

const router = Router();

router.get('/', dateController.currentDate);
router.get('/data?', dateController.data);
router.get('/:timestampUnix', dateController.unixDate);



export default router;


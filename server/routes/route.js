import express from 'express';

import { userSignup, userLogin } from '../controller/user-controller.js';
import { getCities, getCityById } from '../controller/city-controller.js';
import { getRecommendations } from '../controller/recommendation-controller.js';


const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);


router.get('/cities', getCities);
router.get('/city/:id', getCityById);

router.get(`/api/recommendations/:userId`, getRecommendations);

export default router;
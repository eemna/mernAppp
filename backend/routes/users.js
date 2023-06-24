import express from 'express';
import {  createUser, getUsers, getUser, deleteUser, updateUser} from '../controllers/users.js';

const router =express.Router();

router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:_id', getUser);
router.delete('/users/:_id',deleteUser); 
router.put('/users/:_id', updateUser);


export default router;

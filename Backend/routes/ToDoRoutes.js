import { Router } from "express";
import ToDoControler from "../Controler/ToDoControler.js";
const {data,saveData,updateData,dltInfo} =ToDoControler;
const router = Router();

router.get('/',data)
router.post('/save',saveData)
router.put('/update/:id',updateData)
router.delete('/delete/:id',dltInfo)

export default router;
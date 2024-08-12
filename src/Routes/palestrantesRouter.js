import { Router } from "express";

const router = Router()

import {palestrantes, criarPalestrantes} from '../Controllers/palestrantesController.js'

router.get("/",palestrantes)
router.post("/palestrantes", criarPalestrantes)

export default router;



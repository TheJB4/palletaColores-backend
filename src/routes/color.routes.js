import { Router } from "express";
import { crearColor, editarColor, eliminarColor, obtenerColores } from "../controllers/colores.controller.js";

let router = Router()

router.route('/colores')
.get(obtenerColores)
.post(crearColor)

router.route('/colores/:id')
.put(editarColor)
.delete(eliminarColor)

export default router
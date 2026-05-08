import { Router } from "express";
import adoptionController from "../controllers/adoptionController.js";

const router = Router();


/**
 * @swagger
 * /api/adoptions:
 *   post:
 *     summary: Crear una adopción
 *     tags:
 *       - Adoptions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               species:
 *                 type: string
 *     responses:
 *       201:
 *         description: Adopción creada correctamente
 */

router.post('/', adoptionController.create );



/**
 * @swagger
 * /api/adoptions:
 *   get:
 *     summary: Obtener todas las adopciones
 *     tags:
 *       - Adoptions
 *     responses:
 *       200:
 *         description: Lista de adopciones
 */

router.get('/', adoptionController.getAll);

/**
 * @swagger
 * /api/adoptions/{id}:
 *   get:
 *     summary: Obtener adopción por ID
 *     tags:
 *       - Adoptions
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Adopción encontrada
 *       404:
 *         description: Adopción no encontrada
 */



router.get('/:id' , adoptionController.getById);


/**
 * @swagger
 * /api/adoptions/{id}:
 *   put:
 *     summary: Actualizar una adopción
 *     tags:
 *       - Adoptions
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Adoption'
 *     responses:
 *       200:
 *         description: Adopción actualizada
 */

router.put('/:id' , adoptionController.update);

/**
 * @swagger
 * /api/adoptions/{id}:
 *   delete:
 *     summary: Eliminar una adopción
 *     tags:
 *       - Adoptions
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Adopción eliminada
 *       404:
 *         description: Adopción no encontrada
 */


router.delete('/:id' , adoptionController.delete);


export default router;
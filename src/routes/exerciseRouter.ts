import express from "express";
import ExerciseController from "../controller/exerciseController";
import authMiddleware from "../middlewares/authMiddleware";

export default class ExerciseRouter {
    private readonly controller = new ExerciseController();

    /**
     * @swagger
     * tags:
     *  - name: Exercise
     *    description: APIs related to exercise model
     */
    public routes() {
        const router = express.Router();
        const controller = this.controller;

        /**
         * @swagger
         * /api/exercises:
         *  post:
         *   tags:
         *    - Exercise
         *   produces:
         *    - application/json
         *   summary: Add new exercise
         *   requestBody:
         *    required: true
         *    content:
         *      application/json:
         *          schema:
         *              type: object
         *              properties:
         *                  name:
         *                      type: string
         *                  description:
         *                      type: string
         *                  muscular_group:
         *                      type: number
         *   responses:
         *    200:
         *      description: new Exercise added
        */
        router.route('/').post(authMiddleware, controller.add);

        /**
         * @swagger
         * /api/exercises:
         *  get:
         *   tags:
         *      - Exercise
         *   summary: Get all exercises
         *   responses:
         *    200:
         *     description: Retrieve user  
         */
        router.route('/').get(authMiddleware, controller.findAll);

        /**
         * @swagger
         *  /api/exercises/{id}:
         *   get:
         *     tags:
         *      - Exercise
         *     summary: Retrieve exercise by ID
         *     parameters:
         *      - name: id
         *        in: path
         *        required: true
         *        schema: 
         *          type: string
         *     responses:
         *      200:
         *          description: Retrieve exercise  
         */
        router.route('/:id').get(authMiddleware, controller.findById);
    }
}
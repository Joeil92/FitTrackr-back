import express from 'express';
import ExerciseSetController from "../controller/exerciseSetController";
import authMiddleware from '../middlewares/authMiddleware';

export default class ExerciseSetRouter 
{
    private readonly controller = new ExerciseSetController();

    /**
     * @swagger
     * tags:
     *  - name: Exercise Set
     *    description: APIs related to exercise set model
     */
    public routes() {
        const router = express.Router();
        const controller = this.controller;

        /**
         * @swagger
         * /api/exercise_sets:
         *  post:
         *   tags:
         *    - Exercise Set
         *   produces:
         *    - application/json
         *   summary: Add new exercise set
         *   requestBody:
         *    required: true
         *    content:
         *     application/json:
         *      schema:
         *       type: object
         *       properties:
         *        repetitions:
         *         type: number
         *        rest_period:
         *         type: number
         *        workout_exercise_id:
         *         type: number
         *    responses:
         *      200:
         *       description: new Exercise set added
         *        
         */
        router.route('/').post(authMiddleware, controller.add);

        /**
         * @swagger
         * /api/exercise_sets:
         *  get:
         *   tags:
         *      - Exercise Set
         *   summary: Get all exercise sets
         *   responses:
         *    200:
         *     description: Retrieve exercise sets  
        */
        router.route('/').get(authMiddleware, controller.findAll);
        
        /**
         * @swagger
         *  /api/exercise_sets/{id}:
         *   get:
         *     tags:
         *      - Exercise Set
         *     summary: Retrieve exercise set by ID
         *     parameters:
         *      - name: id
         *        in: path
         *        required: true
         *        schema: 
         *          type: string
         *     responses:
         *      200:
         *          description: Retrieve exercise set  
        */
        router.route('/:id').get(authMiddleware, controller.findById);

        return router;
    }
}
import express from "express";
import authMiddleware from "../middlewares/authMiddleware";
import WorkoutController from "../controller/workoutController";

export default class WorkoutRouter {
    constructor(
        private controller = new WorkoutController()
    ) { }

    /**
     * @swagger
     * tags:
     *  - name: Workout
     *    description: APIs related to workout model
     */
    public routes() {
        const router = express.Router();
        const controller = this.controller;

        /**
         * @swagger
         * /api/workouts:
         *  post:
         *      tags:
         *          - Workout
         *      produces:
         *          - application/json
         *      summary: Add new workout
         *      requestBody:
         *          required: true
         *          content:
         *              application/json:
         *                  schema:
         *                      type: object
         *                      properties:
         *                          name:
         *                              type: string
         *                          user_id:
         *                              type: number
         *      responses:
         *          200:
         *              description: new Workout added
         */
        router.route('/').post(authMiddleware, controller.add);

        /**
         * @swagger
         * /api/workouts/{id}:
         *  get:
         *      tags:
         *          - Workout
         *      produces:
         *          - application/json
         *      summary: Get workout by id
         *      parameters:
         *          - name: id
         *            in: path
         *            required: true
         *            schema:
         *              type: string
         *      responses:
         *          200:
         *              description: get successfully workout
         */
        router.route('/:id').get(authMiddleware, controller.findById);

        /**
         * @swagger
         * /api/workouts/users/{userId}:
         *  get:
         *      tags:
         *          - Workout
         *      produces:
         *          - application/json
         *      summary: Get workouts by user
         *      parameters:
         *          - name: userId
         *            in: path
         *            required: true
         *            schema:
         *              type: string
         *      responses:
         *          200:
         *              description: get successfully workouts by user
         */
        router.route('/users/:userId').get(authMiddleware, controller.findByUser);

        return router;
    }
}
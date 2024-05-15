import { NextFunction, Request, Response } from "express";
import WorkoutCase from "@FitTrackr/use_cases/workoutCase";

export default class WorkoutController
{
    constructor(
        private useCase = new WorkoutCase()
    ) {}

    public add = async (req: Request, res: Response, next: NextFunction) => {
        const body = req.body

        return this.useCase.add(body)
            .then(workout => res.json({
                message: 'Workout has been added',
                data: workout
            }))
            .catch(err => next(err));
    }

    public findById = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id;

        return this.useCase.findById(id)
            .then(workout => res.json(workout))
            .catch(err => next(err));
    }

    public findByUser = async (req: Request, res: Response, next: NextFunction) => {
        const userId = req.params.userId;

        return this.useCase.findByUser(userId)
            .then(workouts => res.json(workouts))
            .catch(err => next(err));
    }
}
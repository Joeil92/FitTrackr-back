import { NextFunction, Request, Response } from "express";
import ExerciseCase from "../use_cases/exerciseCase";

export default class ExerciseController {
    private readonly useCase = new ExerciseCase();

    public add = (req: Request, res: Response, next: NextFunction) => {
        const body = req.body;

        return this.useCase.add(body)
            .then(exercise => res.json({
                data: exercise,
                message: "Exercise has been created !"
            }))
            .catch(err => next(err));
    }

    public findAll = (req: Request, res: Response, next: NextFunction) => {
        return this.useCase.findAll()
            .then(exercises => res.json(exercises))
            .catch(err => next(err));
    }

    public findById = (req: Request, res: Response, next: NextFunction) => {
        const exerciseId = req.params.id;

        return this.useCase.findById(exerciseId)
            .then(exercise => res.json(exercise))
            .catch(err => next(err));
    }
}
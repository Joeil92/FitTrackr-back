import { NextFunction, Request, Response } from "express";
import ExerciseSetCase from "../use_cases/exerciseSetCase";

export default class ExerciseSetController
{
    private readonly useCase = new ExerciseSetCase();

    public add = (req: Request, res: Response, next: NextFunction) => {
        const body = req.body;

        return this.useCase.add(body)
            .then(set => res.json({
                message: 'Set has been created',
                data: set
            }));
    }

    public findAll = (req: Request, res: Response, next: NextFunction) => {
        return this.useCase.findAll()
            .then(sets => res.json(sets))
            .catch(err => next(err));
    }

    public findById = (req: Request, res: Response, next: NextFunction) => {
        const setId = req.params.id;

        return this.useCase.findById(setId)
            .then(set => res.json(set))
            .catch(err => next(err));
    }
}
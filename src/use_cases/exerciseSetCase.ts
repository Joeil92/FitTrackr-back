import ExerciseSet from "../models/exerciseSet";
import ExerciseSetRepository from "../repositories/exerciseSet/exerciseSetRepository";
import { ExerciseSetBody } from "../shared/types/exerciseSet.interface";

export default class ExerciseSetCase {
    private readonly repository = new ExerciseSetRepository();

    public async add(set: ExerciseSetBody) {
        const isFieldMissing = (
            !set.repetitions ||
            !set.rest_period ||
            !set.workout_exercise
        );

        if(isFieldMissing) throw new Error('At least one field is missing');

        const newSet = new ExerciseSet(
            null,
            set.repetitions,
            set.rest_period,
            set.workout_exercise
        );

        return await this.repository.add(newSet)
            .then(async packet => await this.repository.findById(packet.insertId));
    }

    public async findAll() {
        return await this.repository.findAll();
    }

    public async findById(setId: string) {
        if(!Number(setId)) throw new Error('Invalid identifier');

        return await this.repository.findById(setId);
    }
}
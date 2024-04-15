import Exercise from "../models/exercise";
import ExerciseRepository from "../repositories/exercise/exerciseRepository";
import { ExerciseBody } from "../shared/types/exercise.interface";

export default class ExerciseCase {
    private readonly repository = new ExerciseRepository();

    public async add(exercise: ExerciseBody) {
        const isFieldsMissing = (!exercise.name || !exercise.muscular_group);

        if(isFieldsMissing) throw new Error('At least one field is missing');

        const newExercise = new Exercise(
            null,
            exercise.name,
            exercise.description,
            exercise.muscular_group
        );

        return await this.repository.add(newExercise)
            .then(async packet => await this.repository.findById(packet.insertId));
    }

    public async findAll() {
        return await this.repository.findAll();
    }

    public async findById(exerciseId: string) {
        if(!Number(exerciseId)) throw new Error('Invalid identifier');

        return await this.repository.findById(exerciseId);
    }
}
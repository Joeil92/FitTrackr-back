import Workout from "../models/workout";
import WorkoutRepository from "../repositories/workout/workoutRepository";
import { WorkoutBody } from "../shared/types/workout.interface";

export default class WorkoutCase {
    constructor(
        private repository = new WorkoutRepository()
    ) { }

    public async add(workout: WorkoutBody) {
        const isFieldsMissing = (
            !workout.name ||
            !workout.user
        );

        if (isFieldsMissing) throw new Error('At least one field is missing');

        const newWorkout = new Workout(
            null,
            workout.name,
            workout.user
        );

        return await this.repository.add(newWorkout)
            .then(async packet => {
                const workouts = await this.repository.findById(String(packet.insertId));

                return workouts[0];
            });
    }

    public async findByUser(userId: string) {
        if (!Number(userId)) throw new Error('Invalid identifier');

        return await this.repository.findByUser(userId);
    }
}
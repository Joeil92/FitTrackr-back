export default class ExerciseSet
{
    constructor(
        private id: number | null,
        private repetitions: number,
        private restPeriod: number,
        private workoutExercise: number
    ) {}

    public getId() {
        return this.id;
    }

    public getRepetitions() {
        return this.repetitions;
    }

    public getRestPeriod() {
        return this.restPeriod;
    }

    public getWorkoutExercise() {
        return this.workoutExercise;
    }
}
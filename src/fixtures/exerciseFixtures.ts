import Exercise from "../models/exercise";
import ExerciseRepository from "../repositories/exercise/exerciseRepository";
import Fixture from "./fixture";
import { nbUser } from "./userFixtures";

export const nbExercise = 300;

export default class ExerciseFixtures extends Fixture
{
    private readonly repository = new ExerciseRepository();

    public async flush(exercises: Exercise[]) {
        for(const exercise of exercises) {
            try {
                await this.repository.add(exercise);
            } catch (error) {
                throw new Error('error: ' + error);
            }
        }

        this.endMessage('Exercise');
    }

    public load() {
        const faker = this.getFaker();

        const exercises = faker.helpers.multiple(() => this.newExercise(), { count: nbExercise });

        return this.flush(exercises);
    }

    private newExercise() {
        const faker = this.getFaker();

        const user = faker.helpers.maybe(() => faker.number.int({ min: 1, max: nbUser }), { probability: 0.2 }) || null;

        return new Exercise(
            null,
            faker.lorem.words({ min: 2, max: 3 }),
            faker.lorem.paragraph(),
            faker.number.int({ min: 1, max: 7 }),
            user
        );
    }
}
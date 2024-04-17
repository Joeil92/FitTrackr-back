import pool from "@FitTrackr/src/config/database";
import ExerciseSetQueries from "./queries";
import ExerciseSet from "@FitTrackr/src/models/exerciseSet";

export default class ExerciseSetRepository 
{
    private readonly queries = new ExerciseSetQueries();

    public async add(set: ExerciseSet) {
        const connect = await pool.getConnection();
        const sql = this.queries.add;

        try {
            return await connect.query(sql, [
                set.getRepetitions(),
                set.getRestPeriod(),
                set.getWorkoutExercise()
            ]);
        } catch (error) {
            console.log(error);
            throw new Error('Error to querying table exercise_set');
        } finally {
            await connect.end();
        }
    }

    public async findAll() {
        const connect = await pool.getConnection();
        const sql = this.queries.findAll;

        try {
            return await connect.query(sql);
        } catch (error) {
            console.log(error);
            throw new Error('Error to querying table exercise_set');
        } finally {
            await connect.end();
        }
    }

    public async findById(setId: string) {
        const connect = await pool.getConnection();
        const sql = this.queries.findById;

        try {
            return await connect.query(sql, setId);
        } catch (error) {
            console.log(error);
            throw new Error('Error to querying table exercise_set');
        } finally {
            await connect.end();
        }
    }
}
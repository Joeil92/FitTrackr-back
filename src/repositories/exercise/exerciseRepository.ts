import pool from "@FitTrackr/src/config/database";
import Exercise from "@FitTrackr/src/models/exercise";
import ExerciseQueries from "./queries";

export default class ExerciseRepository {
    private readonly queries = new ExerciseQueries();

    public async add(exercise: Exercise) {
        const connect = await pool.getConnection();
        const sql = this.queries.add;

        try {
            return await connect.query(sql, [
                exercise.getName(),
                exercise.getDescription(),
                exercise.getMuscularGroup()
            ]);
        } catch (error) {
            console.log(error);
            throw new Error('error to querying table : Exercise');
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
            throw new Error('error to querying table : Exercise');
        } finally {
            await connect.end();
        }
    }

    public async findById(exerciseId: string) {
        const connect = await pool.getConnection();
        const sql = this.queries.findById;

        try {
            return await connect.query(sql, exerciseId);
        } catch (error) {
            console.log(error);
            throw new Error('error to querying table : Exercise');
        } finally {
            await connect.end();
        }
    }
}
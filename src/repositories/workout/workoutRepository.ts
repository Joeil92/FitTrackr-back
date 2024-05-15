import Workout from "@FitTrackr/src/models/workout";
import WorkoutQueries from "./queries";
import pool from "@FitTrackr/src/config/database";

export default class WorkoutRepository {
    constructor(
        private readonly queries = new WorkoutQueries()
    ) { }

    public async add(workout: Workout) {
        const connect = await pool.getConnection();
        const sql = this.queries.add;

        try {
            return await connect.query(sql, [
                workout.getName(),
                workout.getUser()
            ]);
        } catch (error) {
            console.log(error);
            throw new Error('error to querying table: Workout');
        } finally {
            await connect.end();
        }
    }

    public async findById(id: string) {
        const connect = await pool.getConnection();
        const sql = this.queries.findById;

        try {
            return connect.query(sql, id);
        } catch (error) {
            console.log(error);
            throw new Error('error to querying table: Workout');
        } finally {
            await connect.end();
        }
    }

    public async findByUser(userId: string) {
        const connect = await pool.getConnection();
        const sql = this.queries.findByUser;

        try {
            return await connect.query(sql, userId);
        } catch (error) {
            console.log(error);
            throw new Error('error to querying table: Workout');
        } finally {
            await connect.end();
        }
    }
}
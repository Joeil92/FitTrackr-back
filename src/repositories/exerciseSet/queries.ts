export default class ExerciseSetQueries {
    public readonly add = `
        INSERT INTO(
            repetitions,
            rest_period,
            workout_exercise_id
        ) VALUES(?, ?, ?)`;

    public readonly findAll = `
        SELECT *
        FROM exercise_set es`;

    public readonly findById = `
        SELECT
        es.repetitions,
        es.rest_period as restPeriod,
        es.workout_exercise_id,
        es.created_at as createdAt
        FROM exercise_set es
        WHERE es.id = ?`;
}
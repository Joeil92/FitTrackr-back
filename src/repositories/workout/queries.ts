export default class WorkoutQueries {
    public readonly add = `
        INSERT INTO workout(
            name,
            user_id        
        ) VALUES(?, ?)`;

    public readonly findById = `
        SELECT
        w.id,
        w.name,
        JSON_OBJECT("id", u.id, "firstname", u.firstname, "lastname", u.lastname) as user,
        w.created_at as createdAt
        FROM workout w
        LEFT JOIN user u ON w.user_id = u.id
        WHERE w.id = ?
        LIMIT 1`;

    public readonly findByUser = `
        SELECT
        w.id,
        w.name,
        JSON_OBJECT("id", u.id, "firstname", u.firstname, "lastname", u.lastname) as user,
        w.created_at as createdAt
        FROM workout w
        LEFT JOIN user u ON w.user_id = u.id
        WHERE w.user_id = ?
        ORDER BY createdAt DESC`;
}
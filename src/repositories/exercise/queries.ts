export default class ExerciseQueries {
    public readonly add = `
        INSERT INTO exercise(
            name,
            description,
            muscular_group_id
        ) VALUES(?, ?, ?)`;

    public readonly findAll = `
        SELECT
            e.id,
            e.name,
            e.description,
            JSON_OBJECT(
                "id", mg.id,
                "name", mg.name,
                "description", mg.description,
                "createdAt", mg.created_at
            ) as muscularGroup,
            e.created_at as createdAt
        FROM exercise e
        LEFT JOIN muscular_group mg ON e.muscular_group_id = mg.id
        ORDER BY e.created_at`;

    public readonly findById = `
        SELECT
            e.id,
            e.name,
            e.description,
            JSON_OBJECT(
                "id", mg.id,
                "name", mg.name,
                "description", mg.description,
                "createdAt", mg.created_at
            ) as muscularGroup,
            e.created_at as createdAt
        FROM exercise e
        LEFT JOIN muscular_group mg ON e.muscular_group_id = mg.id
        WHERE e.id = ?`;
}
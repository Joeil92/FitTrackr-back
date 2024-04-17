CREATE TABLE muscular_group (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description LONGTEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    weight int(3),
    size int(3),
    imageUrl LONGTEXT,
    roles JSON,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE workout (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    user_id INT(11) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_workout_user 
        FOREIGN KEY (user_id) REFERENCES user (id) 
);

CREATE TABLE exercise (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description LONGTEXT,
    muscular_group_id INT(11) NOT NULL,
    created_by INT(11) DEFAULT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_exercise_user
        FOREIGN KEY (created_by) REFERENCES user (id),
    CONSTRAINT fk_exercise_muscular_group
        FOREIGN KEY (muscular_group_id) REFERENCES muscular_group (id)
);

CREATE TABLE workout_exercise (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    workout_id INT(11) NOT NULL,
    exercise_id INT(11) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_workout_exercise_workout
        FOREIGN KEY (workout_id) REFERENCES workout (id),
    CONSTRAINT fk_workout_exercise_exercise
        FOREIGN KEY (exercise_id) REFERENCES exercise (id)
);

CREATE TABLE exercise_set (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    repetitions INT(3) NOT NULL,
    rest_period INT(3) NOT NULL,
    workout_exercise_id INT(11) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_exercise_set_workout_exercise
        FOREIGN KEY (workout_exercise_id) REFERENCES workout_exercise (id)
);

INSERT INTO muscular_group(name, description) VALUES
("Abdominaux", "Situés à l'avant de la paroi abdominale, ces muscles comprennent le grand droit de l'abdomen, les obliques internes et externes, ainsi que le transverse de l'abdomen. Ils soutiennent le tronc, facilitent la flexion et la rotation du tronc et stabilisent la colonne vertébrale"),
("Dos", "Comprennent les muscles érecteurs du rachis, le grand dorsal, les trapèzes, les rhomboïdes et les muscles spinaux. Ils soutiennent la colonne vertébrale, permettent l'extension, la flexion et la rotation du dos, et stabilisent les épaules."),
("Pectoraux", "Situés sur la poitrine, les principaux muscles pectoraux sont le grand pectoral et le petit pectoral. Ils permettent le mouvement des bras vers l'avant et vers le centre du corps, comme lors de la poussée ou du serrage."),
("Epaules", "Comprennent le deltoïde, le supra-épineux, l'infra-épineux, le petit rond, le grand rond, et le sus-épineux. Ils permettent le mouvement et la stabilisation de l'épaule dans toutes les directions."),
("Bras", "Incluent les biceps brachial et brachial, le triceps brachial, et les muscles de l'avant-bras. Ils permettent la flexion, l'extension et la rotation de l'avant-bras et du bras."),
("Jambes", "Composés des quadriceps (vaste latéral, vaste médial, vaste intermédiaire et droit fémoral), des ischio-jambiers (biceps fémoral, semi-tendineux, semi-membraneux), des adducteurs, des muscles de la hanche et des mollets (triceps sural : gastrocnémien et soléaire). Ils soutiennent le corps, permettent la marche, la course et d'autres mouvements comme la flexion et l'extension de la jambe."),
("Fessiers", "Principalement le grand fessier, le moyen fessier et le petit fessier. Ils stabilisent le bassin, permettent l'extension, l'abduction et la rotation externe de la hanche");

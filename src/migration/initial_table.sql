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
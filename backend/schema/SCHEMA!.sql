CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    role varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO users (
    username,
    password,
    role
) VALUES ("editor", "password", "edit");

INSERT INTO users (
    username,
    password,
    role
) VALUES ("viewer", "password", "view");

INSERT INTO users (
    username,
    password,
    role
) VALUES ("restricted", "password", "restricted");
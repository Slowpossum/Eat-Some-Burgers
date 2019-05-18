DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(255),
    devoured BOOLEAN
);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Regular Burger", false), ("Cheese Burger", false), ("Quarter Pounder", false);
DROP DATABASE IF EXISTS bookingSystem;
CREATE DATABASE bookingSystem;

USE bookingSystem;

CREATE TABLE sellers (
    Id INT AUTO_INCREMENT NOT NULL,
    email VARCHAR(255),
    pass VARCHAR(255),
    username VARCHAR(255),
    filed VARCHAR(255),
    summary VARCHAR(255),
    PRIMARY KEY (Id)
);

CREATE TABLE users (
    Id INT AUTO_INCREMENT NOT NULL,
    email VARCHAR(255),
    pass VARCHAR(255),
    username VARCHAR(255),
    PRIMARY KEY (Id)
);

CREATE TABLE appointment(
    Id INT AUTO_INCREMENT NOT NULL,
    phonenumber INT ,
    app_date VARCHAR(255),
    hour VARCHAR(255),
    seller_name VARCHAR(255),
    username VARCHAR(255),
    app_status VARCHAR(255),
    PRIMARY KEY (Id)


); 
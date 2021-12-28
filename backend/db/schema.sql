DROP DATABASE IF EXISTS bookingSystem;
CREATE DATABASE bookingSystem;

USE bookingSystem;

CREATE TABLE sellers (
    id INT AUTO_INCREMENT NOT NULL,
    email VARCHAR(255),
    pass VARCHAR(255),
    username VARCHAR(255),
    filed VARCHAR(255),
    summary VARCHAR(255),
    PRIMARY KEY (Id)
);

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(255),
    email VARCHAR(255),
    pass VARCHAR(255),
    PRIMARY KEY (Id)
);

CREATE TABLE appointment(
    id INT AUTO_INCREMENT NOT NULL,
    phonenumber INT ,
    app_date VARCHAR(255),
    hour VARCHAR(255),
    seller_name VARCHAR(255),
    sellerId INT,
    username VARCHAR(255),
    userId INT,
    app_status VARCHAR(255),
    PRIMARY KEY (Id)
); 
/*password without hash (cant log in with these accounts) */
INSERT INTO users (username, email, pass) VALUES ('Anas', 'AnasAlnabale@gmail.com', "123456");
INSERT INTO users (username, email, pass) VALUES ('Khaled', 'Khaled@gmail.com', "123456");
INSERT INTO sellers (email, pass, username,filed,summary) VALUES ('s1@gmail.com', '123456', "Anas" ,"IT,Computer Sceince","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed elit.");
INSERT INTO sellers (email, pass, username,filed,summary) VALUES ('s2@gmail.com', '123456', "Mohammed" ,"Law","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed elit.");
INSERT INTO sellers (email, pass, username,filed,summary) VALUES ('s3@gmail.com', '123456', "Zaid Nabil" ,"Marketing,Meida","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed elit.");
INSERT INTO sellers (email, pass, username,filed,summary) VALUES ('s4@gmail.com', '123456', "Ibraheem " ,"Programmin","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed elit.");
INSERT INTO sellers (email, pass, username,filed,summary) VALUES ('s5@gmail.com', '123456', "Dia'a Elan" ,"IT,Computer Sceince","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed elit.");
INSERT INTO sellers (email, pass, username,filed,summary) VALUES ('s6@gmail.com', '123456', "Bashar Amin" ,"NetWorking","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed elit.");




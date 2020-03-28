DROP DATABASE IF EXISTS league;

CREATE DATABASE league;

USE league;

CREATE TABLE team (
  id int NOT NULL AUTO_INCREMENT,
  teamName varchar (255) NOT NULL,
  logo varchar (255),
  schedule varchar (255),
  record varchar (255),
  PRIMARY KEY (id)
);

CREATE TABLE player (
  id int NOT NULL AUTO_INCREMENT,
  fullName varchar(255) NOT NULL,
  picture varchar (255),
  stats varchar (255),
  team_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (team_id) REFERENCES team(id)
);
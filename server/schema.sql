DROP DATABASE IF EXISTS 'league';

CREATE DATABASE 'league';

USE 'league';

CREATE TABLE 'team' (
  'id' int NOT NULL AUTO_INCREMENT,
  'teamName' varchar (255) NOT NULL,
  'schedule' varchar (255),
  'wins' int (255) NOT NULL,
  'losses' int (255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE 'player' (
  'id' int NOT NULL AUTO_INCREMENT,
  'fullName' varchar(255) NOT NULL,
  'picture' varchar (255) NOT NULL,
  'stats_id' int NOT NULL,
  'team_id' int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (team_id) REFERENCES team(id)
);

CREATE TABLE 'stats' (
  'id' int NOT NULL AUTO_INCREMENT,
  'totalPoints' int NOT NULL,
  'ppg' int NOT NULL,
  'fgPct' decimal NOT NULL,
  'threePtPct' decimal NOT NULL,
  `ftPct` decimal NOT NULL,
  `fgMade` integer NOT NULL,
  `fgAttempt` integer NOT NULL,
  `threePtMade` integer NOT NULL,
  `threePtAttempt` integer NOT NULL,
  `ftMade` integer NOT NULL,
  `ftAttempt` integer NOT NULL,
  `gamesPlayed` integer NOT NULL,
  `player_id` integer NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`player_id`) REFERENCES `player` (`id`)
);

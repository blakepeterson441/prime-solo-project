CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(80) UNIQUE NOT NULL,
	password VARCHAR(1000) NOT NULL
);

CREATE TABLE friends (
	id SERIAL PRIMARY KEY,
	user_id_one int not null REFERENCES users,
	user_id_two int not null REFERENCES users,
	approved boolean default 'false',
	approved_date date 
);

CREATE TABLE games (
	id SERIAL PRIMARY KEY,
	name VARCHAR(80) UNIQUE NOT NULL
);

CREATE TABLE user_games (
	id SERIAL PRIMARY KEY NOT NULL,
	user_id int NOT NULL REFERENCES users,
	game_id int NOT NULL REFERENCES games,
	overall_skill int NOT NULL default 1,
	offensive_skill int NOT NULL default 1,
	defensive_skill int NOT NULL default 1,
	aggression int NOT NULL default 1
);

CREATE TABLE messages (
	id SERIAL PRIMARY KEY,
	user_id_one int REFERENCES users,
	user_id_two int REFERENCES users,
	message VARCHAR(240) NOT NULL
);
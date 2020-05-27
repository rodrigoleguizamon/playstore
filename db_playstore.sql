create database if not exists db_playstore;

create table users(
	id bigint(20) NOT NULL AUTO_INCREMENT,
	name varchar(95) NOT NULL,
	email varchar(95) NOT NULL,
	password varchar(95) NOT NULL,
	user_type tinyint NOT NULL,
	created_at timestamp NULL DEFAULT NULL,
	updated_at timestamp NULL DEFAULT NULL,
	PRIMARY KEY (id)
);
create table categories(
	id bigint(20) NOT NULL AUTO_INCREMENT,
    name varchar(95) NOT NULL,
    PRIMARY KEY (id)
);
create table applications(
	id bigint(20) NOT NULL AUTO_INCREMENT,
    name varchar(95) NOT NULL,
	image_url text,
	description varchar(255) DEFAULT NULL, 
	user_id bigint(20) NOT NULL, 
	category_id bigint(20) NOT NULL, 
	price decimal(5,2) NOT NULL,
	created_at timestamp NULL DEFAULT NULL,
	updated_at timestamp NULL DEFAULT NULL,
	PRIMARY KEY (id)
);

create table orders(
	id bigint(20) NOT NULL AUTO_INCREMENT,
    user_id bigint(20) NOT NULL, 
    application_id bigint(20) NOT NULL,
    price decimal(5,2) NOT NULL,
    PRIMARY KEY (id)
);

create table comments(
	id bigint(20) NOT NULL AUTO_INCREMENT,
	order_id bigint(20) NOT NULL,
	rating tinyint(5),
	content varchar(255) DEFAULT NULL,
	created_at timestamp NULL DEFAULT NULL,
	updated_at timestamp NULL DEFAULT NULL,
	PRIMARY KEY (id)
);



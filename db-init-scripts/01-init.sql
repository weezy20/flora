DROP DATABASE IF EXISTS test;

CREATE DATABASE flora_main;

USE flora_main;

CREATE TABLE blog_posts (
    uid INT AUTO_INCREMENT PRIMARY KEY,
    post_datetime DATETIME NOT NULL,
    word_count INT NOT NULL,
    time_to_read INT,
    blog_content TEXT NOT NULL,
    tags VARCHAR(255) NOT NULL
);

CREATE TABLE tags (
    tag_id INT AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(50) NOT NULL,
    blog_post_id INT,
    FOREIGN KEY (blog_post_id) REFERENCES blog_posts(uid)
);

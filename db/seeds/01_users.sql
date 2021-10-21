-- Users table seeds here (Example)
INSERT INTO users (name, email, password, created_at, updated_at) VALUES ('Alice', alice_wonderland@gmail.com, 1);
INSERT INTO users (name, email, password, created_at, updated_at) VALUES ('Kira', kira.hufflepuff@hotmail.com, 2);
INSERT INTO users (name, email, password, created_at, updated_at) VALUES ('Anthony', adognamedpotato@outlook.com, 3);
INSERT INTO users (name, email, password, created_at, updated_at) VALUES ('Justin', justin@gmail.com, 4);
INSERT INTO users (name, email, password, created_at, updated_at) VALUES ('Dara', Dara@gmail.com, 5);

-- Category IDs are: 1- Films, 2- Restaurants, 3- Books (To Read), 4- Products (To Buy) | All
INSERT INTO todo_lists (user_id, category_id, to_do_task, to_do_date, current_status) VALUES (1, 2, 'Red Lobster', 2021-10-30 20:00:00, TRUE);
INSERT INTO todo_lists (user_id, category_id, to_do_task, to_do_date, current_status) VALUES (2, 2, 'Red Lobster', 2021-10-30 20:00:00, TRUE);
INSERT INTO todo_lists (user_id, category_id, to_do_task, to_do_date, current_status) VALUES (3, 2, 'Red Lobster', 2021-10-30 20:00:00, TRUE);
INSERT INTO todo_lists (user_id, category_id, to_do_task, to_do_date, current_status) VALUES (4, 2, 'Red Lobster', 2021-10-30 20:00:00, TRUE);
INSERT INTO todo_lists (user_id, category_id, to_do_task, to_do_date, current_status) VALUES (5, 2, 'Red Lobster', 2021-10-30 20:00:00, TRUE);

INSERT INTO to_do_categories (category) VALUES (Films);
INSERT INTO to_do_categories (category) VALUES (Restaurants);
INSERT INTO to_do_categories (category) VALUES (Books);
INSERT INTO to_do_categories (category) VALUES (Products);
INSERT INTO to_do_categories (category) VALUES (All);

INSERT INTO user_comments (body, user_id, todo_list) VALUES ("Can't wait to go down the rabbit hole!", 1, 1);
INSERT INTO user_comments (body, user_id, todo_list) VALUES ("Meeting after the Quidditch match!", 2, 1);
INSERT INTO user_comments (body, user_id, todo_list) VALUES ("Remember to confirm reservation", 3, 1);
INSERT INTO user_comments (body, user_id, todo_list) VALUES ("Meeting before the big game!", 4, 1);
INSERT INTO user_comments (body, user_id, todo_list) VALUES ("Don't forget to invite friend from work!", 5, 1);

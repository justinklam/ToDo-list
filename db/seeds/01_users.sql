-- Users table seeds here (Example)
INSERT INTO users (name, email, password) VALUES ('Alice', 'alice_wonderland@gmail.com', '1');
INSERT INTO users (name, email, password) VALUES ('Kira', 'kira.hufflepuff@hotmail.com', '2');
INSERT INTO users (name, email, password) VALUES ('Anthony', 'adognamedpotato@outlook.com', '3');
INSERT INTO users (name, email, password) VALUES ('Justin', 'justin@gmail.com', '4');
INSERT INTO users (name, email, password) VALUES ('Dara', 'dara@gmail.com', '5');

-- These are the 5 categories || Category IDs are: 1- Films, 2- Restaurants, 3- Books (To Read), 4- Products (To Buy) | Other
INSERT INTO todo_categories (category_name) VALUES ('Films');
INSERT INTO todo_categories (category_name) VALUES ('Restaurants');
INSERT INTO todo_categories (category_name) VALUES ('Books');
INSERT INTO todo_categories (category_name) VALUES ('Products');
INSERT INTO todo_categories (category_name) VALUES ('Other');

-- Alice list for each category
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (1, 1, 'List Title 1', 'Casino Royale', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (1, 2, 'List Title 2', 'Red Lobster', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (1, 3, 'List Title 3', 'Hitchhiker''s Guide to the Galaxy', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (1, 4, 'List Title 4', 'new iPhone out Sept 25th!', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (1, 5, 'List Title 5', 'Oil change due Friday', '2021-10-20 20:00:00', TRUE);
-- Alice multiple films
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (1, 1, 'List Title 1', 'Lion king', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (1, 1, 'List Title 1', 'Harry Potter and the Sorcer''s Stone', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (1, 1, 'List Title 1', 'Paw Patrol', '2021-10-20 20:00:00', TRUE);

-- Kira List for each category
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (2, 1, 'List Title 1', 'Casino Royale', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (2, 2, 'List Title 2', 'Red Lobster', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (2, 3, 'List Title 3', 'Hitchhiker''s Guide to the Galaxy', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (2, 4, 'List Title 4', 'new iPhone out Sept 25th!', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (2, 5, 'List Title 5', 'Oil change due Friday', '2021-10-20 20:00:00', TRUE);
--  Kira multiple restaurants
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (2, 2, 'List Title 2', 'The Keg', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (2, 2, 'List Title 2', 'McDonald''s', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (2, 2, 'List Title 2', 'Thai Express', '2021-10-20 20:00:00', TRUE);

-- Anthony's List for each category
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (3, 1, 'List Title 1', 'Casino Royale', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (3, 2, 'List Title 2', 'Red Lobster', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (3, 3, 'List Title 3', 'Hitchhiker''s Guide to the Galaxy', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (3, 4, 'List Title 4', 'new iPhone out Sept 25th!', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (3, 5, 'List Title 5', 'Oil change due Friday', '2021-10-20 20:00:00', TRUE);
-- Anthony multiple books
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (3, 3, 'List Title 3', 'Einstein''s Dreams', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (3, 3, 'List Title 3', 'The Amazing Adventures of Kavalier and Clay', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (3, 3, 'List Title 3', 'JPOD', '2021-10-20 20:00:00', TRUE);

-- Justin's List for each category
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (4, 1, 'List Title 1', 'Casino Royale', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (4, 2, 'List Title 2', 'Red Lobster', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (4, 3, 'List Title 3', 'Hitchhiker''s Guide to the Galaxy', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (4, 4, 'List Title 4', 'new iPhone out Sept 25th!', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (4, 5, 'List Title 5', 'Oil change due Friday', '2021-10-20 20:00:00', TRUE);
-- Justin multiple products
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (4, 4, 'List Title 4', 'New Samsung flip phone this week-end', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (4, 4, 'List Title 4', 'new Nike''s in November', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (4, 4, 'List Title 4', 'checkout Amazon wishlist', '2021-10-20 20:00:00', TRUE);

-- Dara's List for each category
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (5, 1, 'List Title 1', 'Casino Royale', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (5, 2, 'List Title 2', 'Red Lobster', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (5, 3, 'List Title 3', 'Hitchhiker''s Guide to the Galaxy', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (5, 4, 'List Title 4', 'new iPhone out Sept 25th!', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (5, 5, 'List Title 5', 'Oil change due Friday', '2021-10-20 20:00:00', TRUE);
-- Dara multiple others
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (5, 5, 'List Title 5', 'buy all school books for English class', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (5, 5, 'List Title 5', 'call dad for his birthday', '2021-10-20 20:00:00', TRUE);
INSERT INTO user_lists (user_id, category_id, title, to_do_task, to_do_date, is_active) VALUES (5, 5, 'List Title 5', 'manicure scheduled for Saturday', '2021-10-20 20:00:00', TRUE);


-- Comments feature TBC
-- INSERT INTO user_comments (body, user_id, todo_list) VALUES ("Can't wait to go down the rabbit hole!", 1, 1);
-- INSERT INTO user_comments (body, user_id, todo_list) VALUES ("Meeting after the Quidditch match!", 2, 1);
-- INSERT INTO user_comments (body, user_id, todo_list) VALUES ("Remember to confirm reservation", 3, 1);
-- INSERT INTO user_comments (body, user_id, todo_list) VALUES ("Meeting before the big game!", 4, 1);
-- INSERT INTO user_comments (body, user_id, todo_list) VALUES ("Don't forget to invite friend from work!", 5, 1);


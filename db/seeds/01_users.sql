-- Users table seeds here (Example)
INSERT INTO users (name, email, password) VALUES ('Alice', 'alice_wonderland@gmail.com', '1');
INSERT INTO users (name, email, password) VALUES ('Kira', 'kira.hufflepuff@hotmail.com', '2');
INSERT INTO users (name, email, password) VALUES ('Anthony', 'adognamedpotato@outlook.com', '3');
INSERT INTO users (name, email, password) VALUES ('Justin', 'justin@gmail.com', '4');
INSERT INTO users (name, email, password) VALUES ('Dara', 'dara@gmail.com', '5');

-- These are the 5 categories || Category IDs are: 1- Films, 2- Restaurants, 3- Books (To Read), 4- Products (To Buy) | Other
-- INSERT INTO todo_categories (category_name) VALUES ('Films');
-- INSERT INTO todo_categories (category_name) VALUES ('Restaurants');
-- INSERT INTO todo_categories (category_name) VALUES ('Books');
-- INSERT INTO todo_categories (category_name) VALUES ('Products');
-- INSERT INTO todo_categories (category_name) VALUES ('Other');

INSERT INTO user_lists (user_id, category_name, title, is_active) VALUES (1, 'Films', 'User List 1', TRUE);
INSERT INTO user_lists (user_id, category_name, title, is_active) VALUES (2, 'Restaurants', 'User List 2', TRUE);
INSERT INTO user_lists (user_id, category_name, title, is_active) VALUES (3, 'Books', 'User List 3', TRUE);
INSERT INTO user_lists (user_id, category_name, title, is_active) VALUES (4, 'Products', 'User List 4', TRUE);
INSERT INTO user_lists (user_id, category_name, title, is_active) VALUES (5, 'Other', 'User List 5', TRUE);

-- List for Alice
INSERT INTO user_lists (user_id, category_name, title, is_active) VALUES (1, 'Restaurants', 'Fav restos to try this summer!', TRUE);
INSERT INTO user_lists (user_id, category_name, title, is_active) VALUES (1, 'Books', 'Winter Reading list', TRUE);



-- ////////////////////////////////////////////////////////////

-- Todo lists for Category 1 - Films
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (1, 'Casino Royale', '2021-10-20 20:00:00', TRUE);
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (2, 'Casino Royale', '2021-10-20 20:00:00', TRUE);
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (3, 'Casino Royale', '2021-10-20 20:00:00', TRUE);
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (4, 'Casino Royale', '2021-10-20 20:00:00', TRUE);
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (5, 'Casino Royale', '2021-10-20 20:00:00', TRUE);

-- Todo lists for Category 2 - Restaurants
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (1, 'Red Lobster', '2021-10-30 20:00:00', TRUE);
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (2, 'Red Lobster', '2021-10-30 20:00:00', TRUE);
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (3, 'Red Lobster', '2021-10-30 20:00:00', TRUE);
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (4, 'Red Lobster', '2021-10-30 20:00:00', TRUE);
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (5, 'Red Lobster', '2021-10-30 20:00:00', TRUE);

-- Todo lists for Category 3 - Books
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (1, 'Hitchhiker''s Guide to the Galaxy', '2021-10-15 20:00:00', TRUE);
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (2, 'Hitchhiker''s Guide to the Galaxy', '2021-10-15 20:00:00', TRUE);
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (3, 'Hitchhiker''s Guide to the Galaxy', '2021-10-15 20:00:00', TRUE);
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (4, 'Hitchhiker''s Guide to the Galaxy', '2021-10-15 20:00:00', TRUE);
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (5, 'Hitchhiker''s Guide to the Galaxy', '2021-10-15 20:00:00', TRUE);

-- Todo lists for Category 4 - Products
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (1, 'new iPhone out Sept 25th!', '2021-10-10 20:00:00', TRUE);
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (2, 'new iPhone out Sept 25th!', '2021-10-10 20:00:00', TRUE);
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (3, 'new iPhone out Sept 25th!', '2021-10-10 20:00:00', TRUE);
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (4, 'new iPhone out Sept 25th!', '2021-10-10 20:00:00', TRUE);
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (5, 'new iPhone out Sept 25th!', '2021-10-10 20:00:00', TRUE);

-- Todo lists for Category 5 - Other
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (1, 'Oil change due Friday', '2021-10-31 20:00:00', TRUE);
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (2, 'Oil change due Friday', '2021-10-31 20:00:00', TRUE);
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (3, 'Oil change due Friday', '2021-10-31 20:00:00', TRUE);
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (4, 'Oil change due Friday', '2021-10-31 20:00:00', TRUE);
INSERT INTO todo_lists_items (user_list_id, to_do_task, to_do_date, is_active) VALUES (5, 'Oil change due Friday', '2021-10-31 20:00:00', TRUE);


-- Comments feature TBC
-- INSERT INTO user_comments (body, user_id, todo_list) VALUES ("Can't wait to go down the rabbit hole!", 1, 1);
-- INSERT INTO user_comments (body, user_id, todo_list) VALUES ("Meeting after the Quidditch match!", 2, 1);
-- INSERT INTO user_comments (body, user_id, todo_list) VALUES ("Remember to confirm reservation", 3, 1);
-- INSERT INTO user_comments (body, user_id, todo_list) VALUES ("Meeting before the big game!", 4, 1);
-- INSERT INTO user_comments (body, user_id, todo_list) VALUES ("Don't forget to invite friend from work!", 5, 1);


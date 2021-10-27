-- SELECT all books (category_id = 1) for a given user.
-- *** need to replace 'user_id = 3' with id of user that is logged in

SELECT to_do_task as Books
FROM user_lists
WHERE category_id = 3 AND user_id = 3;

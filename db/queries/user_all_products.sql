-- SELECT all products (category_id = 1) for a given user.
-- *** need to replace 'user_id = 4' with id of user that is logged in

SELECT to_do_task as Products
FROM user_lists
WHERE category_id = 4 AND user_id = 4;

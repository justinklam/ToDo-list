-- SELECT all films (category_id = 1) for a given user.
-- *** need to replace 'user_id = 1' with id of user that is logged in

SELECT to_do_task as Films
FROM user_lists
WHERE category_id = 1 AND user_id = 1;

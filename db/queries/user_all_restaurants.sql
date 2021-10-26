-- SELECT all restaurants (category_id = 1) for a given user.
-- *** need to replace 'user_id = 2' with id of user that is logged in

SELECT to_do_task as Restaurants
FROM user_lists
WHERE user_lists.category_id = 2 AND user_lists.user_id = 2;

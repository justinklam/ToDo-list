-- Drop and recreate Widgets table (Example)

-- DROP TABLE IF EXISTS widgets CASCADE;
-- CREATE TABLE widgets (
--   id SERIAL PRIMARY KEY NOT NULL,
--   user_id INTEGER REFERENCES users(id),
--   name VARCHAR(255) NOT NULL
-- );

-- DROP TABLE IF EXISTS todo_lists_items CASCADE;

-- CREATE TABLE todo_lists_items (
--   id SERIAL PRIMARY KEY NOT NULL,
--   user_list_id INTEGER REFERENCES user_lists(id),
--   to_do_task VARCHAR(255) NOT NULL,
--   to_do_date TIMESTAMP NOT NULL,
--   is_active BOOLEAN NOT NULL DEFAULT TRUE,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE user_comments (
--   id SERIAL PRIMARY KEY NOT NULL,
--   body TEXT,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   todo_list INTEGER REFERENCES todo_lists(id) ON DELETE CASCADE
-- )

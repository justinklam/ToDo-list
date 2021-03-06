DROP TABLE IF EXISTS user_lists CASCADE;

CREATE TABLE user_lists (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES todo_categories(id),
  title VARCHAR(255) NOT NULL,
  to_do_task VARCHAR(255) NOT NULL,
  to_do_date DATE NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

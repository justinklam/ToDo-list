DROP TABLE IF EXISTS todo_categories CASCADE;

CREATE TABLE todo_categories (
  id SERIAL PRIMARY KEY NOT NULL,
  category_name TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
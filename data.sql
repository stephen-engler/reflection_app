-- Database should be reflection_board
CREATE DATABASE "reflection_board";

-- Switch to "reflection_board" before running the following
-- Table to store the reflections
CREATE TABLE "reflection" (
  "id" serial primary key,
  "topic" varchar(120),
  "description" varchar(480),
  "bookmarked" boolean default false,
  "date" date not null default CURRENT_DATE
);

-- Sample reflection
INSERT INTO "reflection" ("topic", "description")
VALUES ('What went well?', 'Helped my fellow developers learn the material.'),
('Better next time?', 'Get more sleep.'),
('What went well?', 'Built a many full stack web applications!'),
('Better next time?', 'Make sure to take time to take care of myself, i.e. go to the gym.'),
('What went well?', 'Taught myself React Native in my own time.'),
('Better next time?', 'Use trello to manage tasks.'),
('What went well?', 'Learned to work as part of a collaborative group.');




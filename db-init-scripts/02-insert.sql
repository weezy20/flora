-- Insert mock data into blog_posts
INSERT INTO blog_posts (post_datetime, word_count, time_to_read, blog_content, tags)
VALUES 
('2024-11-23 10:00:00', 1200, 6, 'Exploring the fascinating world of plants!', 'plants, botany, nature'),
('2024-11-22 15:30:00', 850, 4, 'A guide to indoor gardening for beginners.', 'gardening, indoors, tips'),
('2024-11-21 08:45:00', 600, 3, 'How to grow herbs in your kitchen.', 'herbs, kitchen, gardening'),
('2024-11-20 12:00:00', 1500, 8, 'The best flowering plants for your garden.', 'flowers, gardening, beauty');

-- Insert mock data into tags
INSERT INTO tags (tag_name, blog_post_id)
VALUES
('plants', 1),
('botany', 1),
('nature', 1),
('gardening', 2),
('indoors', 2),
('tips', 2),
('herbs', 3),
('kitchen', 3),
('gardening', 3),
('flowers', 4),
('gardening', 4),
('beauty', 4);

-- Verify the data
SELECT * FROM blog_posts;
SELECT * FROM tags;

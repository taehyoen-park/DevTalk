SELECT 
    post.postid, 
    post.title, 
    post.content, 
    post.time, 
    users.name AS username, 
    array_agg(tags.tagname) AS tags
FROM post
JOIN users ON post.userid = users.userid
JOIN posts_tags ON post.postid = posts_tags.postid
JOIN tags ON posts_tags.tagid = tags.tagid
GROUP BY 
    post.postid, 
    post.title, 
    post.content, 
    post.time, 
    users.name
ORDER BY post.time DESC;
-- This SQL query retrieves posts along with their associated tags and the username of the author.
-- It joins the `post`, `users`, `posts_tags`, and `tags` tables to gather all necessary information.

DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
    entry_id INT GENERATED ALWAYS AS IDENTITY,
    category VARCHAR (100) NOT NULL,
    content VARCHAR (1000) NOT NULL,
    date_created VARCHAR (100) NOT NULL,
    time_created INT NOT NULL,
    PRIMARY KEY (entry_id)
    -- FOREIGN KEY (entry_id) REFERENCES table("x")
);

INSERT into entries 
(category, content, date_created, time_created)
VALUES
('personal', 'This is my first personal diary entry', 'Thu Nov 23 2023', 5625212),
('work', 'Need to email Chris', 'Wed Nov 22 2023', 546584),
('personal', 'Amanda reccomended watching Game of Thrones. I will give it a go!', 'Fri Nov 24 2023', 65),
('work', 'Complete spreadhsheet', 'Fri Nov 24 2023', 56464),
('personal', 'Need to do groceries', 'Fri Nov 24 2023', 10);


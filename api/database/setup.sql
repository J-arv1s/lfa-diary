DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
    entry_id INT GENERATED ALWAYS AS IDENTITY,
    category VARCHAR (100) NOT NULL,
    content VARCHAR (1000) NOT NULL,
    date_created VARCHAR (100) NOT NULL,
    time_create INT NOT NULL,
    PRIMARY KEY (entry_id)
    -- FOREIGN KEY (entry_id) REFERENCES table("x")
);

INSERT into entries 
(category, content, date_created, time_create)
VALUES

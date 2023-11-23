CREATE TABLE entry (
    entry_id INT GENERATED ALWAYS AS IDENTITY,
    category VARCHAR (100) NOT NULL,
    content VARCHAR (1000) NOT NULL,
    time_made VARCHAR (100) NOT NULL,
    PRIMARY KEY (entry_id)
    -- FOREIGN KEY (entry_id) REFERENCES table("x")
);
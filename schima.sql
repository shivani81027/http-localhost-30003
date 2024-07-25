-- show tables;
-- select * from school;
-- select * from marksheet;
-- select * from student;

-- CREATE TABLE user (username VARCHAR(50) primary key, email VARCHAR(50) primary key);
-- INSERT INTO st_name ( username, email) VALUES
--      ('John','gsfuery@521321' ),
   

--  select * from st_name;


--     CREATE TABLE st_age (
--          id_no INT  primary key,
--     age INT 
   
-- );


-- INSERT INTO st_age (id_no, age) VALUES
--     ( 7, 20),
--     (5, 22),
--     (8, 21),
--     (9, 23);
   
    -- select * from st_age ;


    -- select * from st_name
    --  inner join st_age
    --  on st_name.id_no=st_age.id_no;

-- select * from st_name
--      left join st_age
--      on st_name.id_no=st_age.id_no;

--      select * from st_name
--      right join st_age
--      on st_name.id_no=st_age.id_no;

--  select * from st_name
--       left join st_age
--     on st_name.id_no=st_age.id_no
--   union select * from st_name
--      right join st_age
--     on st_name.id_no=st_age.id_no;



-- SELECT st_name.id_no, st_name.s_name, st_age.age
-- FROM st_name
-- INNER JOIN st_age   on st_name.id_no=st_age.id_no;

    
--  select  st_name.s_name, st_age.age 
--   from st_name
--       right join st_age
--     on st_name.id_no=st_age.id_no
--   union select  st_name.s_name, st_age.age
--    from st_name
--      left join st_age
--     on st_name.id_no=st_age.id_no;

--  select st_name.id_no, st_name.s_name, st_age.age 
--   from st_name
--       left join st_age
--     on st_name.id_no=st_age.id_no
--   union select  st_name.s_name, st_age.age
--    from st_name
--      right join st_age
--     on st_name.id_no=st_age.id_no;

    --  drop table st_name;
    --    drop table st_age;
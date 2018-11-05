create table if not exists organisations (
    id int not null auto_increment primary key,
    name varchar(1000) unique,
    index name_idx (name)
);

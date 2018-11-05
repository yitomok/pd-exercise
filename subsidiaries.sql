create table if not exists subsidiaries (
    org_id int not null,
    parent_id int not null,
    primary key (org_id, parent_id),
    foreign key (org_id) references organisations (id) on delete cascade,
    foreign key (parent_id) references organisations (id) on delete cascade
);

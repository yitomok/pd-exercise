insert into organisations (id, name) values (1, 'Paradise Island');
insert into organisations (id, name) values (2, 'Banana tree');
insert into organisations (id, name) values (3, 'Big banana tree');
insert into organisations (id, name) values (4, 'Yellow Banana');
insert into organisations (id, name) values (5, 'Brown Banana');
insert into organisations (id, name) values (6, 'Black Banana');
insert into organisations (id, name) values (7, 'Green Banana');
insert into organisations (id, name) values (8, 'Phoneutria Spider');

insert into subsidiaries (org_id, parent_id) values (2, 1);
insert into subsidiaries (org_id, parent_id) values (3, 1);
insert into subsidiaries (org_id, parent_id) values (4, 2);
insert into subsidiaries (org_id, parent_id) values (5, 2);
insert into subsidiaries (org_id, parent_id) values (6, 2);
insert into subsidiaries (org_id, parent_id) values (4, 3);
insert into subsidiaries (org_id, parent_id) values (5, 3);
insert into subsidiaries (org_id, parent_id) values (6, 3);
insert into subsidiaries (org_id, parent_id) values (7, 3);
insert into subsidiaries (org_id, parent_id) values (8, 6);

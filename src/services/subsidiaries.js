import { pool } from '../helpers/mysql.pool';

export const create = (id, parentId) => new Promise((resolve, reject) => {
    pool.query('INSERT INTO subsidiaries SET ?', {
        org_id: id,
        parent_id: parentId
    }, (err, results) => {
        if (err) {
            reject(err);
        } else {
            resolve(results);
        }
    });
});

export const find = (id, parentId) => new Promise((resolve, reject) => {
    pool.query('SELECT org_id, parent_id FROM subsidiaries WHERE org_id = ? AND parent_id = ?', [
        id, parentId
    ], (err, results) => {
        if (err) {
            reject(err);
        } else {
            resolve(results);
        }
    });
});

export const upsertSubsidiary = async (id, parentId) => {
    let sub = await find(id, parentId);

    if (sub && sub.length) {
        return sub[0];
    } else {
        let result = await create(id, parentId);

        return ({
            org_id: id,
            parent_id: parentId
        });
    }
}

export default { create, find, upsertSubsidiary };

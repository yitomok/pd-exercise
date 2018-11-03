import { limit } from '../helpers/configs/mysql';
import { pool } from '../helpers/mysql.pool';

export const create = (name) => new Promise((resolve, reject) => {
    pool.query('INSERT INTO organisations SET ?', { name }, (err, results) => {
        if (err) {
            reject(err);
        } else {
            resolve(results);
        }
    });
});

export const findByName = (name) => new Promise((resolve, reject) => {
    pool.query('SELECT * FROM organisations WHERE name = ?', [ name ], (err, results) => {
        if (err) {
            reject(err);
        } else {
            resolve(results);
        }
    });
});

export const upsertOrganisation = async (name) => {
    let org = await findByName(name);

    if (org && org.length) {
        return org[0];
    } else {
        let result = await create(name);

        return ({
            id: result.insertId,
            name: name
        });
    }
}

export const findFirstDegreeByName = (name, last='') => new Promise((resolve, reject) => {
    /**
     * Get all first degree relatives sorted by name,
     * i.e. immediate parents, siblings and children
     *
     * The name column from o2 (organisations) contains the result
     *
     * The WHERE clause explained in order:
     * 1. Check the given name and avoid same name appears in result
     * 2. Paginate with the last name returned
     * 3. Check there are any parents
     * 4. Check there are any daughters
     * 5. Check there are any sisters
     */

    let query = `SELECT
        DISTINCT o2.name AS org_name,
        CASE
            WHEN o2.id = s1.parent_id THEN 'parent'
            WHEN o1.id = s1.parent_id THEN 'daughter'
            ELSE 'sister'
        END AS relationship_type
    FROM organisations o1, organisations o2, subsidiaries s1, subsidiaries s2
    WHERE
        o1.name = ? AND o1.name <> o2.name
        AND o2.name > ?
        AND (
            o1.id = s1.org_id AND o2.id = s1.parent_id AND o1.id = s2.org_id AND o2.id = s2.parent_id
            OR
            o1.id = s1.parent_id AND o2.id = s1.org_id AND o1.id = s2.parent_id AND o2.id = s2.org_id
            OR
            o1.id = s1.org_id AND o2.id = s2.org_id AND s1.parent_id = s2.parent_id
        )
    ORDER BY org_name LIMIT ?`;

    pool.query(query, [ name, last, limit ], (err, results) => {
        if (err) {
            reject(err);
        } else {
            resolve(results);
        }
    });
});

export default { create, findByName, upsertOrganisation, findFirstDegreeByName };
